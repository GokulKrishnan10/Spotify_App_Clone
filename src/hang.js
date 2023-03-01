function Hang({ alert }) {
  return (
    <div className="hang">
      <p style={{ marginLeft: "2.6cm", color: "white", marginTop: "0.7cm" }}>
        {alert}
      </p>
      <div style={{ display: "flex", marginTop: "16%", marginLeft: "8%" }}>
        <button style={{ fontSize: "17px" }}>Not now</button>
        <button style={{ marginLeft: "35%", fontSize: "17px" }}>Log in</button>
      </div>
    </div>
  );
}
export default Hang;
