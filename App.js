const heading = React.createElement("h1", {id: "heading"}, "Hello World!");

console.log(heading)    // logs an object (react element)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
