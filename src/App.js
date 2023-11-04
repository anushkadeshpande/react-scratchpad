import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* Body */}
      {/* Search */}
      {/* Restaurant Container */}
      {/* Restaurant Card */}
      {/* Footer */}
      {/* Copyright */}
      {/* Links */}
      {/* Address */}
      {/* Contact */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
