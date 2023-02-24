import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Liked() {
  return (
    <div
      className="top-like"
      style={{
        display: "flex",
        width: "100%",
        height: "40cm",
        backgroundImage:
          "linear-gradient(to top, #121212, #16141d, #181527, #1c1631, #1f173b);",
      }}
    >
      <div className="liked-top">
        <div className="like-heart">
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              color: "white",
              width: "3cm",
              height: "3cm",
              alignSelf: "center",
              marginLeft: "25%",
            }}
          />
        </div>
        <ul style={{ color: "white", marginTop: "7%" }}>
          <li>PLAYLIST</li>
          <li id="heart" style={{ fontSize: "65px", fontWeight: "800" }}>
            Liked Songs
          </li>
          <li>Gokula Krishnan Elangovan</li>
        </ul>
      </div>
    </div>
  );
}
export default Liked;
