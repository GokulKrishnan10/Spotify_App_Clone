import axios from "axios";
import { useNavigate } from "react-router";
function Password({ onCancel }) {
  const token = localStorage.getItem("user");
  const history = useNavigate();
  function updatePassword(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    const data = Object.assign({}, formValues);
    axios
      .post("http://localhost:4000/protected/password", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token).Token}`,
        },
      })
      .then((res) => {
        window.alert("Password Changed successfully");
        // localStorage.removeItem("user");
        history("/");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="Password">
      <form
        onSubmit={updatePassword}
        style={{ marginLeft: "0%", marginRight: "3%" }}
      >
        <h1>Change your Password</h1>
        <br />
        <label style={{ display: "inline-block" }}>Current Password</label>
        <br />
        <input type="password" name="old-password" />
        <br />
        <br />
        <label>New Password</label>
        <br />
        <input type="password" name="new_password1" />
        <br />
        <br />
        <label>Repeat New Password</label>
        <br />
        <input type="password" name="new_password2" />
        <br />
        <br />
        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="password">Set new Password</button>
        </div>
      </form>
    </div>
  );
}
export default Password;
