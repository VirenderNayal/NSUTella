import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Close } from '@material-ui/icons';
import { SidebarData } from './SidebarData';
import mainBg from "../../assets/mainBg.jpg";
import "./topbar.css";

export default function TopBar({ isHome }) {
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
                    <p className="pt-3">NSUTella</p>
                </div>
                <div className="d-flex col-6 justify-content-center align-items-center">
                    <Link className="px-4 py-1 link-item font-popins" to="/">Home</Link>
                    <Link className="px-4 py-1 link-item font-popins" to="/societies">NSUT Societies</Link>
                    <Link className="px-4 py-1 link-item font-popins" to="/blog">Blog</Link>
                    <Link className="px-4 py-1 link-item font-popins" to="/">Home</Link>
                </div>
                <div className="d-flex col-3 justify-content-end align-items-center">
                    <Link className="px-4 py-1 link-item font-popins" to="/">Account</Link>
                    <div className="px-4 py-1 me-3 link-item font-popins" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Menu</div>
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
                        <p className="fw-bold h1">Get guided.</p>
                    </div>
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </section><div class="arrow bounce">
                    <a class="fa fa-arrow-down fa-2x" href="#"></a>
                </div>
            </>)}
        </div>
    );
}
