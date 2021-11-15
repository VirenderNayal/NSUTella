import React from 'react'
import Society from '../../components/society/Society'
import TopBar from '../../components/TopBar/TopBar'
// import "./societies.css"

const Societies = () => {
    return (
        <div className="col-12">
            <TopBar />
            <div class="row row-cols-1 row-cols-md-4 g-4 m-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Societies
