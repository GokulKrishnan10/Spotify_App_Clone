function Edit({ onCancel, data }) {
  const months = [
    "January",
    "Febrauary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const genders = [
    "Male",
    "Female",
    "Prefer not to say",
    "Other",
    "Non-binary",
  ];
  // console.log("response is ", data);
  return (
    <>
      <div className="edit">
        <h1>Edit Profile</h1>
        <br />
        <label>Email</label>
        <br />
        <input type="text" value={data.email} />
        <br />
        <br />
        <label>Gender</label>
        <br />
        <select id="gender">
          {genders.map((element) =>
            data.gender === element ? (
              <option selected>{element}</option>
            ) : (
              <option>{element}</option>
            )
          )}
        </select>
        <br />
        <br />
        <label>Date of Birth</label>
        <br />
        <input type="text" id="year" value={data.dob.split("-")[0]} />
        <select id="month">
          {months.map((element, index) =>
            index === parseInt(data.dob.split("-")[1]) ? (
              <option selected>{element}</option>
            ) : (
              <option>{element}</option>
            )
          )}
        </select>
        <input type="text" id="date" value={data.dob.split("-")[2]} />
        <br />
        <br />
        <label>Country or region</label>
        <br />
        <input type="text" />
        <br />
        <br />
        <input
          type="checkbox"
          style={{ width: "15px", height: "15px", accentColor: "green" }}
        />
        <label style={{ marginLeft: "5px" }}>
          Share my registration data with Spotify's content providers for
          marketing purposes.
        </label>
        <br />
        <br />
        <hr />
        <br />

        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="password">Set profile</button>
        </div>
      </div>
    </>
  );
}
export default Edit;
