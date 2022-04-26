import { Post } from "../post/Post"
import { Share } from "../share/Share"
import "./feed.css"
import { Posts } from "../../dummyData"
import { useEffect, useState } from "react"
import { timelineFunction } from "../../functions/postFunctions"

export const Feed = ({username}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      timelineFunction("62641e008467228ab0eddfc8",setPosts,username)
  },[username])
  return (
    <div className="feed" >
      <div className="feedWrapper" >
        <Share />
        {posts.map(post => (
            <Post key={post._id} post={post} />
        ))} 
      </div>
    </div>
  )
}
