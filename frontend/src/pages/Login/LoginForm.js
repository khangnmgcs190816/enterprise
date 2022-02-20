import React, { useState } from "react";
import { Box, Divider, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Popup from "reactjs-popup";

// TODO1: Checkbox chưa có value để remember me

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        width: "40%",
        float: "right",
        border: 1,
        borderColor: "white",
        borderRadius: "25px",
        boxShadow: 4,
        padding: "3rem",
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        color="primary"
        fontWeight="bold"
        alignItems="center"
      >
        Welcome to FPT Greenwich!
      </Typography>
      <Divider sx={{ margin: "1rem 0rem 1rem 0rem" }}></Divider>
      {error !== "" ? <div className="error">{error}</div> : ""}{" "}
      <TextField
        type="text"
        name="username"
        placeholder="Username"
        id="username"
        onChange={(e) => setDetails({ ...details, username: e.target.value })}
        value={details.username}
        autoFocus
        required
        fullWidth
      />
      <Divider sx={{ margin: "1rem 0rem 1rem 0rem" }}></Divider>
      <TextField
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
        value={details.password}
        autoFocus
        required
        fullWidth
      />
      <FormControlLabel
        sx={{
          alignSelf: "self-start",
        }}
        control={<Checkbox value="" color="primary" />}
        label="Remember Me"
      />
      <Divider sx={{ margin: "1rem 0rem 1rem 0rem" }}></Divider>
      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
