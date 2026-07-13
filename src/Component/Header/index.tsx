import { Button, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "/images/c3-logo.png";
import MenuIcon from "@mui/icons-material/Menu";

import "./style.css";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="headerSec">
      <Grid container alignItems="center" className="gridContainer">
        <Grid md={6} xs={6} className="logoSec">
          <img alt="logo" src={Logo} className="logoIcon" />
        </Grid>
        <Grid md={6} xs={6} textAlign='right'>
          <div className="toggleIcon" onClick={handleToggleMenu}>
            <MenuIcon />
          </div>
          <div className={`mobileAfter ${showMenu ? "fixedMenu" : ""}`} onClick={handleToggleMenu}></div>
          <div className={`textRight mainNav ${showMenu ? "fixedMenu" : ""}`} >
            <Button color="inherit" component={RouterLink} to="/">
              Why C3D
            </Button>
            <Button color="inherit" component={RouterLink} to="/">
              Case Studis
            </Button>
            <Button color="inherit" component={RouterLink} to="/">
              Contact
            </Button>
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
