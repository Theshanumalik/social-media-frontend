import './login.scss'

const Login = () => {
  return (
    <div className="loginContainer">
        <div className="heroText">
            <h1>MERN SOCIAL MEDIA</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum cum, temporibus in fugiat omnis placeat, sint iusto necessitatibus fugit praesentium, tempore rem. Corporis quidem praesentium esse recusandae laudantium optio eius explicabo odit, accusantium, eveniet ipsam at labore temporibus soluta mollitia commodi sed? Quae consequatur nobis iure doloremque obcaecati unde.</p>
        </div>
        <div className="loginForm">
            <form>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder='Password' />
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