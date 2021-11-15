import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import { TrendingUpRounded } from '@material-ui/icons';
import "./blog.css";

export default function Blog() {
    return (
        <div className="col-12">
            <TopBar isHome={false} />
            <div className="blogHead d-flex justify-content-around">
                <div className="d-flex d-flex justify-content-start flex-column py-5">
                    <p className="heading font-mtsrt">Write to Express</p>
                    <p className="fs-5 font-popins px-4">What you like, know and want to share.</p>
                    <button className="btn mt-5 btn-primary">Start Writing</button>
                </div>
                <div className="d-flex">
                    <img src="#" alt="img" />
                </div>
            </div>
            <hr />
            <section className="my-5 px-5">
                <p><TrendingUpRounded />TRENDING</p>
                <div className="row row-cols-1 row-cols-md-3 g-4 customGrid">
                    <div className="col">
                        <div className="card">
                            <div className="d-flex justify-content-center align-items-start">
                                <p>01</p>
                                <div class="card-body px-3 py-0">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supportiral lead-in to additional content.</p>
                                    <p><span>Nov 14</span> - <span>5 min</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="d-flex justify-content-center align-items-start">
                                <p>02</p>
                                <div class="card-body px-3 py-0">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supportiral lead-in to additional content.</p>
                                    <p><span>Nov 14</span> - <span>5 min</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="d-flex justify-content-center align-items-start">
                                <p>03</p>
                                <div class="card-body px-3 py-0">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supportiral lead-in to additional content.</p>
                                    <p><span>Nov 14</span> - <span>5 min</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="my-5 px-5">
                <div class="row row-cols-1 row-cols-md-2 g-4 customGrid">
                    <div class="col">
                        <div class="card">
                            <div className="d-flex">
                                <div class="card-body">
                                    <h6 class="card-title">Card title</h6>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content</p>
                                    <p><span>Oct 27</span> - <span>15 min</span></p>
                                </div>
                                <img src="https://picsum.photos/200/150" alt="pic" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="d-flex">
                                <div class="card-body">
                                    <h6 class="card-title">Card title</h6>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content</p>
                                    <p><span>Oct 27</span> - <span>15 min</span></p>
                                </div>
                                <img src="https://picsum.photos/200/150" alt="pic" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div className="d-flex">
                                <div class="card-body">
                                    <h6 class="card-title">Card title</h6>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content</p>
                                    <p><span>Oct 27</span> - <span>15 min</span></p>
                                </div>
                                <img src="https://picsum.photos/200/150" alt="pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
