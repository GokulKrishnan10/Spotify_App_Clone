import "./signup.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
// import { google } from "googleapis";
// import { Auth } from "google-auth-library";
//import { gapi } from "googleapis";
function SignUp() {
  const months = [
    "January",
    "Febrauary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
      .catch((error) => console.error("Error Gokul", error));
  }
  return (
    <div className="signup-container">
      <div className="login">
        <div className="spotify">
          <FontAwesomeIcon
            icon={faSpotify}
            style={{
              color: "black",
              width: "45px",
              height: "45px",
              marginTop: "0.3cm",
              marginLeft: "40px",
            }}
          />
          <h2
            style={{
              marginLeft: "10px",
              fontWeight: "990",
              marginTop: "0.3cm",
            }}
          >
            Spotify
          </h2>
        </div>
        <h2 style={{ marginLeft: "1cm" }}>
          Sign up for free to start listening.
        </h2>
        <button className="button-google" onClick={onSignIn}>
          Continue with Google
        </button>
        <br />
        <br />
        <button className="button-facebook">Continue with Facebook</button>
        <br />
        <br />
        {/* <h5>
          <span>Or</span>
        </h5> */}

        <form
          className="sign-form"
          action="submitted"
          method="post"
          onSubmit={onSubmit}
        >
          <label>What's your email?</label>
          <br />
          <input
            autoComplete="off"
            type="text"
            id="mail1"
            placeholder="Enter your mail"
            required
          />
          <br />
          <br />
          <label>Confirm your email</label>
          <br />
          <input
            autoComplete="off"
            id="mail2"
            type="text"
            placeholder="Enter your mail again"
            name="mail"
            required
          />
          <br />
          <br />
          <label>Create Password</label>
          <br />
          <input
            autoComplete="off"
            id="password"
            type="password"
            placeholder="Password"
            name="Create a password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
          <br />
          <br />
          <label>What should we call you?</label>
          <br />
          <input type="text" />
          <br />
          <br />
          <label>What's your date of birth?</label>
          <br />
          <input type="text" id="year" placeholder="YYYY" />
          <select id="month">
            {months.map((element, index) => (
              <option>{element}</option>
            ))}
          </select>
          <input type="text" id="date" placeholder="DD" />
          {/* <input id="birthday" autocomplete="off" type="date" name="birthday" /> */}
          <br />
          <br />
          <label>What's your Gender?</label>
          <br />
          <br />
          <div className="gender">
            <input
              autoComplete="off"
              type="radio"
              name="gender"
              value="Male"
              id="gender"
            />
            <label>Male</label>
            <input id="gender" type="radio" name="gender" value="Female" />
            <label>Female</label>
            <input id="gender" type="radio" name="gender" value="other" />
            <label>Other</label>
            <input id="gender" type="radio" name="gender" value="non binary" />
            <label>Non Binary</label>
            <br />
            <br />
          </div>
          <br />
          <br />
          <label id="chk1" style={{ width: "11cm" }}>
            <input
              type="checkbox"
              style={{ width: "15px", height: "15px", accentColor: "green" }}
            />
            I would prefer not to receive marketing messages from Spotify
          </label>
          <br />
          <br />
          <label id="chk1" style={{ width: "11cm" }}>
            <input
              type="checkbox"
              style={{ width: "15px", height: "15px", accentColor: "green" }}
            />
            Share my registration data with Spotify's content providers for
            marketing purposes
          </label>
          <br />
          <p className="p1" style={{ width: "12cm" }}>
            By clicking on sign-up, you agree to Spotify's Terms and Conditions
            of Use.
          </p>
          <p className="p2" style={{ width: "12cm" }}>
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see Spotify's Privacy Policy.
          </p>
          <button
            className="log"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            SIGN UP
          </button>
        </form>

        <h4 style={{ marginLeft: "3cm" }}>
          Have an account?{" "}
          <Link
            to="/login"
            style={{ color: "green", textDecoration: "underline" }}
          >
            Log In
          </Link>
        </h4>
        <br />
        <br />
      </div>
    </div>
  );
}
export default SignUp;
