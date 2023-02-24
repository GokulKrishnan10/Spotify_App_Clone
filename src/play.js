function Play() {
  return (
    <div className="play">
      <progress
        style={{
          marginTop: "3%",
          marginLeft: "25%",
          width: "60%",
          height: "6%",
          color: "white",
        }}
        value="32"
        max="100"
      >
        32%
      </progress>
      <input id="sound" type="range" />
    </div>
  );
}
export default Play;
