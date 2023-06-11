import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import Icon from "@material-ui/icons/Room";
export const Navbar: FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Icon />
        </IconButton>
        <Typography variant="h6">Geolocation MAPS</Typography>
      </Toolbar>
    </AppBar>
  );
};
