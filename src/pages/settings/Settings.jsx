import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">UPDATE</span>
                    <span className="settingsDeleteTitle">DELETE</span>
                </div>
                <form className="settingsForm">
                <label>PROFILE PICTURE</label>
                <div className="settingsPP">
                    <img alt="pic"
                    src="https://i.ytimg.com/vi/al9ZCYIKGG0/hqdefault.jpg"
                    />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                     <input type="file" id="fileInput" style={{display: "none"}} />

                </div>
                <label>USERNAME</label>
                <input type="text" placeholder = "name" />
                <label>EMAIL</label>
                <input type="email" placeholder = "name@my.com" />
                <label>PASSWORD</label>
                <input type="password"  />
                <button className="settingsSubmit">UPDATE</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
