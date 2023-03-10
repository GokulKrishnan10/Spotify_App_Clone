import { BsMusicNoteBeamed } from "react-icons/bs";
function Name() {
  return (
    <div className="outer-edit" id="outer-edit">
      <h3 style={{ marginLeft: "6%", color: "white" }}>Edit details</h3>
      <br />
      <div className="inner-edit">
        <div
          id="inner-edit"
          style={{
            width: "5cm",
            height: "5cm",
            boxShadow: "5px 5px 5px 5px black",
            marginLeft: "6%",
          }}
        >
          <BsMusicNoteBeamed
            style={{
              marginTop: "26%",
              marginLeft: "20%",
              color: "rgb(127,127,127)",
              width: "90px",
              height: "90px",
            }}
          />
        </div>

        <ul id="inner-edit" style={{ marginTop: "0" }}>
          <input id="inner-edit" type="text" />
          <br />
          <br />
          <input
            className="second-in"
            id="inner-edit"
            type="text"
            style={{ height: "3.5cm" }}
          />
        </ul>
      </div>
      <button
        style={{
          right: "0px",
          width: "4cm",
          height: "1.2cm",
          marginLeft: "70%",
          borderRadius: "50px",
          fontSize: "15px",
          fontWeight: "867",
        }}
      >
        Save
      </button>
      <p
        id="inner-edit"
        style={{ color: "white", fontSize: "12px", marginLeft: "4%" }}
      >
        By proceeding, you agree to give Spotify access to the image you choose
        to upload. Please make sure you have the right to upload the image.
      </p>
    </div>
  );
}
export default Name;
