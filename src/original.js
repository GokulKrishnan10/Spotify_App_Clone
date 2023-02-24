import "./home.css";
import axios from "axios";
import Node from "./node";
import { useState } from "react";
function Original({ logg }) {
  const [array, setArray] = useState([]);
  axios
    .get("http://localhost:4000/getimages")
    .then((res) => res.data)
    .then((singers) => {
      singers.forEach((element) => {
        axios({
          method: "get",
          url: `http://localhost:4000/images/${element._id}`,
          responseType: "blob",
        })
          .then((image) => {
            const imgurl = URL.createObjectURL(new Blob([image.data]));
            setArray((prevArray) => prevArray.concat(<Node img={imgurl} />));
          })
          .catch((error) => console.log(error));
      });
    })
    .catch((error) => console.log(error));
  return (
    <div className="collection-outer" style={{}}>
      <h1 style={{ fontSize: "25px" }} onClick={logg}>
        Spotify Original and exclusive shows
      </h1>
      <div className="collection">{array}</div>
      <h1 style={{ fontSize: "25px" }}>Try something else</h1>
      <div className="collection1" style={{ color: "white", height: "5cm" }}>
        {}
      </div>
    </div>
  );
}
export default Original;
