import React, { useState } from "react";
import { Box, Divider, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { loginBoxStyle } from "../../styles/boxStyles";
import { Paper } from "@mui/material";

// TODO1: Checkbox chưa có value để remember me

const styles = {
  paperContainer: {
    backgroundImage: "url(images/bgLogin.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 625,
  },
};

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <Paper style={styles.paperContainer}>
      <Box component="form" onSubmit={submitHandler} sx={loginBoxStyle}>
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
        {error !== "" ? <div className="error">{error}</div> : ""}
        <TextField
          type="text"
          name="username"
          placeholder="Email"
          id="email"
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
        <Divider sx={{ margin: "1rem 0rem 1rem 0rem" }}></Divider>
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </Box>
    </Paper>
  );
}

export default LoginForm;
