import "./profile.css";
import { useState } from "react";
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

function Profile() {
  const [select, changeSelect] = useState("User");
  function displaySome() {
    const disp = document.createElement("div");
    console.log("HEllo there it is pressed");
    disp.style.height = "2.5cm";
    disp.style.width = "5cm";
    disp.style.backgroundColor = "white";
    disp.style.borderRadius = "5px";
    disp.style.borderColor = "black";
    disp.style.marginRight = "12%";
    disp.style.marginTop = "5%";
    disp.style.position = "fixed";
    disp.innerHTML = `<ul>
    <li>Account</li>
    <li>Logout</li>
     </ul>`;
    disp.style.alignItems = "center";
    disp.style.color = "black";
    document.querySelector(".nav-div").appendChild(disp);
  }
  return (
    <div style={{ backgroundColor: "rgb(27,38,58)" }}>
      <div className="nav-div">
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "13%" }}
        >
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
        <ul id="tops">
          <li>Premium</li>
          <li>Support</li>
          <li>Download</li>
          <li>|</li>
          <li>
            {/* <AccountCircleIcon style={{ height: "1cm", width: "1cm" }} /> */}
            <span
              style={{ marginLeft: "7%", marginTop: "7%" }}
              onClick={displaySome}
            >
              <AccountCircleIcon />
              Profile
            </span>
          </li>
        </ul>
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
          <Edit onCancel={() => changeSelect("User")} />
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
        <div
          style={{
            width: "5cm",
            height: "7cm",
            display: "inline-block",
            marginTop: "4cm",
            marginLeft: "12.5%",
          }}
        >
          <ul style={{ color: "white" }}>
            <li>COMPANY</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For record</li>
          </ul>
        </div>
        <div
          style={{
            width: "5cm",
            height: "7cm",
            display: "inline-block",
            marginTop: "4cm",
            marginLeft: "15%",
          }}
        >
          <ul style={{ color: "white" }}>
            <li>COMMUNITIES</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For record</li>
          </ul>
        </div>
        <div
          style={{
            width: "5cm",
            height: "7cm",
            display: "inline-block",
            marginTop: "4cm",
            marginLeft: "15%",
          }}
        >
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
