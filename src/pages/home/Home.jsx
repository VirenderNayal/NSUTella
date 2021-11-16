import TopBar from "../../components/TopBar/TopBar";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import Git from "../../components/git-hub-compo/git"
import Soc from "../../components/soc-compo/soc"

import "./home.css";

export default function Home() {
    return (
        <div>
            <TopBar isHome={true} />
            <div className="d-flex">
                {/* <Posts /> */}
                {/* <Sidebar /> */}
            </div>
            <div id="main" className="d-flex flex-column">
                <Git />
                <Soc/>
                <Team />
                <Footer />
            </div>
        </div>
    );
}
