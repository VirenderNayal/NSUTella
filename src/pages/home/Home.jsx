import TopBar from "../../components/TopBar/TopBar";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
    return (
        <div>
            <TopBar />
            <div className="d-flex">
                <Posts />
                <Sidebar />
            </div>
        </div>
    );
}
