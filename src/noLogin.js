import { Link } from "react-router-dom";
function NoLogin() {
  return (
    <ul>
      <li>
        <Link to="signup">
          <button>Sign Up</button>
        </Link>
      </li>
      <li>
        <Link to="login">
          <button>Log In</button>
        </Link>
      </li>
    </ul>
  );
}
export default NoLogin;
