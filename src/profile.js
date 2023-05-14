import "./profile.css";
import { useState, useEffect } from "react";
import Account from "./account";
import Password from "./Password";
import Privacy from "./Privacy";
import Edit from "./Edit";
import Notification from "./notification";
import Recover from "./recover";
import { AiFillHome, AiFillBell, AiOutlineRedo } from "react-icons/ai";
import { BiPencil, BiLockAlt } from "react-icons/bi";
import { BsClock, BsPuzzleFill, BsCash } from "react-icons/bs";
import Manage from "./manage";
import Recipt from "./recipts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import Options from "./options";

function Profile() {
  const [select, changeSelect] = useState("User");
  function displaySome() {
    document.querySelector(".options").style.display = "fixed";
  }
  const token = localStorage.getItem("user");
  const [data, setData] = useState({});
  function EditProfile() {
    axios
      .get("http://localhost:4000/protected", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token).Token}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }
  useEffect(EditProfile, []);
  //  console.log("data is ", data);
  return (
    <div className="outer-profile" style={{ backgroundColor: "rgb(27,38,58)" }}>
      <div className="nav-div">
        <Options />

        <div className="icon-div">
          <FontAwesomeIcon icon={faSpotify} className="spotify-icon" />
          <h1 style={{ marginLeft: "10px", fontWeight: "500" }}>Spotify</h1>
        </div>
        <div
          className="tops-div"
          style={{ display: "flex", alignSelf: "flex-end" }}
        >
          <ul id="tops">
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>|</li>
            <li>
              <span
                style={{ marginLeft: "7%", marginTop: "7%", display: "flex" }}
                onClick={displaySome}
              >
                <AccountCircleIcon />
                Profile
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row1">
        <div className="side-div1">
          <ul>
            <li style={{ height: "3cm" }}></li>
            <li id="stop" onClick={() => changeSelect("User")}>
              <AiFillHome id="icon" />
              <span>Account Overview</span>
            </li>
            <br />
            <li id="stop" onClick={() => changeSelect("Edit")}>
              <BiPencil id="icon" />
              <span>Edit Profile</span>
            </li>
            <br />
            <li id="stop" onClick={() => changeSelect("Password")}>
              <BiLockAlt id="icon" />
              <span>Change password</span>
            </li>
            <br />
            <li id="stop" onClick={() => changeSelect("Notification")}>
              <AiFillBell id="icon" />
              <span>Notifictaion setting</span>
            </li>
            <br />
            <li id="stop" onClick={() => changeSelect("Privacy")}>
              <BiLockAlt id="icon" />
              <span>Privacy Setting</span>
            </li>
            <br />
            <li id="stop" onClick={() => changeSelect("recovery")}>
              <AiOutlineRedo id="icon" />
              <span>Recover playlists</span>
            </li>
            <br />
            <li id="stop" onClick={() => changeSelect("recipt")}>
              <BsClock id="icon" />
              <span>Recipts</span>
            </li>
            <br />
            <li id="stop" onClick={() => changeSelect("manage")}>
              <BsPuzzleFill id="icon" />
              <span>Apps</span>
            </li>
            <br />
            <li id="stop" style={{ marginBottom: "70%" }}>
              <BsCash id="icon" />
              <span>Redeem</span>
            </li>
          </ul>
        </div>
        <br />
        <br />
        {select === "User" ? (
          <Account onEdit={() => changeSelect("Edit")} />
        ) : select === "Password" ? (
          <Password onCancel={() => changeSelect("User")} />
        ) : select === "Edit" ? (
          <Edit onCancel={() => changeSelect("User")} data={data} />
        ) : select === "Privacy" ? (
          <Privacy />
        ) : select === "Notification" ? (
          <Notification onCancel={() => changeSelect("User")} />
        ) : select === "recovery" ? (
          <Recover />
        ) : select === "manage" ? (
          <Manage />
        ) : select === "recipt" ? (
          <Recipt />
        ) : (
          "No"
        )}
      </div>
      <div className="fotter">
        <div className="inner-footer">
          <ul style={{ color: "white" }}>
            <li>COMPANY</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For record</li>
          </ul>
        </div>
        <div className="fotter-1">
          <ul style={{ color: "white" }}>
            <li>COMMUNITIES</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For record</li>
          </ul>
        </div>
        <div className="links-fotter">
          <ul style={{ color: "white" }}>
            <li>USEFUL LINKS</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For record</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Profile;
