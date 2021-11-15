import React from 'react';
import pic1 from '../../assets/sushant.png';
import pic2 from '../../assets/virender.jpg';
import pic3 from '../../assets/himanshi.jpg';
import pic4 from '../../assets/madhavi.png';
import './team.css';

const Team = () => {
    return (
        <div className="w-1000">
            <div className="header">
                Our Team
            </div>
            <div className="d-flex mx-3 mb-5 justify-content-between">
                <div className="team" >
                    <img src={pic1} alt="girl image"></img>
                    <div className="info">
                        <div className="name">Sushant Singh</div>
                        <div className="title">CEO and Founder</div>
                        <div className="social">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-snapchat-ghost"></i>
                        </div>
                    </div>
                </div>
                <div className="team" >
                    <img src={pic2} alt="girl image"></img>
                    <div className="info">
                        <div className="name">Virender Singh</div>
                        <div className="title">Co-Founder</div>
                        <div className="social">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-snapchat-ghost"></i>
                        </div>
                    </div>
                </div>
                <div className="team" >
                    <img src={pic3} alt="girl image"></img>
                    <div className="info">
                        <div className="name">Himanshi</div>
                        <div className="title">Project Manager</div>
                        <div className="social">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-snapchat-ghost"></i>
                        </div>
                    </div>
                </div>
                <div className="team" >
                    <img src={pic4} alt="girl image"></img>
                    <div className="info">
                        <div className="name">Madhavi Dixit </div>
                        <div className="title">Marketing Manager</div>
                        <div className="social">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-snapchat-ghost"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
