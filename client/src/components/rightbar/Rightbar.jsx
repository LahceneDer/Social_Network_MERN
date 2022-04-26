import "./rightbar.css"
import { Cake } from "@material-ui/icons"
import { Online } from "../online/Online"
import { Users } from "../../dummyData"

export const Rightbar = ({user}) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer" >
            <Cake className="birthdayIcon" />
            <span className="birthdayText" >
              <b>Fatima</b> and <b>3 other friends</b> have a brthday today
            </span>
          </div>
          <img src={PUBLIC_FOLDER+"ad.jpeg"} alt="ads" className="rightabAd" />
          <h4 className="rightbarTitle" >Online Friends</h4>
          <ul className="rightbarFriendList" >
            {Users.map(user => <Online key={user.id} user={user} />)}
          </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
       <h4 className="rightbarTitle"> User information</h4>
       <div className="rightbarInfo" >
          <div className="rightbarInfoItem" >
            <span className="rightbarInfoKey" >City:</span>
            <span className="rightbarInfoValue"> {user?.city} </span>
          </div>
          <div className="rightbarInfoItem" >
            <span className="rightbarInfoKey" >From:</span>
            <span className="rightbarInfoValue"> {user?.city} </span>
          </div>
          <div className="rightbarInfoItem" >
            <span className="rightbarInfoKey" >Relationship:</span>
            <span className="rightbarInfoValue"> {user?.relationship} </span>
          </div>
       </div>
       <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={PUBLIC_FOLDER+"/person/1.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PUBLIC_FOLDER+"person/2.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PUBLIC_FOLDER+"person/3.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PUBLIC_FOLDER+"person/4.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PUBLIC_FOLDER+"person/5.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PUBLIC_FOLDER+"person/6.jpeg"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar" >
      <div className="rightbarWrapper" >
         {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
