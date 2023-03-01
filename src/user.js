import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function User() {
  console.log(localStorage.getItem("user"));
  const user = localStorage.getItem("user");
  const history = useNavigate();
  function getAuth() {
    axios
      .get("http://localhost:4000/protected", {
        headers: {
          Authorization: `Bearer ${JSON.parse(user).Token}`,
        },
      })
      .then((response) => {
        history("/profile");
      })
      .catch((error) => console.log("error is ", error));
  }

  return (
    <ul
      className="hover-user"
      style={{
        backgroundColor: "grey",
        borderRadius: "20px",
        padding: "0",
        width: "8.5cm",
        marginBottom: "0.6cm",
        marginTop: "0.3cm",
        marginLeft: "10%",
      }}
      onClick={getAuth}
    >
      <li style={{ marginLeft: "0" }}>
        <FontAwesomeIcon icon={faUser} />
      </li>
      <li style={{ fontSize: "15px" }}>{JSON.parse(user).mail}</li>
    </ul>
  );
}
export default User;
