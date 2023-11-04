import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="Body">
      <div className="Body__search">Search</div>
      <div className="Body__container">
        {resData?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
