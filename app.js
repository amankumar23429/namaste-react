import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(heading);

/* <div id="parent">
    <div id="child1">
        <h1>This is the h1 tag</h1>
        <h2>This is the h2 tag</h2>
    </div>
    <div id="child2">
        <h1>This is the h1 tag</h1>
        <h2>This is the h2 tag</h2>
    </div>
</div> */

const heading = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "This is the h1 tag"), React.createElement("h2", {}, "This is the h2 tag")]),
        React.createElement("div", { id: "child2" }, [ React.createElement("h1", {}, "This is the h1 tag"), React.createElement("h2", {}, "This is the h2 tag")])
    ]
)

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(heading);