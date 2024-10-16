import "./topbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Vipin Social</span>
      </div>
      <div className="topbarCenter">
        <div className="serachbar">
          <SearchOutlinedIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for Friends,Post or Video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconProfile">
            <Person4OutlinedIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconChat">
            <ChatOutlinedIcon />
            <span className="topbarIconBadge">4</span>
          </div>
          <div className="topbarIconNoti">
            <CircleNotificationsOutlinedIcon />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <img src="/src/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
