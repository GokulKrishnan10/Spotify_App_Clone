import { useEffect, useState } from "react";
import axios from "axios";
import Node from "./node";
import "./deepSearch.css";
function DeepSearch() {
  const [array, setArray] = useState([]);

  const [loaded, setLoad] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getimages")
      .then((res) => res.data)
      .then((singers) => {
        if (!loaded) {
          singers.forEach((element) => {
            // console.log(element, singers.length);
            axios({
              method: "get",
              url: `http://localhost:4000/images/${element._id}`,
              responseType: "blob",
            })
              .then((image) => {
                const imgurl = URL.createObjectURL(new Blob([image.data]));
                // array.push(<Node img={imgurl} />);
                setArray((a) => a.concat(<Node img={imgurl} />));
              })
              .catch((error) => console.log(error));
          });
        }
      })
      .catch((error) => console.log(error));
    setLoad(true);
  }, [loaded]);
  return (
    <div className="search-outer">
      <h2 style={{ color: "white", marginLeft: "5%" }}>
        Spotify Original and Exclusive podcasts
      </h2>
      <div className="inner-map">{array.map((element) => element)}</div>
    </div>
  );
}
export default DeepSearch;
