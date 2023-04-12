import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./play.css";
function Play() {
  return (
    <div className="play">
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "50%",
          flexDirection: "column",
        }}
      >
        <FontAwesomeIcon
          icon={faCirclePlay}
          style={{ color: "white", width: "0.8cm", height: "0.8cm" }}
        />
      </div> */}
      <br />
      <br />
      <audio
        controls
        style={{
          marginLeft: "30%",
          width: "20cm",
        }}
      >
        <source
          src="https://p.scdn.co/mp3-preview/3b20022853f0ba4bf482090852276fef5fb1fda0?cid=25e1250e25334d36aebff80942d82735"
          type="audio/mpeg"
        />
        <h2>Your browser does not support the audio element.</h2>
      </audio>
    </div>
  );
}
export default Play;
