import "./post.css";
import {Link} from "react-router-dom";
export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.all-free-download.com/images/graphiclarge/hd_earth_image_05_hd_pictures_167039.jpg"  alt="pic"/>

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">TUTORIAL :</span>
                    <span className="postCat">Topic Name</span>
                </div>
                <Link className="link" to="/single">
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur</span></Link>
                <hr />
                <span className="postDate">5 min ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptates cupiditate amet distinctio quos vero quisquam laborum nisi est natus neque.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptates cupiditate amet distinctio quos vero quisquam laborum nisi est natus neque.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptates cupiditate amet distinctio quos vero quisquam laborum nisi est natus neque.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptates cupiditate amet distinctio quos vero quisquam laborum nisi est natus neque.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptates cupiditate amet distinctio quos vero quisquam laborum nisi est natus neque.
            </p>
        </div>
    )
}
