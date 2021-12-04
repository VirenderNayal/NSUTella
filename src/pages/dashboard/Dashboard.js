import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../components/footer/Footer';
import TopBar from '../../components/TopBar/TopBar';
import { useAuth } from '../../contexts/AuthContext';
import userImg from "../../assets/user.svg";
import './dashboard.css';

export default function Dashboard() {
    const [error, setError] = useState();
    const history = useHistory();
    const { currentUser, logout, updateEmail, updatePassword } = useAuth();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [loading, setLoading] = useState(false);

    async function handleLogout(event) {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            await logout();
            history.push("/account");
        } catch {
            setError("Failed Logout");
        }
        setLoading(false);
    }

    function editInfo(event) {
        event.preventDefault();

        setError("");
        setLoading(true);

        const promises = [];
        if (email !== currentUser.email) {
            promises.push(updateEmail(email));
        }
        if (password !== "") {
            promises.push(updatePassword(password));
        }

        Promise.all(promises).then(() => {
            setShow(!show);
        }).catch(() => {
            setError("Cannot Update Information.")
        }).finally(() => {
            setLoading(false);
        });

        setEmail();
        setPassword();
        setConfPassword();
    }

    return (
        <div>
            {
                show &&
                <div className="d-flex modal-edit px-5 font-popins">
                    <form onSubmit={editInfo} className="w-100 d-flex flex-column h-100 align-items-center justify-content-evenly">
                        <p className="fs-2 fw-bold">Edit Info</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="New Email" />
                        <p className="pb-0 mb-0">Leave blank to keep same.</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
                        <input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="Confirm New Password" />
                        <div className="w-100 d-flex justify-content-evenly">
                            <button disabled={loading} type="submit" className="w-25 btn btn-danger">Submit</button>
                            <button type="button" onClick={() => setShow(!show)} className="w-25 btn btn-secondary">Close</button>
                        </div>
                    </form>
                </div>
            }
            <TopBar />
            <div className="d-flex dashboard align-items-center justify-content-evenly font-popins">
                <img src={userImg} />
                <div>
                    {error && error}
                    <p className="fs-3">
                        <i className="fa px-2 fa-envelope" aria-hidden="true"></i>
                        {currentUser.email}
                    </p>
                    {currentUser.emailVerified === false && <p className="fs-6 px-5">Please verify your email.</p>}
                    <button onClick={() => setShow(!show)} className="btn btn-success">Edit<i className="fs-6 px-2 fa fa-pencil" aria-hidden="true"></i></button>
                </div>
                <button className="fs-3 logout-btn" onClick={handleLogout}>Logout <i className="fs-5 fa fa-angle-double-right" aria-hidden="true"></i></button>
            </div>
            <Footer />
        </div>
    )
}
