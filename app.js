import React from "react";
import ReactDOM from "react-dom/client";

const HeadingSpan = <span>Title </span>;
const TitleHeading = () => (
  <h1 className="head" tabIndex="5">
    {HeadingSpan}
    Namaste Javascript from JSX
  </h1>
);

// React Functional Component
// component composition ==> component function containing another functional component
const HeadingComponent = () => (
  <div id="container">
    <TitleHeading />
    {TitleHeading()}
    <TitleHeading></TitleHeading>
    {/* these all are doing same work */}
    <h1 className="heading" tabIndex="5">
      Namaste Javascript Functional Component
    </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
