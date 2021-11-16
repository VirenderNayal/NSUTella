import TopBar from "../../components/TopBar/TopBar";
import "./account.css";

export default function Account() {
    return (
        <div>
            <TopBar />
            <section class="section_login">
                <div class="container_login">
                    <div class="signIn">
                        <div>
                            <h2 class="head2">Sign In</h2>
                            <ul class="info">
                                <li>
                                    <span>
                                        <h4>Username</h4>
                                        <input type="text" placeholder="Enter Username" name="uname" required />
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <h4>Password</h4>
                                        <input type="password" placeholder="Enter Password" name="psw" required />
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <input type="checkbox" checked="checked" name="remember" />
                                        <label for="remember" style={{width: "max-content"}}>Remember me</label>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <button class="btn info">LOGIN</button>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="contactform">
                        <h2>New User | Sign Up</h2>
                        <div class="formbox">
                            <div class="inputbox w50">
                                <input type="text" name="uname" required />
                                <span>Username</span>
                            </div>
                            <div class="inputbox w50">
                                <input type="text" name="uname" required />
                                <span> Confirm Username</span>
                            </div>
                            <div class="inputbox w50">
                                <input type="password" name="psw" required />
                                <span>Password</span>
                            </div>
                            <div class="inputbox w50">
                                <input type="password" name="psw" required />
                                <span>Confirm Password</span>
                            </div>
                            <div class="inputbox w100">
                                <input type="submit" value="Confirm" required />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

