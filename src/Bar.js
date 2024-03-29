import "./bar.css";
function Bar() {
  return (
    <div className="searchbar">
      <div className="wrap">
        <div className="song-result">
          <h2 style={{ color: "white" }}>Top Result</h2>
          <div className="artist">
            <img
              src="https://i.scdn.co/image/ab6761610000e5eb65a752ef61def4fc6f67fc5a"
              alt="no"
              className="image-search"
            />
            <div style={{ marginLeft: "3%" }}>
              <h2 style={{ color: "white", fontWeight: "978" }}>Hariharan</h2>
              <h4 style={{ color: "white" }}>Artist</h4>
            </div>
          </div>
        </div>
        <div className="song-list">
          <h2 style={{ color: "white" }}>Songs</h2>
          <div className="songs">
            <ul>
              <li>Sri Hanuman Chalisa</li>
              <li>Vishnu sahasranamam</li>
              <li>Aigiri Nandini</li>
              <li>Venkatesha Suprabatham</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: " rgb(18, 18, 18)" }}>
        <h2 style={{ marginLeft: "5%", color: "white" }}>Artists</h2>
        <div className="artists"></div>
      </div>
    </div>
  );
}
export default Bar;
