import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import { societies } from "../../method-utilities/Societies-info/soc_content";

const Societies = () => {
    return (
        <div className="col-12">
            <TopBar isHome={false} />
            <h2 className="text-center align-middle pt-4 font-mtsrt fw-bold"> Societies of NSUT </h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-3">
                {
                    societies.map((soc) => (
                        <div class="col">
                            <div class="card h-100">
                                <img className="rounded mx-auto d-block my-3" style={{width: "200px", height : "200px"}} src="https://picsum.photos/200" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{soc.name}</h5>
                                    <p class="card-text">{soc.desc}</p>
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
