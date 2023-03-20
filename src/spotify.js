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
import Language from "./Lang";
import { useSelector, useDispatch } from "react-redux";
import { setselect } from "./actions";
import Dark from "./dark";
function Spotify() {
  console.log(localStorage.getItem("user"));
  const select = useSelector((state) => state.select);
  const dispatch = useDispatch();
  setselect({});
  const [name, setName] = useState([]);
  const user = localStorage.getItem("user");
  document.addEventListener("click", (event) => {
    if (
      event.srcElement.id !== "play1" &&
      event.srcElement.id !== "loved" &&
      event.srcElement.id !== "hang" &&
      event.srcElement.id !== "outer-edit" &&
      event.srcElement.id !== "second" &&
      event.srcElement.id !== "inner-edit"
    ) {
      const hang = document.querySelector(".hang");

      const outer = document.querySelector(".outer-edit");
      if (outer !== null) {
        document.querySelector(".outer-edit").style.display = "none";
        document.querySelector(".all-dark").style.display = "none";
      }

      if (hang !== null) {
        document.querySelector(".all-dark").style.display = "none";
        document.querySelector(".hang").style.display = "none";
      }
    }
  });
  function addPlaylist() {
    if (user === null || user === undefined) return;
    setName([...name, "My Playlist #" + (name.length + 1)]);
  }
  return (
    <>
      <div
        className="dark"
        style={{
          display: "flex",
          backgroundColor: " rgb(29, 29, 29)",
          width: "100%",
          height: "100%",
        }}
      >
        <Dark />
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
            <li onClick={() => dispatch(setselect("User"))}>
              <AiFillHome /> Home
            </li>
            <li onClick={() => dispatch(setselect("Search"))}>
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
                      dispatch(setselect("Liked"));
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
                onClick={() => dispatch(setselect(element))}
              >
                {element}
              </li>
            ))}
          </ul>
        </div>

        <div className="row">
          <div className="nav-division">
            {(select === "Search" || select === "Artists") && <SearchBar />}
            {user !== null && typeof user !== "undefined" ? (
              <User />
            ) : (
              <NoLogin />
            )}
          </div>
          <Hang alert="Create Playlist" />

          {(select === "User" && (
            <Original
              logg={() => dispatch(setselect("deepSearch"))}
              display={() => dispatch(setselect("Songs"))}
            />
          )) ||
            (select === "deepSearch" && <DeepSearch />) ||
            (select.includes("Playlist") && <Playlist number={select} />) ||
            (select === "Search" && <Search />) ||
            (select === "Liked" && <Liked />) ||
            (select === "Songs" && <Songs />) ||
            (select === "Artists" && <Bar />) ||
            (select === "Language" && <Language />)}
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
