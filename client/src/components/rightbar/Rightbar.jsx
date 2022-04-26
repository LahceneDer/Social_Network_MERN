import "./rightbar.css"
import { Cake } from "@material-ui/icons"
import { Online } from "../online/Online"
import { Users } from "../../dummyData"

export const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer" >
            <Cake className="birthdayIcon" />
            <span className="birthdayText" >
              <b>Fatima</b> and <b>3 other friends</b> have a brthday today
            </span>
          </div>
          <img src="assets/ad.jpeg" alt="ads" className="rightabAd" />
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
            <span className="rightbarInfoValue">El hmadna</span>
          </div>
          <div className="rightbarInfoItem" >
            <span className="rightbarInfoKey" >From:</span>
            <span className="rightbarInfoValue">Jdiouia</span>
          </div>
          <div className="rightbarInfoItem" >
            <span className="rightbarInfoKey" >Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
       </div>
       <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
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
         {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
