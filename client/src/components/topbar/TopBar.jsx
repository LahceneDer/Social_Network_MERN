import "./topbar.css"
import {Search, MeetingRoom, Person, Chat, Notifications, AccountBox} from '@material-ui/icons';

export const TopBar = () => {
  return (
    <div className="topbarContainer" >
        <div className="topbarLeft" >
            <div className="logo" > 
                <span> <MeetingRoom />  </span>
                <span>  LR Social </span>
            </div>
        </div>
        <div className="topbarCenter" >
           <div className="searchBar"> 
                <Search className="searchIcon" />
                <input placeholder="search for friend, post or video" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight" >
            <div className="topBarLinks" >
                <span className="topBarLink" >
                    Home
                </span>
                <span className="topBarLink" >
                    Timeline
                </span>
            </div>
            <div className="topBarIcons" >
                <div className="topBarIconItem" >
                    <Person />
                    <span className="topBarIconBadge" >1</span>
                </div>
                <div className="topBarIconItem" >
                    <Chat />
                    <span className="topBarIconBadge" >1</span>
                </div>
                <div className="topBarIconItem" >
                    <Notifications />
                    <span className="topBarIconBadge" >1</span>
                </div>
            </div>
            <div className="topbarProfilePic" >
            <AccountBox />
            </div>
        </div>
    </div>
  )
}
