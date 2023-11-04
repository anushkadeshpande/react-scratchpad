import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating } = resData?.info;

  const { slaString } = resData?.info?.sla;
  return (
    <div className="RestaurantCard">
      <div className="RestaurantCard__header">
        <img src={CDN_URL + resData.info.cloudinaryImageId} />
      </div>

      <div className="RestaurantCard__body">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h6>{slaString}</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
