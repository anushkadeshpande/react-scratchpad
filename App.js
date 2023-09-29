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

const root = ReactDOM.createRoot(document.getElementById("root"));
/* 
* converts the react element (object) ==> html
*/
root.render(parent);
