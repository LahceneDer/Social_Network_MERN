import "./online.css"

export const Online = ({user}) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <li className="rightbarFriend" >
    <div className="rightbarProfileImgContainer" >
      <img src={PUBLIC_FOLDER+user.profilePicture} alt="" className="rightbarProfileImg" />
      <span className="rightbarOnline" ></span>
    </div>
    <span className="rightbarFriendUsername" > {user.username} </span>
  </li>
  )
}
