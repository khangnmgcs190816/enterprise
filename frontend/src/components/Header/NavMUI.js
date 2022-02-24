import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Divider } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = ["Idea", "Employee", "Dashboard", "Comments"];
const userTitle = ["Hi, Username!"];
const settings = ["Category", "Your Ideas"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function notificationsLabel(count) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography> */}
          <Link to="/">
            <img
              src="images/Logo-Greenwich.png"
              alt="FPTGreenwich"
              style={{
                maxHeight: "3rem",
                marginRight: "2rem",
                display: { xs: "none", md: "flex" },
              }}
            ></img>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <Button
                    component={Link}
                    sx={{ my: 1, color: "primary", display: "block" }}
                    to={page === "Idea" ? "/Idea" : `/${page}`}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              // <Link to={page === "Home" ? "/" : `/${page}`} sx={{}}>
              // <NavLink>
              <Button
                component={Link}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  marginRight: "2rem",
                  color: "white",
                  display: "block",
                  textAlign: "center",
                }}
                to={page === "Idea" ? "/Idea" : `/${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, marginRight: "1rem" }}>
            <IconButton
              color="whiteIcon"
              aria-label={notificationsLabel(100)}
              sx={{ marginRight: "2rem" }}
            >
              <Badge badgeContent={0} color="badge">
                <MailIcon />
              </Badge>
            </IconButton>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                key={userTitle}
                onClick={handleCloseUserMenu}
                divider={true}
              >
                {/* <Typography textAlign="center">{userTitle}</Typography> */}
                <Button
                  component={Link}
                  sx={{ my: 1, color: "primary", display: "block" }}
                  to={
                    userTitle === "Hi, Username!"
                      ? "/Hi, Username!"
                      : `/${userTitle}`
                  }
                >
                  {userTitle}
                </Button>
              </MenuItem>
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  divider={true}
                >
                  <Button
                    component={Link}
                    textAlign="center"
                    to={setting === "Category" ? "/category" : `/${setting}`}
                  >
                    {setting}
                  </Button>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" color="error">
                  <LogoutIcon fontSize="small" /> Log Out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
