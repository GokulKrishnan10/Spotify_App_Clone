function Edit({ onCancel }) {
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
  return (
    <>
      <div className="edit">
        <h1>Edit Profile</h1>
        <br />
        <label>Email</label>
        <br />
        <input type="text" />
        <br />
        <br />
        <label>Gender</label>
        <br />
        <select id="gender">
          {genders.map((element) => (
            <option>{element}</option>
          ))}
        </select>
        <br />
        <br />
        <label>Date of Birth</label>
        <br />
        <input type="text" id="year" />
        <select id="month">
          {months.map((element) => (
            <option>{element}</option>
          ))}
        </select>
        <input type="text" id="date" />
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
