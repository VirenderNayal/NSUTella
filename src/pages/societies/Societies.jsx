import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
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
                                <img style={{width: "200px", height : "200px", marginTop: "20px"}} src={soc.img} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{soc.name}</h5>
                                    <p className="card-text">{soc.desc}</p>
                                </div>
                            </div>
                        </div>)
                    )
                }
            </div>
        </div>
    )
}

export default Societies
