import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Error from "./components/Error";

const App = () => {
  return (
    <div className="App">
      <Header />
      
      {/* Whenever there is a change in the path, this outlet will be filled with the children according to the path */}
      <Outlet />
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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
