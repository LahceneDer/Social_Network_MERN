import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Feed } from "../../components/feed/Feed"
import { Rightbar } from "../../components/rightbar/Rightbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { TopBar } from "../../components/topbar/TopBar"
import { getUser } from "../../functions/userFunctions"
import "./profile.css"

export const Profile = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const username = useParams().username

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:5000/api/users?username=${username}`)
            setUser(res.data)
        }
        fetchUser()
    },[])

  return (
    <>
        <TopBar />
        <div className="profileContainer" >
            <Sidebar />
            <div className="profileRight" >
                <div className="profileRightTop" >
                    <div className="profileCover" >
                       <img src={user.coverPicture || PUBLIC_FOLDER+"nocover.jpeg" } alt="" className="profileCoverImg" />
                       <img src={user.profilePicture || PUBLIC_FOLDER+"avatar.png" } alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo" >
                       <h4 className="profileInfoName" >{user.username}</h4>
                       <span className="profileInfoDesc" > {user.desc} </span>
                    </div>
                </div>
                <div className="profileRightBottom" >
                    <Feed username={username} />
                    <Rightbar user={user} />
                </div>
            </div>
        </div>
    </>
  )
}
