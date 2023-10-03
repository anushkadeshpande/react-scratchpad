import React from 'react'
import ReactDOM from 'react-dom/client';

/*
 * 1. creating a simple h1 tag
 */

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
console.log(heading); // logs an object (react element)

// JSX
// transpiled before reaches to JS Engine (via Parcel - Babel)
// task of babel : JSX -> React.createElement

// JSX => React.createElement => React element (object) => HTML Element
const jsxHeading = <h1>Helllloooooo 🚀</h1>

console.log(jsxHeading)

// * CREATING FUNCTIONAL COMPONENT

const HeadingComponent = () => {
    return <h1>Helllloooooo 🚀</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
/*
 * converts the react element (object) ==> html
 */
root.render(HeadingComponent());
