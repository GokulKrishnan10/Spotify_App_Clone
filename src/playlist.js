import { BsMusicNoteBeamed } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import "./playlist.css";
import Name from "./name";
import { useSelector, useDispatch } from "react-redux";
import Dark from "./dark";
import axios from "axios";
import PlayResult from "./playlist_result";

function Playlist({ number }) {
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);
  function appearOn() {
    document.querySelector(".outer-edit").style.display = "block";
    document.querySelector(".all-dark").style.display = "block";
  }
  function getResults(event) {
    console.log("Secret is--------", process.env.REACT_APP_REACT);
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        { grant_type: "client_credentials" },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${process.env.REACT_APP_REACT}`,
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
            console.log(response.data.tracks.items[2].preview_url);
            setSearch(response.data.tracks.items);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="outerplay" id={number}>
      <div className="top-playlist">
        <div className="inner-playlist">
          <BsMusicNoteBeamed className="music-note" />
        </div>

        <ul style={{ marginLeft: "0", marginTop: "13%" }}>
          <li style={{ color: "white" }}>PLAYLIST</li>
          <li
            id={`${number}-heading`}
            className="playlist-name"
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
        <Name name={number} />
      </div>
      <div className="down-playlist">
        <br />
        <br />
        <hr style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2cm" }} />
        <h3 style={{ color: "white", marginLeft: "5%", fontWeight: "900" }}>
          Let's find something for your playlist
        </h3>
        <br />
        <div className="search-div">
          <BiSearch className="search-icon" />
          <input
            className="input-search"
            type="text"
            placeholder="Search for songs or episodes"
            onInput={getResults}
          />
        </div>
        <div className="lists">
          {search.map((element) => (
            <PlayResult name={element.name} url={element.preview_url} />
          ))}
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}
export default Playlist;
