import axios from "axios";
import { useEffect, useState } from "react";
function Account({ onEdit }) {
  let obj = {};
  const user = localStorage.getItem("user");
  const [data, setData] = useState({});
  useEffect(() => {
    //https://api.spotify.com/v1/search?q=Random%20Access%20Memories%20Daft%20Punk&type=album
    //https://api.spotify.com/v1/search?q={query}&type=track
    //https://api.spotify.com/v1/search?q=A.R.Rahman&type=artist
    //
    // axios
    //   .get(
    //     "https://api.spotify.com/v1/search?q=Random%20Access%20Memories%20Daft%20Punk&type=album",
    //     {

    //       // params: {
    //       //   q: "A.R.Rahman",
    //       //   type: "artist",
    //       // },
    //     }
    //   )
    //   .then((response) => console.log("Gokul----------------", response));
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        { grant_type: "client_credentials" },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic MjVlMTI1MGUyNTMzNGQzNmFlYmZmODA5NDJkODI3MzU6OGUxN2RiNDg4ZDg4NGYxNzhhYTFiYTI4YTRiZTA3NmU=",
          },
        }
      )
      .then((response) => {
        console.log(response.data.access_token);
        axios
          .get("https://api.spotify.com/v1/search/", {
            headers: {
              Authorization: `Bearer ${response.data.access_token}`,
            },
            params: {
              q: "Tamil",
              type: "track",
            },
          })
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
    // axios
    //   .get("http://localhost:4000/protected", {
    //     headers: {
    //       Authorization: `Bearer ${
    //         JSON.parse(localStorage.getItem("user")).Token
    //       }`,
    //     },
    //   })
    //   .then((response) => response.data)
    //   .then((data) => {
    //     console.log("Hello");
    //     setData(data);
    //   })
    //   .catch((error) => console.error(error));
  }, []);
  return (
    <div className="user">
      <h1 id="account">Account Overview</h1>
      <h1>Profile</h1>
      <label style={{ display: "inline-block" }}>User Name</label>
      <input
        type="text"
        style={{ float: "right", marginRight: "3%" }}
        value={data._id}
        readOnly
      />
      <br />
      <hr />
      <br />
      <label style={{ display: "inline-block" }}>Email</label>
      <input
        type="text"
        style={{ float: "right", marginRight: "3%" }}
        value={data.email}
        readOnly
      />
      <br />
      <hr />
      <br />
      <label style={{ display: "inline-block" }}>Date of Birth</label>
      <input
        type="text"
        style={{ float: "right", marginRight: "3%" }}
        value={data.dob}
        readOnly
      />
      <br />
      <hr />
      <br />
      <label style={{ display: "inline-block" }}>Country or Region</label>
      <input
        type="text"
        style={{ float: "right", marginRight: "3%" }}
        value="India"
        readOnly
      />
      <br />
      <br />
      <hr />
      <br />
      <button id="edit" onClick={onEdit}>
        Edit profile
      </button>
      <h2 style={{ marginLeft: "3%" }}>Your Plan</h2>
      <div className="plan">
        <div className="your-plan">
          <h2
            style={{ marginLeft: "35%", marginTop: "10%", fontWeight: "2999" }}
          >
            Spotify free
          </h2>
        </div>

        <p style={{ marginLeft: "5%" }}>Play any song, any time, with ads.</p>
        <hr style={{ color: "rgb(179, 179, 179)" }} />
        <h2 style={{ marginLeft: "5%" }}>Free</h2>
      </div>
      <br />
      <h2 style={{ marginLeft: "3%" }}>Sign out everywhere</h2>
      <p style={{ marginLeft: "3%", marginRight: "3%" }}>
        This logs you out of Spotify everywhere you’re logged in, including the
        mobile, tablet, web player and desktop apps. This doesn't include
        partner devices (e.g. speakers, games consoles, and TVs), so for those
        go to your apps page and choose REMOVE ACCESS.
      </p>
      <div className="para">
        <p style={{ marginLeft: "3%", fontWeight: "700" }}>
          Note: It can take up to 1 hour for sign out to take effect on the web
          player.
        </p>
      </div>
      <br />
    </div>
  );
}
export default Account;
