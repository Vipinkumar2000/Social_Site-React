import "./profile.css";
import { Topbar, Sidebar, Feed, Rightbar } from "../../components/index.js";
const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="src/assets/post/1.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="src/assets/person/2.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kacoglu</h4>
              <span className="profileInfoDesc">Hello my firends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
