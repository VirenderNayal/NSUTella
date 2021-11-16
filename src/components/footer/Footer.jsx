import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer font-popins">
            <div className="fcontainer">
                <div className="row">
                    <div className="footer-col">
                        <h4>NSUTella</h4>
                        <ul className="ful">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our approach</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Help Us</h4>
                        <ul className="ful">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Payment options</a></li>
                            <li><a href="#">Donate Now </a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>contact us</h4>
                        <ul className="ful">
                            <li><a href="#">NSUTella4all@gmail.com</a></li>
                            <li><a href="#">+91 9586439756</a></li>
                            {/* <li><a href="#">Kakrola, Near Dwarka Mor Metro Station, New delhi –110078. Paschim Vihar, New Delhi, Delhi 110063</a></li> */}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;