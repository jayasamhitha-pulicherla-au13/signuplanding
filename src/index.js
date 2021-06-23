import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d84315", // This is an orange looking color
    },
    secondary: {
      main: "#0277bd", //Another orange-ish color
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
