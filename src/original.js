import "./home.css";
import axios from "axios";
import Node from "./node";
import { useState, useEffect } from "react";
function Original({ logg, display }) {
  const [array, setArray] = useState([]);
  const [loaded, setLoad] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getimages")
      .then((res) => res.data)
      .then((singers) => {
        console.log("In axios");
        if (!loaded) {
          singers.forEach((element) => {
            axios({
              method: "get",
              url: `http://localhost:4000/images/${element._id}`,
              responseType: "blob",
            })
              .then((image) => {
                const imgurl = URL.createObjectURL(new Blob([image.data]));
                setArray((prevArray) =>
                  prevArray.concat(<Node img={imgurl} disp={display} />)
                );
              })
              .catch((error) => console.log(error));
          });
        }
      })
      .catch((error) => console.log(error));
    setLoad(true);
  }, [loaded]);

  return (
    <div className="collection-outer">
      <h1 style={{ fontSize: "25px" }} onClick={logg}>
        Spotify Original and exclusive shows
      </h1>
      <div className="collection">{array}</div>
      <h1 style={{ fontSize: "25px" }}>Try something else</h1>
      <div className="collection1" style={{ color: "white", height: "5cm" }}>
        {}
      </div>
      <h1>Focus</h1>
      <div className="collection1" style={{ color: "white", height: "5cm" }}>
        {}
      </div>
      <h1>Focus</h1>
      <div className="collection1" style={{ color: "white", height: "5cm" }}>
        {}
      </div>
      <h1>Focus</h1>
      <div className="collection1" style={{ color: "white", height: "5cm" }}>
        {}
      </div>
      <h1>Popular Artists</h1>
      <div></div>
      <h1>Popular albums</h1>
      <div></div>
    </div>
  );
}
export default Original;
