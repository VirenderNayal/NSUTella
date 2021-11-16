import React from 'react';
import './git.css';
import pic from '../../assets/github.png';
import { Link } from "react-router-dom";

const Git = () => {
    return (
        <div className="gcontainer">
            {/* <div className="box1">About Us</div> */}
            <div className="box2">Github</div>
            <div className="box3">
                <div className="box3first">
                    <div className="box3firstcontent">
                        GitHub is a web-based version-control and collaboration platform for software developers. ... GitHub facilitates social coding by providing a web interface to the Git code repository and management tools for collaboration. GitHub can be thought of as a serious social networking site for software developers.
                    </div>
                    <div className="wrapper">
                        <div className="btn">
                            <Link to="/explore/git-github"><button type="button"> Know More </button></Link>
                        </div>
                    </div>
                </div>
                <div className="box3second">
                    <img src={pic} alt="mic" />
                </div>
            </div>
        </div>
    );
}
export default Git;