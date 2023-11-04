import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/github-readme-content.appspot.com/o/fast-food-outline.svg?alt=media&token=8b793cf4-ad2b-485b-aae6-27debbf8b2e6&_gl=1*1q9v9y*_ga*MjAxOTg3ODU3Mi4xNjg1ODU4Nzkz*_ga_CW55HF8NVT*MTY5NzMyMTI2MS4xMS4xLjE2OTczMjEyOTAuMzEuMC4w" />
      </div>
      <div className="Header__nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({restName, resCuisine, resRating, resDeliveryTime}) => {
  return (
    <div className="RestaurantCard">
      <div className="RestaurantCard__header">
        <img src="https://www.herofincorp.com/public/admin_assets/upload/blog/64b91a06ab1c8_food%20business%20ideas.webp" />
      </div>

      <div className="RestaurantCard__body">
        <h3>{restName}</h3>
        <h4>{resCuisine}</h4>
        <h4>{resRating}</h4>
        <h6>{resDeliveryTime}</h6>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="Body__search">Search</div>
      <div className="Body__container">
      <RestaurantCard restName="Yummy Food" resCuisine="North Indian, Fast Food" resRating="⭐⭐⭐⭐⭐" resDeliveryTime="38 minutes" />
      <RestaurantCard restName="Healthy Food" resCuisine="Diet Food" resRating="⭐⭐⭐⭐" resDeliveryTime="20 minutes" />
      </div>
    </div>
  );
};

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
