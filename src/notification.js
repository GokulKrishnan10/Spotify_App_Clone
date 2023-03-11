import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InboxIcon from "@mui/icons-material/Inbox";
function Notification({ onCancel }) {
  const statements = [
    `Music & Artist Recommendations 
    Music and new releases from artists you follow or might like`,
    `Podcast & Show Recommendations 
Podcasts and shows we think you might like`,
    `Audiobooks
Audiobooks from authors you follow or might like`,
    `In-person Concerts & Events
  Updates about in-person events we think you’ll like`,
    `Livestreams & Virtual Events
  Updates about virtual events we think you'll like`,
    `Spotify Features & Tips
  News and tips to get the most out of your Spotify services`,
    `Spotify Offers & Bundles
  Special offers for Spotify Premium and our partners`,
    `Spotify Experiences Made for You
 Fun Spotify experiences based on your listening`,
    `News & Cultural Moments
  Notifications related to news, society, and other notable moments`,
    `Artist & Creator Merchandise
  The latest merch from your favorite creators`,
    `Surveys
  Feedback surveys to help us improve
  `,
  ];
  return (
    <div className="notification">
      <h1 style={{ fontSize: "40px" }}>Notification settings</h1>
      <div style={{ marginLeft: "70%" }}>
        <MailOutlineIcon />
        <InboxIcon style={{ marginLeft: "22%" }} />
        <br />
        <h4 style={{ display: "inline" }}>EMAIL</h4>
        <h4 style={{ marginLeft: "10%", display: "inline" }}>PUSH</h4>
      </div>

      <ul>
        {statements.map((element) => (
          <>
            <li
              style={{
                whiteSpace: "pre-line",
                display: "inline-block",
                float: "left",
              }}
            >
              {element}
            </li>
            <input
              style={{
                width: "15px",
                height: "15px",
                marginTop: "-2%",
                float: "left",
                accentColor: "green",
                marginLeft: "70%",
              }}
              type="checkbox"
              checked
            />
            <input
              style={{
                width: "15px",
                height: "15px",
                marginTop: "-2%",
                float: "left",
                accentColor: "green",
                marginLeft: "7.5%",
              }}
              type="checkbox"
            />

            <br />
          </>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <button className="cancel" onClick={onCancel}>
        Cancel
      </button>
      <button className="password">Save</button>
      <br />
      <br />
    </div>
  );
}
export default Notification;
