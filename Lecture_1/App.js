import React from "react";
import  ReactDOM  from "react-dom";

const heading = React.createElement(
    "h1",
    { id: "heading", className: "heading" },
    "Hello World from React!!!"
  );
  console.log(heading); //This will print a object
  const para = React.createElement(
    "div",
    { id: "para", className: "para", abc: "abc" },
    "This is my first paragraph from React🐱‍💻"
  );
  
  const root_react = ReactDOM.createRoot(document.getElementById("root"));
  
  root_react.render(heading);
  root_react.render(para);
  
  const h1 = React.createElement("h1", {}, "React's h1 tag");
  const h2 = React.createElement("h2", {}, "React's h2 tag");
  const child1 = React.createElement("div", { id: "child1" }, [h1,heading,h2, para]);
  const child2 = React.createElement("div", { id: "child2" }, [h1,heading,h2, para]);
  const parent = React.createElement("div", { id: "parent" }, [child1,child2]);
  
  root_react.render(parent);
  