import React from "react";
import  ReactDOM  from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

//React.createElement
//React.createElement creates a Object => HTMLElement(as render)
//React.createElement gives you=> ReactElement is JS Object => (React render as) HTMLElement

const heading = React.createElement("h1", {id: "heading"}, "Hello All!");

//JSX
// JSX is convention and XML like syntex. ==> not part of React nor HTML.
//Browser or Js-engine not understand JSX. So, inour case parcel package(in parcel babel is work for it) is transpile(converted in which JS-engine can understand) the JSX code and give it to JS-Engine.
//JSX => (Babel is converte to) React.createElement gives you=> ReactElement is JS Object => (React render as) HTMLElement

const jsxHeading = <h1 id="heading" className="heading">Namaste from Jenil</h1>

//React Components
//there are two type of components:- 
//1)Class based components 

//2)Functional components:- it is a java function which is return JSX/HTML code.It should be start with capital latter
const Title = () => {
  return <h1 id="heading">Functional Components from normal fn As Title Component.</h1>
}
// const userName = prompt("Enter your name");
// const userAge = prompt("Enter your Age");
const HeadEl2 = () => (
<div>
  {/* Component Composition:- We are using one component into another component */} 
  <Title />
  {Title()}
  <Title></Title>
  <h1 className="heading">Functional Components from shorthand property used fn.</h1>
  {/* <h2>Hello from {userName}.I am {userAge} years old.</h2>
  <div>{console.log(userName,userAge,jsxHeading)}</div> */}
  </div>
  )


root.render(<HeadEl2 />);


