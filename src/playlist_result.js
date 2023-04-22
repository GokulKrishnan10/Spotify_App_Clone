import "./playlist_result.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUrl } from "./actions";
import { useEffect } from "react";
function PlayResult({ name, url }) {
  const dispatch = useDispatch();
  useEffect(() => console.log("Rerender playRESULT"), [url]);
  return (
    <div className="result" onClick={() => dispatch(setUrl(url))}>
      <p className="text">{name}</p>
      <button className="adding">Add</button>
    </div>
  );
}
export default PlayResult;
