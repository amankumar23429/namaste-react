import { RES_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, area } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-image"
        alt="res logo"
        src={RES_URL + resData.data.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h3>{avgRating}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{area}</h3>
    </div>
  );
};

export default RestaurantCard;
