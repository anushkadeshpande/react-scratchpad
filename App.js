import React from 'react'
import ReactDOM from 'react-dom/client';

/*
 * 1. creating a simple h1 tag
 */

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
console.log(heading); // logs an object (react element)

const jsxHeading = <h1>Helllloooooo 🚀</h1>

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));
/*
 * converts the react element (object) ==> html
 */
root.render(jsxHeading);
