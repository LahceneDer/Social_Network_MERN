import "./topbar.css";
import {
  Search,
  MeetingRoom,
  Person,
  Chat,
  Notifications,
  AccountBox,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const TopBar = () => {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">
          <Link to="/" className="Link" style={{ textDecoration: "none" }}>
            <span>
              {" "}
              <MeetingRoom />{" "}
            </span>
            <span> LR Social </span>
          </Link>
        </div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Home</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <Link to={`profile/${user.username}`} >
        <img
          alt="profile"
          src={
            user.profilePicture
              ? PUBLIC_FOLDER + user.profilePicture
              : PUBLIC_FOLDER + "avatar.png"
          }
          className="topbarProfilePic"
        />
        </Link>
      </div>
    </div>
  );
};
