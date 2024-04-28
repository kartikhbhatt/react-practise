import React from "react";
import ReactDOM from "react-dom/client";

// react element same as dom element
// const heading = React.createElement("h1", { id: "heading" }, "this is heading");

// jsx - html like syntax => jsx => React.createelement() => react.createlement- js object=> html element
const heading = <h1 id="heading">hello world with jsx</h1>;

const Title = () => <h1 className="head">Heading from components</h1>;

const title = (
   <div className="hehe">
      <h1>title element</h1>
   </div>
);

// component composition
const HeadingComponent = () => (
   <div className="container">
      <Title />
      {title}
      <h1 className="heading">heading using components</h1>
   </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
