import TopBar from "../../components/TopBar/TopBar";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";

import "./home.css";

export default function Home() {
    return (
        <div>
            <TopBar isHome={true} />
            <div className="d-flex">
                <Posts />
                <Sidebar />
            </div>
            <div className="d-flex flex-column">
                <Team />
                <Footer />
            </div>
        </div>
    );
}
