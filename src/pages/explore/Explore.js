import React from 'react'
import TopBar from '../../components/TopBar/TopBar';
import CardItem from "./CardItem";
import OpenSource from "../../assets/openSource.png";
import GitGithub from "../../assets/git-github.png";
import "./explore.css";

function Explore() {
    return (
        <div className="col-12 explore">
            <TopBar />
            <div className='cards'>
                <h1 className="font-mtsrt ">!! EXPLORE !!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__item">
                            <CardItem
                                src={GitGithub}
                                text='Git & Github'
                                label='Git & Github'
                                path='/explore/git-github'
                            />
                            <CardItem
                                src={OpenSource}
                                text='Open Source'
                                label='Open Source'
                                path='/explore/open-source'
                            />

                        </ul>
                        <h1 className="font-mtsrt my-5">Other Interesting topics coming soon.</h1>
                        <ul className="cards__item">
                            <CardItem
                                src='https://c0.wallpaperflare.com/preview/355/109/197/quantum-computer-processor-computer-technology.jpg'
                                text='Quantum computers are machines that use phenomena from quantum physics to process information'
                                label='Quantum Computing'
                                path='/404'
                            />
                            <CardItem
                                src='https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201710/MIT-Explicit-Implicit-Learning_0.jpg?itok=-rE_63eI'
                                text='Brain waves are oscillating electrical voltages in the brain measuring just a few millionths of a volt'
                                label='Brain Waves'
                                path='/404'
                            />
                            <CardItem
                                src='https://lifefinanceblog.com/wp-content/uploads/2021/02/What-Is-Cryptocurrency-Definition-And-Explanation.jpg'
                                text='A cryptocurrency is a type of currency which uses digital files as money. Usually, the files are created using the same ways as cryptography (the science of hiding information).'
                                label='Cryptocurrency'
                                path='/404'
                            />
                            
                        </ul>
                        <br />
                        <ul className="cards__item">
                            <CardItem
                                src='https://abounaja.com/images/3D-Printing-and-Intellectual-Property.webp'
                                text='3D printing, or additive manufacturing, is the construction of a three-dimensional object from a CAD model or a digital 3D model.The term "3D printing" can refer to a variety of processes in which material is deposited, joined or solidified under computer control to create a three-dimensional object'
                                label='3-D Printing'
                                path='/404'
                            />
                            <CardItem
                                src='https://swansoftwaresolutions.com/wp-content/uploads/2020/02/08.20.20-What-is-Dart-and-how-is-it-used-1024x576.jpg'
                                text="Dart is a client-optimized language for developing fast apps on any platform. Its goal is to offer the most productive programming language for multi-platform development, paired with a flexible execution runtime platform for app frameworks."
                                label='Dart'
                                path='/404'
                            />
                            <CardItem
                                src='https://media.istockphoto.com/videos/engineer-moving-followed-by-conceptual-representation-of-digitization-video-id884016324?s=640x640'
                                text='Network security is a broad term that covers a multitude of technologies, devices and processes. In its simplest term, it is a set of rules and configurations designed to protect the integrity, confidentiality and accessibility of computer networks and data using both software and hardware technologies.'
                                label='Network Security'
                                path='/404'
                            />
                            
                        </ul>
                       
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
