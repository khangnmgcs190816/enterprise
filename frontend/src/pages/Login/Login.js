import React, { useState } from "react";
import LoginForm from "./LoginForm";
import PopUp from "../../components/PopUp/PopUp";
import { Box } from "@mui/material";

function Login() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const adminUser = {
    username: "admin",
    password: "admin123",
  };
  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        username: details.username,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    setUser({ name: "", username: "" });
  };

  return (
    <Box component="main">
      {user.username !== "" ? (
        // show response of the request

        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={() => setButtonPopup(true)}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} setUser={Logout}>
        <h3>Confirm Logout ?</h3>
      </PopUp>
    </Box>
  );
}

export default Login;
