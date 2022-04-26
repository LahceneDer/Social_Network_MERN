import "./post.css"
import {MoreVert, Favorite, ThumbUpAlt} from "@material-ui/icons"
import { Users } from "../../dummyData"
import { useEffect, useState } from "react"
import { getUser } from "../../functions/userFunctions"
import {format} from 'timeago.js';
import { Link } from "react-router-dom"


export const Post = ({post}) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        getUser(post.userId,setUser)
    },[post.userId])

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="postContainer" >
        <div className="postWrapper" >
            <div className="postTop" >
                <div className="postTopLeft" >
                    <Link to={`profile/${user.username}`} >
                    <img className="postProfileImg" src={user.profilePicture || PUBLIC_FOLDER+"avatar.png"} alt="" />
                    </Link>
                    <span className="postUsername" > {user.username}</span>
                    <span className="postDate" > {format(post.createdAt)} </span>
                </div>
                <div className="postTopRight" >
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter" >
                <span className="postText" > {post?.desc}</span>
                <img src={PUBLIC_FOLDER+post?.img} alt="" className="postImg" />
            </div>
            <div className="postBottom" >
                <div className="postBottomLeft" >
                    <ThumbUpAlt className="likeIcon" onClick={likeHandler} />
                    <Favorite  className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter" > {post.likes.length} people like it</span>
                </div>
                <div className="postBottomRight" >
                    <span className="postCommentText" > {post.comment} comments </span>
                </div>
            </div>
        </div>
    </div>
  )
}
