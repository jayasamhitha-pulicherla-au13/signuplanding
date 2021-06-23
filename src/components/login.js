import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Login = () => {
  const paperStyle = { padding: 20, width: 400, height: 500, margin: "0 auto" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper className="Rectangle">
        <Grid align="center">
          <h2>SignIn</h2>
          <Typography variant="caption" gutterBottom>
            Enter your account details below
          </Typography>
        </Grid>
        <TextField
          label="Email address"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Keep me signed in"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Get Started
        </Button>
        <Typography>
          <Link href="#" color="secondary">
            Forgot password ?
          </Link>
        </Typography>
        <Typography>
          {" "}
          Don't have an account ?
          <Link
            href="/"
            color="secondary"
          >
            Create for free
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
