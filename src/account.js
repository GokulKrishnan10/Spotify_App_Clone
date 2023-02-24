import axios from "axios";
import { useEffect } from "react";
function Account({ onEdit }) {
  let obj = {};
  const user = localStorage.getItem("user");
  useEffect(() => {
    console.log("User", user);
    axios
      .post("http://localhost:4000/loggedin", { user })
      .then((response) => {
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
  }, []);
  return (
    <div className="user">
      <h1 id="account">Account Overview</h1>
      <h1>Profile</h1>
      <label style={{ display: "inline-block" }}>User Name</label>
      <input type="text" style={{ float: "right", marginRight: "3%" }} />
      <br />
      <hr />
      <br />
      <label style={{ display: "inline-block" }}>Email</label>
      <input type="text" style={{ float: "right", marginRight: "3%" }} />
      <br />
      <hr />
      <br />
      <label style={{ display: "inline-block" }}>Date of Birth</label>
      <input type="text" style={{ float: "right", marginRight: "3%" }} />
      <br />
      <hr />
      <br />
      <label style={{ display: "inline-block" }}>Country or Region</label>
      <input type="text" style={{ float: "right", marginRight: "3%" }} />
      <br />
      <br />
      <hr />
      <br />
      <button id="edit" onClick={onEdit}>
        Edit profile
      </button>
    </div>
  );
}
export default Account;
