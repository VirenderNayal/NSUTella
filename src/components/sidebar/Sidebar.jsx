import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">HOW IT WORKS</span>
                <img className="img_1"src="https://img.freepik.com/free-vector/group-college-university-students-hanging-out_74855-5251.jpg?size=626&ext=jpg" />
                <p>	Let noble thoughts come to me from all directions<br/> ā no bhadrā kratvo yantu viśwataḥ <br/><br/>
                This project is made with sincere efforts by our team under the guidance of <b>Vandana Bhatia</b></p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">PARTS</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">DanceSoc</li>
                    <li className="sidebarListItem">TechSoc</li>
                    <li className="sidebarListItem">GammingSoc</li>
                    <li className="sidebarListItem">MusicSoc</li>
                    <li className="sidebarListItem">LiteratureSoc</li>
                    <li className="sidebarListItem">ConnectSoc</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CONTACT US</span>
                <div className="sidebarSocial">
                <i className="topIcon fab fa-facebook-square "></i>
              <i className="sidebarIcon fab fa-twitter-square" ></i>
              <i className="sidebarIcon fab fa-instagram" ></i>
              <i className="sidebarIcon fab fa-discord" ></i>
              <i className="sidebarIcon fab fa-linkedin" ></i>
              <i className="sidebarIcon fab fa-whatsapp" ></i>
              <i className="sidebarIcon fab fa-telegram-plane" ></i>
                </div>
                </div>
        </div>
    )
}
