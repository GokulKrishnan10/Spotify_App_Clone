import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Songs() {
  return (
    <div
      className="top-songs"
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(to top, #121212, #16141d, #181527, #1c1631, #1f173b);",
      }}
    >
      <div className="songs-top">
        <div className="songs-heart">
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              color: "red",
              width: "3cm",
              height: "3cm",
              alignSelf: "center",
              marginLeft: "25%",
            }}
          />
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
