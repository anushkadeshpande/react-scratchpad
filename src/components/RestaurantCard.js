const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating } = resData?.info;

  const { slaString } = resData?.info?.sla;
  return (
    <div className="RestaurantCard">
      <div className="RestaurantCard__header">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/" +
            resData.info.cloudinaryImageId
          }
        />
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
