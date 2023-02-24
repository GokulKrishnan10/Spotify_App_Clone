function Manage() {
  return (
    <div className="manage">
      <h1 style={{ fontSize: "40px" }}>Manage Apps</h1>
      <p
        style={{
          marginLeft: "3%",
          marginRight: "3%",
          fontSize: "17px",
          fontWeight: "600",
        }}
      >
        You've given these apps access to your Spotify account. To prevent them
        from future access, click "Remove Access".
        <br />
        <br />
        You haven't approved any applications.
      </p>
    </div>
  );
}
export default Manage;
