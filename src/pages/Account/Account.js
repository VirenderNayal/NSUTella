import React, { useState, useRef } from 'react';
import "./account.css";
import LoginBg from "../../assets/loginBg.svg";
import SignupBg from "../../assets/signupBg.svg";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/footer/Footer";
import { useHistory } from 'react-router';

// Auth Firebase
import { useAuth } from '../../contexts/AuthContext';

export default function Account() {
	const [isLogin, setIsLogin] = useState(true);

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confPassword, setConfPassword] = useState();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const { signup, login } = useAuth();

	async function handleSubmit(event) {
		event.preventDefault();

		if (!isLogin && (password !== confPassword)) {
			return setError("Passwords dont match.");
		}

		try {
			setError('');
			setLoading(true);
			if (isLogin) {
				await login(email, password);
				history.push("/dashboard");
			} else {
				await signup(email, password);
				history.push("/dashboard");
			}
		} catch {
			isLogin ? setError("Failed to login") : setError("Failed to create account.");
		}
		setEmail();
		setPassword();
		setConfPassword();
		setLoading(false);
	}

	return (
		<div>
			<TopBar />
			<div className="container-account d-flex align-items-center justify-content-center">
				{
					isLogin ?
						<div className="main-account d-flex align-items-center justify-content-around">
							<img src={LoginBg} />
							<div className="h-75 form-div d-flex flex-column align-items-center justify-content-between font-popins">
								{error && <alert>{error}</alert>}
								<form onSubmit={handleSubmit} className="h-75 d-flex flex-column align-items-center justify-content-between">
									<p className="fs-2 fw-bold">Welcome Back</p>
									<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
									<input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
									<button disabled={loading} type="submit" className="w-100 btn font-mtsrt fs-5">LOGIN</button>
								</form>
								<p>Forgot Username/Password </p>
								<p onClick={() => setIsLogin(!isLogin)} className="change-account"><i class="fa fa-arrow-circle-left" aria-hidden="true" /> Create an Account | Sign Up</p>
							</div>
						</div>
						:
						<div className="main-account d-flex align-items-center justify-content-around">
							<div className="h-75 form-div d-flex flex-column align-items-center justify-content-evenly font-popins">
								{error && <alert>{error}</alert>}
								<form onSubmit={handleSubmit} className="h-75 d-flex flex-column align-items-center justify-content-between">
									<p className="fs-2 fw-bold">Create an Account</p>
									<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
									<input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
									<input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="Confirm Password" type="password" />
									<button disabled={loading} type="submit" className="w-100 btn font-mtsrt fs-5">SIGNUP</button>
								</form>
								<p onClick={() => setIsLogin(!isLogin)} className="change-account">Already have an Account | Sign In <i class="fa fa-arrow-circle-right" aria-hidden="true" /></p>
							</div>
							<img src={SignupBg} />
						</div>
				}
			</div>
			<Footer />
		</div>
	);
}
