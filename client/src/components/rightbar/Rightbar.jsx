import "./rightbar.css"
import { Cake } from "@material-ui/icons"
import { Online } from "../online/Online"
import { Users } from "../../dummyData"

export const Rightbar = () => {
  return (
    <div className="rightbar" >
      <div className="rightbarWrapper" >
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
      </div>
    </div>
  )
}
