import React from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const Signup = () => {
  const headerStyle = { margin: 0 };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper  className="Rectangle">
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            No credit card requried
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            variant="outlined"
            label="Email address"
            placeholder="Email address"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            placeholder="Password"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Company name"
            placeholder="Company name"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I agree the terms and conditions."
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
            {" "}
            Already have an account ?
            <Link
              href="/login"
              color="secondary"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
