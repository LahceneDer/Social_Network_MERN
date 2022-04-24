import { TopBar } from "../../components/topbar/TopBar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Feed } from "../../components/feed/Feed"
import { Rightbar } from "../../components/rightbar/Rightbar"
import "./home.css"

export const Home = () => {
  return (
    <>
        <TopBar />
        <div className="homeContainer" >
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
    </>
  )
}
