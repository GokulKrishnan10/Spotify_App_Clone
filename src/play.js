import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Play() {
  return (
    <div className="play">
      <div
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
      </div>
      <br />
      <br />
      <audio controls>
        <source
          src="https://p.scdn.co/mp3-preview/3b20022853f0ba4bf482090852276fef5fb1fda0?cid=25e1250e25334d36aebff80942d82735"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <progress
        style={{
          width: "15cm",
          height: "6%",
          color: "white",
        }}
        value="32"
        max="100"
      />
      {/* <input id="sound" type="range" /> */}
    </div>
  );
}
export default Play;
