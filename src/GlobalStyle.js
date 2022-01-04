import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.condiv{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
nav{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
a{
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
p{
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.text{
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.back1{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.social{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.btnsame{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.neu1{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.neu2{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.hr_line{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.hr_inner{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.vr_line{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.vr_inner{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
`;

export default GlobalStyle;
