import "./login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
function LogIn() {
  function onLogIn(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    const data = Object.assign({}, formValues);
    console.log(data);
    axios
      .post("http://localhost:4000/loggedin", data)
      .then((response) => {
        console.log("response is", response);
        localStorage.setItem("user", response.data[0].email);
        console.log("Successfully logged in ", response.data[0].email);
        console.log(
          localStorage.getItem("user"),
          "Good and not good is ",
          localStorage.getItem("no")
        );
      })
      .catch((error) => {
        console.log("Error is ", error);
      });
  }
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="login">
        {/* <h1 onClick="onClick()">Spotify®</h1> */}
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "30%" }}
        >
          <FontAwesomeIcon
            icon={faSpotify}
            style={{
              color: "black",
              width: "45px",
              height: "45px",
              marginTop: "34px",
              marginLeft: "40px",
            }}
          />
          <h1 style={{ marginLeft: "10px", fontWeight: "500" }}>Spotify</h1>
        </div>
        <hr />

        <button className="button" id="google-sign-in">
          Continue with Google
        </button>
        <br />
        <br />
        <button className="button">Continue with Facebook</button>
        <br />
        <br />
        <button className="button">Continue with Apple</button>
        <br />
        <br />
        <button className="button">Continue with Mobile Number</button>
        <br />
        <br />
        <h5>
          <span>Or</span>
        </h5>

        <form action="loggedin" method="post" onSubmit={onLogIn}>
          <input type="text" id="mail" name="mail" placeholder="Enter mail" />
          <br />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <br />
          <button className="log">LOG IN</button>
        </form>
        <hr />
        <h4>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "purple", textDecoration: "underline" }}
          >
            Sign Up
          </Link>
        </h4>
      </div>
    </div>
  );
}
export default LogIn;
