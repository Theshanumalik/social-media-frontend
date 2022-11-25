import { useState } from 'react';
import './register.scss'

const Register = () => {
    const [inputs, setInputs] = useState({});
    const handleRegister = (e) => {
        e.preventDefault();
        console.log('form submitted')
    }
    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    console.log(inputs)
  return (
    <div className="registerContainer">
        <div className="heroText">
            <h1>MERN SOCIAL MEDIA</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vero.</p>
        </div>
        <div className="registerForm">
          <h1>Create account</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Full name" onChange={handleChange} name='name' required/>
                <input type="email" placeholder="Email address" onChange={handleChange} name='email' required/>
                <input type="password" placeholder='Password' onChange={handleChange} name='password' required/>
                <button>Register</button>
                <a href="/">Already have an account?</a>
            </form>
        </div>
    </div>
  )
}

export default Register