import {Link} from "react-router-dom";
import "./register.css";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">register</span>
            <form className="registerForm">
                <label>USERNAME</label>
                <input type="type"  className= "registerInput" placeholder="enter your Username" />
                <label>EMAIL</label>
                <input type="type"  className= "registerInput" placeholder="enter your email" />
                <label>PASSWORD</label>
                <input type="password" className= "registerInput"  placeholder="enter your password" />
                <button className="registerButton">
                    LOGIN
                </button>

            </form>
            <button className="registerLoginButton">
            <Link className="link" to="/login">LOGIN</Link>
                </button>

            
        </div>
    )
}