import "./home.css";
import Original from "./original";
import Play from "./play";
import { AiFillHome, AiFillPlusSquare, AiFillHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import Playlist from "./playlist";
import { useState } from "react";
import SearchBar from "./searchbar";
import Search from "./search";
import Liked from "./Liked";
import Songs from "./Songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeepSearch from "./deepSearch";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import NoLogin from "./noLogin";
import User from "./user";
function Spotify() {
  const [name, setName] = useState([]);
  const [select, setSelect] = useState("User");
  const user = localStorage.getItem("user");
  console.log("User is --------------------", user);
  function addPlaylist() {
    setName([...name, "My Playlist #" + (name.length + 1)]);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: " rgb(29, 29, 29)",
          width: "100%",
        }}
      >
        <div className="side-div" style={{ marginTop: "0" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FontAwesomeIcon
              icon={faSpotify}
              style={{
                color: "white",
                width: "45px",
                height: "45px",
                marginTop: "20px",
                marginLeft: "40px",
              }}
            />
            <h1 style={{ marginLeft: "10px", fontWeight: "500" }}>Spotify</h1>
          </div>

          <ul>
            <li onClick={() => setSelect("User")}>
              <AiFillHome /> Home
            </li>
            <li onClick={() => setSelect("Search")}>
              <BsSearch /> Search
            </li>
            <li>
              <BiLibrary /> Library
            </li>
            <br />

            <li onClick={addPlaylist}>
              <AiFillPlusSquare /> Create Playlist
            </li>
            <li onClick={() => setSelect("Liked")}>
              <AiFillHeart style={{ color: "red" }} /> Liked Songs
            </li>
          </ul>
          <hr style={{ borderColor: "grey" }} />
          <ul>
            {name.map((element) => (
              <li
                style={{ color: "rgb(179,179,179)", fontSize: "15px" }}
                onClick={() => setSelect(element)}
              >
                {element}
              </li>
            ))}
          </ul>
        </div>

        <div className="row">
          <div className="nav-division">
            {select === "Search" && <SearchBar />}
            {user !== null && user !== "undefined" ? <User /> : <NoLogin />}
          </div>
          {(select === "User" && (
            <Original logg={() => setSelect("deepSearch")} />
          )) ||
            (select === "deepSearch" && <DeepSearch />) ||
            (select.includes("Playlist") && <Playlist number={select} />) ||
            (select === "Search" && <Search />) ||
            (select === "Liked" && <Liked />)}
        </div>
        <Play />
        {user != null ? (
          <div
            className="hidden-name"
            style={{
              marginTop: "2.2cm",
              marginLeft: "80%",
              position: "fixed",
              backgroundColor: "rgb(24, 24, 24)",
              marginBottom: "2%",
            }}
          >
            <h5 style={{ color: "white" }}>{user}</h5>
          </div>
        ) : (
          "No"
        )}
      </div>
    </>
  );
}
export default Spotify;
//rgb(24, 24, 24)
