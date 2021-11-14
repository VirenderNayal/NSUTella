import {Link} from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    // const user = false;
    const user = true;
    return (
        <div className="top">
          <div className="topLeft">
             

              <i className="topIcon fab fa-instagram" ></i>
                    
              <i className="topIcon fab fa-linkedin" ></i>
              
              <i className="topIcon fab fa-telegram-plane" ></i>
          </div>
          <div className="topCenter">
              <ul className="topList">
                  <li className="topListItem">
                      <Link className="link" to="/" >HOME</Link></li>
                  <li className="topListItem"> <Link className="link" to="/explore" >EXPLORE</Link></li>
                  <li className="topListItem"> <Link className="link" to="/write" >WRITE</Link></li>
                  <li className="topListItem"> <Link className="link" to="/societies" >SOCIETIES</Link></li>
                  <li className="topListItem"> 
                  {user && "LOGOUT"}
                  </li>
              </ul>
          </div>
          <div className="topRight">
              {
               user ? (
               <Link className="link" to="/settings">
              <img className="topImg" src="https://www.luamong.com/assets/images/username-image.png" />
               </Link>
               
               ): ( <ul className="topList">
                   <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                  <li className="topListItem"> <Link className="link" to="/register">REGISTER</Link></li>
                   
                   </ul>
               )
              
}
              <i className ="searchIcon fas fa-search"></i>
          </div>

        </div>
    )
}
