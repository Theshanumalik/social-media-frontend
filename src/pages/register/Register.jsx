import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './register.scss'

const Register = () => {
    const [inputs, setInputs] = useState({});
    const {dispatch, state} = useContext(AuthContext)
    const handleRegister = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
          const res = await axios.post("http://localhost:5000/api/auth/register", inputs, {withCredentials: true});
          dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        } catch (error) {
          dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
        }
    }
    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
  if(state.user) return <Navigate to='/' />
  return (
    <div className="registerContainer">
        <div className="heroText">
            <h1>MERN SOCIAL MEDIA</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vero.</p>
        </div>
        <div className="registerForm">
          <h1>Create account</h1>
            <form onSubmit={handleRegister}>
            {state.error && <span className='errorMessage'>{state?.error}!</span>}
                <input type="text" placeholder="Full name" onChange={handleChange} name='name' required/>
                <input type="email" placeholder="Email address" onChange={handleChange} name='email' required/>
                <input type="password" placeholder='Password' onChange={handleChange} name='password' required/>
                <button disabled={state.isFetching}>{state.isFetching ? "Please wait...": "Register"}</button>
                <Link to="/">Already have an account?</Link>
            </form>
        </div>
    </div>
  )
}

export default Register