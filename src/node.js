function Node({ img }) {
  return (
    <div
      className="song-div"
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
          //   marinLeft: "30%",
          marginLeft: "5%",
          width: "5.5cm",
          height: "5.5cm",
          borderRadius: "20px",
        }}
      />
      <p style={{ marginLeft: "5%" }}>Something have to written here</p>
    </div>
  );
}
export default Node;
