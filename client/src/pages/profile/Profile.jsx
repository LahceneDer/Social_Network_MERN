import { Feed } from "../../components/feed/Feed"
import { Rightbar } from "../../components/rightbar/Rightbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { TopBar } from "../../components/topbar/TopBar"
import "./profile.css"

export const Profile = () => {
  return (
    <>
        <TopBar />
        <div className="profileContainer" >
            <Sidebar />
            <div className="profileRight" >
                <div className="profileRightTop" >
                    <div className="profileCover" >
                       <img src="/assets/post/12.jpg" alt="" className="profileCoverImg" />
                       <img src="/assets/5.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo" >
                       <h4 className="profileInfoName" >Dergham Lahcene</h4>
                       <span className="profileInfoDesc" >Hello my friends !</span>
                    </div>
                </div>
                <div className="profileRightBottom" >
                    <Feed />
                    <Rightbar profile={true} />
                </div>
            </div>
        </div>
    </>
  )
}
