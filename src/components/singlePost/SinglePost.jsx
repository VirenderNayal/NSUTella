import "./singlePost.css";
import { Create } from "@material-ui/icons";

export default function SinglePost({ title, author, content }) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                < img className="singlePostImg"
                    src="https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg"
                />
                <h1 className="singlePostTitle">
                    {title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-save"></i>
                        <i className="singlePostIcon far fa-heart"></i>
                        <i className="singlePostIcon fas fa-share-alt"></i>
                        <i className="singlePostIcon fas fa-bookmark"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> <Create /> Author: <b>{author}</b></span>
                    <span className="singlePostDate"> 1 min ago</span>
                </div>
                <p className="singlePostDesc">{content}</p>
            </div>
        </div>
    )
}
