function Privacy() {
  return (
    <div className="privacy">
      <h1 style={{ marginTop: "5%", marginLeft: "5%", fontSize: "40px" }}>
        Privacy settings
      </h1>
      <p>
        We want to make it easy for you to manage and understand your Privacy
        Settings, so you can use the Spotify service in the way you want.
        <br />
        <br />
        The controls on this page enable you to:
        <ul>
          <li>Control the tailored ads you see and hear on Spotify.</li>
          <li>Control the Facebook data Spotify processes about you.</li>
          <li>Download a copy of your Spotify personal data.</li>
        </ul>
      </p>
      <h1>Manage your data</h1>
      <p>
        Additional data controls can be accessed from your device or directly
        from the Spotify service. For more information about your data rights,
        including how and why Spotify collects personal data, and additional
        information on how you can manage this, please see our Privacy Policy or
        learn more in our Q&A for data rights and privacy settings.
      </p>
      <div className="ads">
        <br />
        <h1>Tailored ads</h1>
        <p>
          Tailored ads The tailored ads toggle below controls the tailored ads
          you experience on Spotify's services, as well as Spotify's ads
          targeted to you on other platforms. While using the Spotify services,
          we may use certain personal data about you in order to deliver
          advertising that is more relevant to you. This data may include
          information collected about your use of Spotify over time and/or data
          about your interests obtained from third party advertising partners.
          If you opt out of receiving tailored ads, we will stop using such data
          to show you tailored ads, and we will also not share your information
          with third party advertising partners for the purpose of facilitating
          tailored ads. Note, however, that you may still receive ads based on
          your Spotify registration information and your real-time usage of
          Spotify, but the ads may be less relevant to you. Additionally,
          Spotify may share limited data with other platforms to market Spotify
          promotions, features, or new releases on those other platforms. If you
          opt out of tailored advertising below, we will not share your
          information with these platforms.
        </p>

        <br />
        <label className="switch">
          <input type="checkbox" checked />
          <span className="slider round"></span>
        </label>
        <br />
      </div>
      <br />
      <br />
      <div className="facebook">
        <br />
        <h1>Facebook data</h1>
        <p>
          When you opt out of Spotify processing your Facebook data, we will
          stop processing any Facebook data shared with Spotify except the
          personal data that enables you to sign into Spotify using your
          Facebook account. For more information, please see your data rights
          and privacy settings.
        </p>
        <br /> <br />
      </div>
      <br />
      <h1>Download your data</h1>s
      <p>
        By using our Download your data tool, you can request a copy of your
        personal data. You may download three different packages of data, either
        separately or all at once. Please see below what the packages include
        (if applicable to you) and choose what you want to download. For more
        details about the data categories in the packages, please see
        Understanding My Data or contact us.
      </p>
      <div className="flexit">
        <div
          className="acc"
          style={{
            width: "80%",
            marginLeft: "5%",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ marginLeft: "25%" }}>Account data</h2>
          <ul
            style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "10%" }}
          >
            <li>Playlists</li>
            <li>Streaming history for the past year</li>
            <li>A list of items saved in your library</li>
            <li>Search queries</li>
            <li>No. of followers, accounts you follow, and blocked accounts</li>
            <li>Payment and subscription data</li>
            <li>User data</li>
            <li>Family Plan data</li>
            <li>Inferences</li>
            <li>Voice input</li>
            <li>Podcast interactivity</li>
            <li>Spotify for Artists data</li>
          </ul>
          <br />
          <input
            type="checkbox"
            style={{
              marginLeft: "25%",
              accentColor: "green",
              width: "15px",
              height: "15px",
            }}
          />
          <label>Select Account data</label>
          <br />
          <br />
        </div>
        <br />
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: "70%",
              marginLeft: "5%",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            <p style={{ padding: "20px" }}>
              <h2>Extended streaming history </h2>
              Extended streaming history for the lifetime of your account,
              including track information, and when and how you streamed
              content.
            </p>
            <br />
            <input
              type="checkbox"
              style={{
                marginLeft: "5%",
                accentColor: "green",
                width: "15px",
                height: "15px",
              }}
            />
            <label>Select Extended streaming history</label>
            <br />
            <br />
            <br />
          </div>
          <br />
          <div
            style={{
              width: "70%",
              marginLeft: "5%",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            <p style={{ padding: "20px" }}>
              <h2>Technical log information</h2> Technical log information that
              we have collected about your account to provide and troubleshoot
              the Spotify service.
            </p>
            <br />
            <input
              type="checkbox"
              style={{
                marginLeft: "5%",
                accentColor: "green",
                width: "15px",
                height: "15px",
              }}
            />
            <label>Select Technical log information</label>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <button id="request">Request data</button>
      <br />
      <br />
    </div>
  );
}
export default Privacy;
