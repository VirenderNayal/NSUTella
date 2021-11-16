import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Close, AccountCircleRounded, ListSharp } from '@material-ui/icons';
import { SidebarData } from '../../method-utilities/SidebarData';
import mainBg from "../../assets/mainBg.jpg";
import icon from "../../assets/favicon.png";
import "./topbar.css";

export default function TopBar({ isHome=false }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className={`d-flex flex-column vw-100 ${isHome && "vh-100"}`}
            style={{
                backgroundImage: `url(${mainBg})`,
                backgroundRepeat: 'no-repeat',
                zIndex: "-1"
            }}
        >
            <div className="d-flex">
                <div className="col-3 text-center font-mtsrt fw-bold h3">
                    <p className="pt-3"><img src={icon} className=" image-icon mb-2" alt="nsutella"/> NSUTella</p>
                </div>
                <div className="d-flex col-6 justify-content-center align-items-center">
                    <Link className="px-4 py-1 link-item font-popins" to="/">Home</Link>
                    <Link className="px-4 py-1 link-item font-popins" to="/explore">Explore</Link>
                    <Link className="px-4 py-1 link-item font-popins" to="/societies">NSUT Societies</Link>
                    <Link className="px-4 py-1 link-item font-popins" to="/blog">Blog</Link>
                </div>
                <div className="d-flex col-3 justify-content-end align-items-center">
                    <Link className="px-4 py-1 link-item font-popins" to="/"><AccountCircleRounded className="mb-1" /> Account</Link>
                    <div className="px-4 py-1 me-3 link-item font-popins" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Menu <ListSharp className="mb-1" /></div>
                </div>
            </div>
            <section className={`d-flex justify-content-center vh-100 side-nav ${isSidebarOpen && "active"}`}>
                <ul className='w-100'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <Close className="close-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
            {isHome && (<>
                <section className="d-flex h-100 flex-column align-items-center justify-content-center">
                    <div className="text-center">
                        <p className="fw-bold h1">We at NSUTella help you know NSUT better</p>
                    </div>
                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>A website for the well being of students</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            By Team <cite title="Source Title">For everyone</cite>
                        </figcaption>
                    </figure>
                </section><div className="arrow bounce">
                    <a className="fa fa-arrow-down fa-2x" href="#main"> </a>
                </div>
            </>)}
        </div>
    );
}
