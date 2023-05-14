import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Songs.css";
function Songs() {
  return (
    <div className="top-songs">
      <div className="songs-top">
        <div className="songs-heart">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </div>
        <ul style={{ color: "white", marginTop: "7%" }}>
          <li>PLAYLIST</li>
          <li
            id="title-song"
            style={{ fontSize: "65px", fontWeight: "bolder" }}
          >
            MULLUM MALARUM
          </li>
          <li>Gokula Krishnan Elangovan</li>
        </ul>
      </div>
    </div>
  );
}
export default Songs;
