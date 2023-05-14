import { Link } from "react-router-dom";
import "./Signupfree.css";
function SignupFree() {
  return (
    <div className="free-sign">
      <ul style={{ marginLeft: "0", marginTop: "1%" }}>
        <li>PREVIEW OF SPOTIFY</li>
        <li style={{ fontWeight: "800" }}>
          Sign Up to get unlimited songs and podcasts with occasional ads.No
          credit card Needed
        </li>
      </ul>
      <Link to="/signup">
        <button className="sign-up">Sign Up free</button>
      </Link>
      <br />
    </div>
  );
}
export default SignupFree;
// style={{ marginTop: "3%" }}
