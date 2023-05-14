import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Liked.css";
function Liked() {
  return (
    <div className="top-like">
      <div className="liked-top">
        <div className="like-heart">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </div>
        <ul>
          <li>PLAYLIST</li>
          <li id="heart">Liked Songs</li>
          <li>Gokula Krishnan Elangovan</li>
        </ul>
      </div>
      <div className="down-liked"></div>
    </div>
  );
}
export default Liked;
