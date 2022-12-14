import { useState } from 'react';
import './login.scss'

const Login = () => {
  const [inputs, setInputs] = useState({});
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('form submitted')
    }
    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    console.log(inputs)
  return (
    <div className="loginContainer">
        <div className="heroText">
            <h1>MERN SOCIAL MEDIA</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vero.</p>
        </div>
        <div className="loginForm">
          <h1>Welcome back!</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email address" onChange={handleChange} name='email' required/>
                <input type="password" placeholder='Password' onChange={handleChange} name='password' required/>
                <button>Login</button>
                <a href="/">Forget Password</a>
            </form>
            <hr />
            <button>Create New Account</button>
        </div>
    </div>
  )
}

export default Login