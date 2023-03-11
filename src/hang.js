import { useNavigate } from "react-router";
function Hang({ alert }) {
  const history = useNavigate();
  return (
    <div className="hang" id="hang">
      <p
        style={{
          marginLeft: "5%",
          color: "white",
          marginTop: "0.3cm",
          fontWeight: "900",
        }}
      >
        {alert}
      </p>
      <p
        style={{
          marginLeft: "5%",
          color: "white",
          fontSize: "13px",
          fontWeight: "900",
        }}
      >
        Login to create and share playlists
      </p>
      <div style={{ display: "flex", marginLeft: "8%" }}>
        <button style={{ fontSize: "17px" }}>Not now</button>
        <button
          style={{ marginLeft: "35%", fontSize: "15px", fontWeight: "700" }}
          onClick={() => history("/login")}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
export default Hang;
