import axios from "axios";
import "./language.css";
import { useSelector, useDispatch } from "react-redux";

function Language({ language }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.select);
  let arr = [];
  if (language === "tamil") {
    arr = ["vijay", "ajith", "annakili", "muthal mariyadhai", "amman"];
  }
  axios
    .post(
      "https://accounts.spotify.com/api/token",
      { grant_type: "client_credentials" },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic MjVlMTI1MGUyNTMzNGQzNmFlYmZmODA5NDJkODI3MzU6OGUxN2RiNDg4ZDg4NGYxNzhhYTFiYTI4YTRiZTA3NmU=`,
        },
      }
    )
    .then((response) => {
      axios
        .get("https://api.spotify.com/v1/search/", {
          headers: {
            Authorization: `Bearer ${response.data.access_token}`,
          },
          params: {
            q: "tamil",
            type: "track",
          },
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
  // useEffect(() => {
  //   axios
  //     .get("https://api.spotify.com/v1/search/", {
  //       headers: {
  //         Authorization:
  //           "Bearer MjVlMTI1MGUyNTMzNGQzNmFlYmZmODA5NDJkODI3MzU6OGUxN2RiNDg4ZDg4NGYxNzhhYTFiYTI4YTRiZTA3NmU=",
  //       },
  //       params: {
  //         q: "tamil",
  //         type: "track",
  //       },
  //     })
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div style={{ color: "white" }}>
      <h1 style={{ color: "white", fontSize: "70px" }}>Tamil</h1>
      <h1>Tamil Popular playlists</h1>
      <div className="song1"></div>
      <h1>Bakthi Ula</h1>
      <div className="song1"></div>
      <h1>Folk songs</h1>
      <div className="song1"></div>
      <h1>Editors Pick tamil</h1>
      <div className="song1"></div>
      <h1>Simply Kaadhal</h1>
      <div className="song1"></div>
    </div>
  );
}
export default Language;
