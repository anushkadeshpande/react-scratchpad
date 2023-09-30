import React from 'react'
import ReactDOM from 'react-dom/client';

/*
 * 1. creating a simple h1 tag
 */

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
console.log(heading); // logs an object (react element)

/* 
* 2. creating a nested element of format:
    <div id="parent-div">
        <div id="child-div">
            <h1></h1>
        </div>
    </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent-div" },
  React.createElement(
    "div",
    { id: "child-div" },
    React.createElement("h1", { id: "nested-h1" }, "I am a nested h1")
  )
);

/* 
* 3. creating an element with siblings:
    <div id="parent-div">
        <div id="child-div">
            <h1></h1>
            <h2></h2>
        </div>
    </div>
*/

const parent2 = React.createElement(
  "div",
  { id: "parent-div" },
  React.createElement("div", { id: "child-div" }, [
    React.createElement("h1", { id: "nested-h1" }, "I am a nested h1"),
    React.createElement("h2", { id: "nested-h2" }, "I am a nested h2"),
  ])
);

/* 
* 4. creating an even more complex structure like:
    <div id="parent-div">
        <div id="child-div">
            <h1></h1>
            <h2></h2>
        </div>

        <div id="child-div-2">
            <h1></h1>
            <h2></h2>
        </div>
    </div>
*/

const parent3 = React.createElement("div", { id: "parent-div" }, [
  React.createElement("div", { id: "child-div" }, [
    React.createElement("h1", { id: "nested-h1" }, "I am a nested h1"),
    React.createElement("h2", { id: "nested-h2" }, "I am a nested h2"),
  ]),
  React.createElement("div", { id: "child-div-2" }, [
    React.createElement("h1", { id: "nested-h1-2" }, "I am a nested h1-2"),
    React.createElement("h2", { id: "nested-h2-2" }, "I am a nested h2-2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
/*
 * converts the react element (object) ==> html
 */
root.render(parent3);
