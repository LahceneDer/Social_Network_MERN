import "./online.css"

export const Online = ({user}) => {
  return (
    <li className="rightbarFriend" >
    <div className="rightbarProfileImgContainer" >
      <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
      <span className="rightbarOnline" ></span>
    </div>
    <span className="rightbarFriendUsername" > {user.username} </span>
  </li>
  )
}
