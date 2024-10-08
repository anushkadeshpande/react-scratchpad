import { useState, useEffect } from "react";
import RestaurantCard, {withFastDeliveryLabel} from "./RestaurantCard";
import { API_URL } from "../utils/secrets";
import Shimmer from "./Shimmer";

import "./Body.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const FastRestaurantCard = withFastDeliveryLabel(RestaurantCard)

const Body = () => {
  // const [restaurantList, setRestaurantList] = useState(resData);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    setRestaurantList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurantList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const onlineStatus = useOnlineStatus()

  if(!onlineStatus)
    return <h1>Snap! Looks like you're offline! 🥺</h1>

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="Body__filter">
        <div className="Body__filter__search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setFilteredRestaurantList(
                restaurantList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
              );
            }}
          />
          <button
            onClick={() => {
            }}
          >
            Search
          </button>
        </div>
        <button
          className="Body__filter_filterBtn"
          onClick={() => {
            setFilteredRestaurantList(
              restaurantList.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </button>
      </div>
      <div className="Body__container">
        {/* {console.log(filteredRestaurantList)} */}
        {filteredRestaurantList?.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
            {
              restaurant?.info?.sla?.deliveryTime < 30 ? <FastRestaurantCard resData={restaurant} /> :<RestaurantCard resData={restaurant} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
