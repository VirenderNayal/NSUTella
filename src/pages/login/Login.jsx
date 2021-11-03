import {Link} from "react-router-dom";
import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>EMAIL</label>
                <input type="type"  className= "loginInput" placeholder="enter your email" />
                <label>PASSWORD</label>
                <input type="password" className= "loginInput"  placeholder="enter your password" />
                <button className="loginButton">
                    LOGIN
                </button>

            </form>
            <button className="loginRegisterButton">
                   <Link className="link" to="/register">REGISTER</Link>
                </button>

            
        </div>
    )
}
