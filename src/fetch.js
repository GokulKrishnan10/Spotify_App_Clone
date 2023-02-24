import { useEffect, useState } from "react";
import Node from "./node";
import axios from "axios";

export function Fetch() {
  let array = [];
  return axios
    .get("http://localhost:4000/getimages")
    .then((res) => res.data)
    .then((singers) => {
      singers.forEach((element) => {
        // console.log(element, singers.length);
        axios({
          method: "get",
          url: `http://localhost:4000/images/${element._id}`,
          responseType: "blob",
        })
          .then((image) => {
            const imgurl = URL.createObjectURL(new Blob([image.data]));
            array.push(<Node img={imgurl} />);
          })
          .catch((error) => console.log(error));
      });
    })
    .catch((error) => console.log(error));
}
