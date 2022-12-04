import { useState } from 'react';
import './login.scss'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {Link, Navigate, useNavigate} from 'react-router-dom'

const Login = () => {
  const [inputs, setInputs] = useState({});
  const {dispatch, state} = useContext(AuthContext)
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
          const res = await axios.post("http://localhost:5000/api/auth/login", inputs, {withCredentials: true});
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
    <div className="loginContainer">
        <div className="heroText">
            <h1>MERN SOCIAL MEDIA</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vero.</p>
        </div>
        <div className="loginForm">
            <h1>Welcome back!</h1>
            <form onSubmit={handleLogin}>
            {state.error && <span className='errorMessage'>{state?.error}!</span>}
                <input type="email" placeholder="Email address" onChange={handleChange} name='email' required/>
                <input type="password" placeholder='Password' onChange={handleChange} name='password' required/>
                <button disabled={state.isFetching}>{state.isFetching ? "Please wait...": "Login"}</button>
                <a href="/">Forget Password</a>
            </form>
            <hr />
            <Link to="/register" className='createNewAccount'>Create New Account</Link>
        </div>
    </div>
  )
}

export default Login