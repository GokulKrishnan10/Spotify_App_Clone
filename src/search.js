function Search() {
  let array = [];
  const cssColors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "magenta",
    "violet",
    "indigo",
    "turquoise",
    "teal",
    "olive",
    "maroon",
    "navy",
    "skyblue",
    "coral",
    "crimson",
    "fuchsia",
    "gold",
    "lavender",
    "plum",
    "salmon",
    "sienna",
    "tan",
    "tomato",
    "wheat",
    "peru",
    "steelblue",
    "mediumseagreen",
  ];

  for (let i = 0; i < 30; i++) {
    array.push(
      <>
        <div
          className="lang"
          style={{
            display: "flex",
            backgroundColor: cssColors[i],
            width: "6cm",
            height: "6cm",
            padding: "10x",
            margin: "1%",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h1>Tamil</h1>
        </div>
      </>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "rgb(18,18,18)",
        // flex: "80%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ color: "white", marginLeft: "5%" }}>Browse all</h2>
      <div
        style={{
          display: "flex",
          width: "90%",
          backgroundColor: "rgb(18,18,18)",
          marginTop: "20px",
          flexWrap: "wrap",
          overFlow: "hidden",
          marginLeft: "5%",
        }}
      >
        {array}
      </div>
    </div>
  );
}
export default Search;
