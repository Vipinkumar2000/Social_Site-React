import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddReactionIcon from "@mui/icons-material/AddReaction";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="src/assets/person/1.jpeg"
            alt=""
          />
          <input
            type="text"
            className="shareInput"
            placeholder="Whats is in ur mind Sara ?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="red" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">TAG</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <AddReactionIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
            <button className="shareButtons">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
