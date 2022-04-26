import "./closefriend.css"

export const CloseFriend = ({friend}) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <li className="sidebarFriend" >
    <img className="sidebarFriendImg" src={PUBLIC_FOLDER+friend.profilePicture} alt="" />
    <span className="sidebarFriendName" > {friend.username} </span>
  </li>
  )
}
