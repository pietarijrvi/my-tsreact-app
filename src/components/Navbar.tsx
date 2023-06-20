import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    background: "white",
    color: "black",
    marginTop: "20",
  },
  logo: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar elevation={0} position="static" className={classes.appBar}>
      <Toolbar disableGutters>
        <Typography variant="h4" className={classes.logo}>
          Testing
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
