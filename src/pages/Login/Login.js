import React, { useState } from "react";
import LoginForm from "./LoginForm";

function Login() {
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
    <div className="Login">
      {user.username !== "" ? (
        // show response of the request

        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
