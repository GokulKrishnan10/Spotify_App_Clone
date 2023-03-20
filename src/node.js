function Node({ img, disp }) {
  return (
    <div
      className="song-div"
      onClick={disp}
      style={{
        backgroundColor: "rgb(24,24,24)",
        width: "6cm",
        height: "8cm",
        color: "white",
        margin: "10px",
        marginLeft: "2%",
        borderRadius: "20px",
      }}
    >
      <img
        src={img}
        alt="No"
        key={img}
        style={{
          marginTop: "5%",
          marginLeft: "5%",
          width: "5.5cm",
          height: "4.5cm",
          borderRadius: "20px",
          boxShadow: "1px 1px 1px 1px white",
        }}
      />
      <ul style={{ marginTop: "0", marginLeft: "0", padding: "0" }}>
        <li style={{ marginLeft: "1%", fontSize: "20px", fontWeight: "700" }}>
          Nitham Nitham
        </li>
        <li style={{ marginLeft: "1%", fontSize: "15px" }}>Vani Jayaram</li>
      </ul>
    </div>
  );
}
export default Node;
