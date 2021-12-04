import React, { useState } from 'react';
import "./account.css";
import LoginBg from "../../assets/loginBg.svg";
import SignupBg from "../../assets/signupBg.svg";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/footer/Footer";

export default function Account() {
	const [login, setLogin] = useState(true);

	return (
		<div>
			<TopBar />
			<div className="container-account d-flex align-items-center justify-content-center">
				{
					login ?
						<div className="main-account d-flex align-items-center justify-content-around">
							<img src={LoginBg} />
							<div className="h-75 form-div d-flex flex-column align-items-center justify-content-between font-popins">
								<form className="h-75 d-flex flex-column align-items-center justify-content-between">
									<p className="fs-2 fw-bold">Welcome Back</p>
									<input placeholder="Email" type="email" />
									<input placeholder="Password" type="password" />
									<button className="w-100 btn font-mtsrt fs-5">LOGIN</button>
								</form>
								<p>Forgot Username/Password </p>
								<p onClick={() => setLogin(!login)} className="change-account"><i class="fa fa-arrow-circle-left" aria-hidden="true" /> Create an Account | Sign Up</p>
							</div>
						</div>
						:
						<div className="main-account d-flex align-items-center justify-content-around">
							<div className="h-75 form-div d-flex flex-column align-items-center justify-content-evenly font-popins">
								<form className="h-75 d-flex flex-column align-items-center justify-content-between">
									<p className="fs-2 fw-bold">Create an Account</p>
									<input placeholder="Email" type="email" />
									<input placeholder="Password" type="password" />
									<input placeholder="Confirm Password" type="password" />
									<button className="w-100 btn font-mtsrt fs-5">SIGNUP</button>
								</form>
								<p onClick={() => setLogin(!login)} className="change-account">Already have an Account | Sign In <i class="fa fa-arrow-circle-right" aria-hidden="true" /></p>
							</div>
							<img src={SignupBg} />
						</div>
				}
			</div>
			<Footer />
		</div>
	);
}
