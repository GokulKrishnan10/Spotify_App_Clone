import "./signup.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
// import { google } from "googleapis";
// import { Auth } from "google-auth-library";
//import { gapi } from "googleapis";
function SignUp() {
  function onSignIn() {
    // gapi.load("auth2", function () {
    //   gapi.auth2
    //     .init({
    //       client_id:
    //         "889525092335-q8fnc297secat91ura28bl9e5d7q067o.apps.googleusercontent.com",
    //       scope: "https://www.googleapis.com/auth/plus.login",
    //       prompt: "Choose account",
    //       plugin_name: "Spotify",
    //     })
    //     .then(function () {
    //       gapi.auth2
    //         .getAuthInstance()
    //         .signIn({
    //           prompt: "select_account",
    //         })
    //         .then(function (googleUser) {
    //           // Get user's ID token and basic profile information
    //           var id_token = googleUser.getAuthResponse().id_token;
    //           var profile = googleUser.getBasicProfile();
    //           // Log the user's ID token and basic profile information
    //           console.log("ID Token: " + id_token);
    //           console.log("Name: " + profile.getName());
    //           console.log("Email: " + profile.getEmail());
    //           console.log("Access Token : " + profile.getId());
    //         });
    //     });
    // });
  }
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    const data = Object.assign({}, formValues);
    axios
      .post("http://localhost:4000/submitted", data)
      .then((res) => console.log("Success", res))
      .catch((error) => console.error("No error Gokul", error));
  }
  return (
    <div className="login">
      <div style={{ display: "flex", flexDirection: "row", marginLeft: "30%" }}>
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
      <h3>Sign up for free to start listening.</h3>
      <hr />
      <button className="button" onClick={onSignIn}>
        Continue with Google
      </button>
      <br />
      <br />
      <button className="button">Continue with Facebook</button>
      <br />
      <br />
      <h5>
        <span>Or</span>
      </h5>

      <form action="submitted" method="post" onSubmit={onSubmit}>
        <label>What's your email?</label>
        <br />
        <input type="text" id="mail1" placeholder="Enter mail" required />
        <br />
        <br />
        <label>Confirm your email</label>
        <br />
        <input
          id="mail2"
          type="text"
          placeholder="Enter mail"
          name="mail"
          required
        />
        <br />
        <br />
        <label>Create Password</label>
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required
        />
        <br />
        <br />
        <label>What's your date of birth?</label>
        <br />
        <input id="birthday" type="date" name="birthday" />
        <br />
        <br />
        <label>What's your Gender?</label>
        <br />
        <br />
        <div className="gender">
          <input
            type="radio"
            name="gender"
            value="Male"
            id="gender"
            style={{ marginRight: "0" }}
          />
          <label for="html">Male</label>
          <br />
          <input
            id="gender"
            type="radio"
            name="gender"
            value="Female"
            style={{ marginRight: "0" }}
          />
          <label for="css">Female</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="other"
            style={{ marginRight: "0" }}
          />
          <label for="javascript">Other</label>
        </div>
        <br />
        <br />
        <label id="chk1">
          <input
            type="checkbox"
            style={{ width: "15px", height: "15px", accentColor: "green" }}
          />
        </label>
        I would prefer not to receive marketing messages from Spotify <br />
        <br />
        <label id="chk1">
          <input
            type="checkbox"
            style={{ width: "15px", height: "15px", accentColor: "green" }}
          />
        </label>
        Share my registration data with Spotify's content providers for
        marketing purposes
        <br />
        <br />
        <button className="log">SIGN UP</button>
      </form>
      <hr />
      <h4>
        Have an account?{" "}
        <Link
          to="/login"
          style={{ color: "purple", textDecoration: "underline" }}
        >
          Log In
        </Link>
      </h4>
      <br />
      <br />
    </div>
  );
}
export default SignUp;
