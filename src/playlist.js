import { BsMusicNoteBeamed } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Name from "./name";
function Playlist({ number }) {
  function appearOn() {
    console.log("Clicked it");
    document.querySelector(".outer-edit").style.display = "block";
  }
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
              className="playlist-name"
              style={{
                display: "flex",
                color: "white",
                fontWeight: "800",
              }}
              onClick={appearOn}
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
          <br />
          <Name />
        </div>
        <div className="down-playlist">
          <br />
          <br />
          <hr
            style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2cm" }}
          />
          <h3 style={{ color: "white", marginLeft: "5%", fontWeight: "900" }}>
            Let's find something for your playlist
          </h3>
          <br />
          <div
            style={{
              width: "9cm",
              height: "1.2cm",
              backgroundColor: "rgb(44,44,44)",
              display: "flex",
              marginLeft: "5%",
              borderRadius: "20px",
            }}
          >
            <BiSearch
              style={{
                marginLeft: "3%",
                color: "white",
                marginTop: "3%",
                width: "25px",
                height: "25px",
              }}
            />
            <input
              className="input-search"
              type="text"
              placeholder="Search for songs or episodes"
              style={{
                fontSize: "16px",
                width: "7cm",
                marginTop: "3%",
                marginLeft: "7%",
                height: "0.7cm",
                backgroundColor: "rgb(44,44,44)",
                border: "none",
                color: "white",
              }}
            />
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default Playlist;
