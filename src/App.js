import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spotify from "./spotify";
import SignUp from "./signup";
import LogIn from "./login";
import Profile from "./profile";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="889525092335-q8fnc297secat91ura28bl9e5d7q067o.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Spotify />
              </>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <LogIn />
              </>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <>
                <Profile />
              </>
            }
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
