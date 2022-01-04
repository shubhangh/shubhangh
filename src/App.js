import React, { useState } from "react";
import { connect } from "react-redux";
import { userDataAction, gotUserDataAction } from "./redux/app/actions";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Portfolio from "./contents/Portfolio";
import Contact from "./contents/Contact";
import Login from "./components/Login";
import GlobalStyle from "./GlobalStyle";
import searchWeather from "./utils/getWeather";

// import useMediaQuery from "@material-ui/core/useMediaQuery";

// const GlobalStyle = createGlobalStyle`
//   body{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .condiv{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   nav{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   a{
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   p{
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .back1{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .social{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .btnsame{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .neu1{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .neu2{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .hr_line{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .hr_inner{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .vr_line{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
//   .vr_inner{
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
//     color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
//   }
// `;

function App(props) {
  const [theme, setTheme] = useState({ mode: "light" });

  // fetch("https://ipapi.co/json/")
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson);
  //   });
  console.log("props ", props);

  fetch("https://extreme-ip-lookup.com/json/")
    .then((response) => response.json())
    .then((responseJson) => {
      if (props.gotUserData === false) {
        props.userDataAction(responseJson);
        // props.userDataAction(responseJson);
        console.log("shu res userData", props.userData);
        console.log("in app", searchWeather());
      }
    })
    .then(() => {
      props.gotUserDataAction(true);
    });

  // setTimeout(() => {
  //   console.log("in app", searchWeather());
  //   props.userDataAction(responseJson);

  // }, 3000);

  // const matches = useMediaQuery("(min-width:600px)");
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* <span>{`(min-width:600px) matches: ${matches}`}</span> */}
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/admin">
              <Login />
            </Route>
            <div
              className="back1"
              onClick={(e) =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            >
              <div className="themeChangeIcon">
                <i
                  className="themeChangeIcon"
                  className={
                    theme.mode === "dark" ? "fa fa-sun-o" : "fa fa-moon-o"
                  }
                ></i>
              </div>
            </div>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    gotUserData: state.user.gotUserData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userDataAction: (payload) => dispatch(userDataAction(payload)),
    gotUserDataAction: (payload) => dispatch(gotUserDataAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
