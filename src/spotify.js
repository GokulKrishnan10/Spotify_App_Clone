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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeepSearch from "./deepSearch";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import NoLogin from "./noLogin";
import Songs from "./Songs";
import SignupFree from "./signupfree";
import User from "./user";
import Hang from "./hang";
import Bar from "./Bar";
function Spotify() {
  const [name, setName] = useState([]);
  const [select, setSelect] = useState("User");
  const user = localStorage.getItem("user");
  // document.getElementById(".side-div").style.height = divHeight;
  document.addEventListener("click", (event) => {
    if (
      event.srcElement.id !== "play1" &&
      event.srcElement.id !== "loved" &&
      event.srcElement.id !== "hang" &&
      event.srcElement.id !== "outer-edit" &&
      event.srcElement.id !== "second" &&
      event.srcElement.id !== "inner-edit"
    ) {
      console.log("Hanging is", event.target);
      const hang = document.querySelector(".hang");
      // console.log("Outer Edit is ", document.querySelector(".outer-edit"));
      const outer = document.querySelector(".outer-edit");
      if (outer !== null) {
        document.querySelector(".outer-edit").style.display = "none";
      }

      if (hang !== null) document.querySelector(".hang").style.display = "none";
    }
  });
  function addPlaylist() {
    if (user === null || user === undefined) return;
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

            <li
              id="play1"
              onClick={
                user === null || user === undefined
                  ? () => {
                      document.querySelector(".hang").style.display = "block";
                    }
                  : () => {
                      addPlaylist();
                    }
              }
            >
              <AiFillPlusSquare /> Create Playlist
            </li>
            <li
              id="loved"
              onClick={
                user === null || user === undefined
                  ? () => {
                      document.querySelector(".hang").style.display = "block";
                    }
                  : () => {
                      setSelect("Liked");
                    }
              }
            >
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
            {(select === "Search" || select === "Artists") && (
              <SearchBar dispArt={() => setSelect("Artists")} />
            )}
            {user !== null && typeof user !== "undefined" ? (
              <User />
            ) : (
              <NoLogin />
            )}
          </div>
          <Hang alert="Create Playlist" />

          {(select === "User" && (
            <Original
              logg={() => setSelect("deepSearch")}
              display={() => setSelect("Songs")}
            />
          )) ||
            (select === "deepSearch" && <DeepSearch />) ||
            (select.includes("Playlist") && <Playlist number={select} />) ||
            (select === "Search" && <Search />) ||
            (select === "Liked" && <Liked />) ||
            (select === "Songs" && <Songs />) ||
            (select === "Artists" && <Bar />)}
        </div>
        {user !== null && typeof user !== "undefined" ? (
          <Play />
        ) : (
          <SignupFree />
        )}

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
            onClick={{}}
          >
            <h5 style={{ color: "white" }}>{user}</h5>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Spotify;
