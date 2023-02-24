import { BsMusicNoteBeamed } from "react-icons/bs";
function Playlist({ number }) {
  return (
    <>
      <div className="outerplay">
        <div className="top-playlist">
          <div className="inner-playlist">
            <BsMusicNoteBeamed
              style={{
                marginTop: "30%",
                marginLeft: "25%",
                color: "rgb(127,127,127)",
                width: "90px",
                height: "90px",
              }}
            />
          </div>
          <ul style={{ marginLeft: "0", marginTop: "13%" }}>
            <li style={{ color: "white" }}>PLAYLIST</li>
            <li
              id="second"
              style={{
                display: "flex",
                color: "white",
                fontWeight: "800",
              }}
            >
              {number}
            </li>
            <li
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Gokula Krishnan E
            </li>
          </ul>
          <br />
        </div>
        <div className="down-playlist">
          <h1 style={{ color: "white", marginTop: "2cm" }}>
            Find Your Playlist
          </h1>
          <br />
          <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default Playlist;
