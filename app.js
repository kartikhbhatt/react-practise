import React from "react"
import ReactDOM from "react-dom"


const heading = React.createElement("h1", { id: "heading" }, "hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
   "div",
   { id: "parent" },
   React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "this is h1 tag"),
      React.createElement("h2", {}, "this is h2 tag"),
   ])
);
root.render(parent);
