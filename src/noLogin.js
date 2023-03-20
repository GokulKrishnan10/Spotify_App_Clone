import { Link } from "react-router-dom";
function NoLogin() {
  return (
    <ul>
      <li>
        <Link to="signup">
          <button
            style={{
              backgroundColor: "rgb(16, 16, 16)",
              color: "white",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Sign Up
          </button>
        </Link>
      </li>
      <li>
        <Link to="login">
          <button style={{ fontFamily: '"Poppins", sans-serif' }}>
            Log In
          </button>
        </Link>
      </li>
    </ul>
  );
}
export default NoLogin;
