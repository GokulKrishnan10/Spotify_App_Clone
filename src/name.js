import { BsMusicNoteBeamed } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { updateIndex } from "./actions";
import "./name.css";
function Name({ name }) {
  const list = useSelector((state) => state.playlists);
  const stat = useSelector((state) => state.playlists);
  const dispatch = useDispatch();
  function addName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    const data = Object.assign({}, formValues);
    document.querySelector(".outer-edit").style.display = "none";
    document.getElementById(`${name}-heading`).innerHTML = data.name;
    const index = list.indexOf(name);
    name = data.name;
    try {
      const obj = { index, newValue: data.name };
      dispatch(updateIndex(obj));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="outer-edit" id="outer-edit">
      <h1 className="heading-1">Edit details</h1>
      <div className="inner-edit">
        <div className="icon-class" id="inner-edit">
          <BsMusicNoteBeamed id="inner-edit" className="icon" />
        </div>

        <form id="inner-edit" className="form-edit" onSubmit={addName}>
          <input
            autoComplete="off"
            type="text"
            id="inner-edit"
            name="name"
            style={{ height: "0.5cm", width: "6.2cm" }}
          />
          <br />
          <textarea
            className="second-in"
            id="inner-edit"
            value={"Add an optional description"}
          />
          <br />

          <button className="save-button">Save</button>
        </form>
      </div>
      <p id="inner-edit" className="condition">
        By proceeding, you agree to give Spotify access to the image you choose
        to upload. Please make sure you have the right to upload the image.
      </p>
    </div>
  );
}
export default Name;
