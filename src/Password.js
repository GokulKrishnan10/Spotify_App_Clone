function Password({ onCancel }) {
  return (
    <div className="Password">
      <h1>Change your Password</h1>
      <br />
      <label style={{ display: "inline-block" }}>Current Password</label>
      <br />
      <input type="password" />
      <br />
      <br />
      <label>New Password</label>
      <br />
      <input type="password" />
      <br />
      <br />
      <label>Repeat New Password</label>
      <br />
      <input type="password" />
      <br />
      <br />
      <div className="buttons">
        <button className="cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="password">Set new Password</button>
      </div>
    </div>
  );
}
export default Password;
