import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function User() {
  const user = localStorage.getItem("user");
  return (
    <ul
      className="hover-user"
      style={{
        backgroundColor: "grey",
        borderRadius: "20px",
        padding: "0",
        width: "10cm",
        marginBottom: "0.6cm",
        marginTop: "0.3cm",
      }}
    >
      <li style={{ marginLeft: "0" }}>
        <FontAwesomeIcon icon={faUser} />
      </li>
      <Link to="/profile">
        <li style={{ fontSize: "15px" }}>{user}</li>
      </Link>
    </ul>
  );
}
export default User;
