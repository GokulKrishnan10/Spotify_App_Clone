import { BsMusicNoteBeamed } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import "./playlist.css";
import Name from "./name";
import { useSelector, useDispatch } from "react-redux";
import Dark from "./dark";
import axios from "axios";
function Playlist({ number }) {
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);
  function appearOn() {
    console.log("Clicked it");
    document.querySelector(".outer-edit").style.display = "block";
    document.querySelector(".all-dark").style.display = "block";
  }
  async function getResults(event) {
    console.log(event.target.value);
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        { grant_type: "client_credentials" },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic MjVlMTI1MGUyNTMzNGQzNmFlYmZmODA5NDJkODI3MzU6OGUxN2RiNDg4ZDg4NGYxNzhhYTFiYTI4YTRiZTA3NmU=`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.access_token);
        axios
          .get("https://api.spotify.com/v1/search/", {
            headers: {
              Authorization: `Bearer ${response.data.access_token}`,
            },
            params: {
              q: event.target.value,
              type: "track",
            },
          })
          .then((response) => {
            console.log(response.data.tracks.items);
            setSearch(response.data.tracks.items);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }
  return (
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
        {edit === "select"}
        <Name />
      </div>
      <div className="down-playlist">
        <br />
        <br />
        <hr style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2cm" }} />
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
            onInput={getResults}
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
        <div className="lists">
          {search.map((element) => (
            <li className="song-display">{element.name}</li>
          ))}
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}
export default Playlist;
