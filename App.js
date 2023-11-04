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

const RestaurantCard = (props) => {
  const {resData} = props
  return (
    <div className="RestaurantCard">
      <div className="RestaurantCard__header">
        <img src="https://www.herofincorp.com/public/admin_assets/upload/blog/64b91a06ab1c8_food%20business%20ideas.webp" />
      </div>

      <div className="RestaurantCard__body">
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h6>{resData.info.sla.slaString}</h6>
      </div>
    </div>
  );
};

const resData = {
  info: {
    id: "24402",
    name: "Domino's Pizza",
    cloudinaryImageId: "qc2qaue0ygzdj7tursgm",
    locality: "Amchi Colony",
    areaName: "Bavdhan",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.4,
    feeDetails: {
      restaurantId: "24402",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4200,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4200,
    },
    parentId: "2456",
    avgRatingString: "4.4",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 25,
      serviceability: "SERVICEABLE",
      slaString: "25 mins",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-11-05 02:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/dominos-pizza-amchi-colony-bavdhan-pune-24402",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="Body">
      <div className="Body__search">Search</div>
      <div className="Body__container">
        <RestaurantCard
          resData={resData}
        />
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
