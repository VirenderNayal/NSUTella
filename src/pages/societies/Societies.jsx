import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Footer from "../../components/footer/Footer";
import './societies.css';
import { societies } from "../../method-utilities/soc_content";

const Societies = () => {
    return (
        <div className="col-12">
            <TopBar />
            <h2 className="text-center align-middle pt-4 font-mtsrt fw-bold"> Societies of NSUT </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                {
                    societies.map((soc) => (
                        <div className="col">
                            <div className="card h-100 align-items-center">
                                <img style={{ width: "200px", height: "200px", marginTop: "20px", borderRadius: "8rem", border: "2px solid black" }} src={soc.img} class="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                    <h5 className="card-title fw-bold fs-2">{soc.name}</h5>
                                    <p class="fst-italic">{soc.tagline}.</p>
                                    <p className="card-text">{soc.desc}</p>
                                    <div className="soc-social">
                                        <p className="fs-3 font-mtsrt text-center">Connect</p>
                                        <div className="social-icons">
                                            <a href={soc.web} target={soc.web === "404" ? "_self" : "_blank"} > <img style={{ width: "50px", height: "50px", borderRadius: "20px", marginBottom: "12px" }} src={soc.img} /></a>
                                            <a href={soc.linkedin} target={soc.web === "404" ? "_self" : "_blank"} ><i className="fab fa-linkedin-in"></i></a>
                                            <a href={soc.ig} target={soc.web === "404" ? "_self" : "_blank"} ><i className="fab fa-instagram"></i></a>
                                            <a href={soc.fb} target={soc.web === "404" ? "_self" : "_blank"} ><i className="fab fa-facebook-f"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Societies
