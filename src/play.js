import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./play.css";
import { useSelector } from "react-redux";

function Play() {
  const url = useSelector((state) => state.url);
  return (
    <div className="play">
      <br />
      <br />
      <embed
        src={url}
        autostart="false"
        width="300"
        height="90"
        className="embed-container"
      ></embed>
    </div>
  );
}

export default Play;
