import React from "react";
import "./society.css";

const Society = () => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <div className="left">
            <h1 className="title">
              <a href="github.com">Venatus</a>
            </h1>
            <div className="image">
              <img className="logo" src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
            <div className="desc">Gaming society of Nsut</div>
            <div className="links">
              <h3>Connect with us </h3>
              <div>
                
              <i className="topIcon fab fa-instagram"></i>

              <i className="topIcon fab fa-linkedin"></i>

              <i className="topIcon fab fa-telegram-plane"></i>
              </div>
            
            </div>
          </div>
          <div className="right">
            <div>brief description</div>
            <div>
              <a href="#" className="color">
                Website link
              </a>
            </div>
            <div>
              more info Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod animi nulla iure, fugit vero qui totam ad deserunt
              praesentium ab iusto? Impedit cumque quidem fugit cum quia aliquid
              sapiente voluptates culpa molestias. Nostrum error odio numquam
              minus laboriosam iste dignissimos, nulla voluptatibus porro
              eveniet? Saepe distinctio rem odio nesciunt dolore!
            </div>
            <div>
              <button className="btn">application form</button>
              <button className="btn">for more info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Society;
