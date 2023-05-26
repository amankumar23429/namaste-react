import { RES_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, area } = resData?.data;
  return (
    <div className="m-2 p-2 w-60 shadow-lg">
      <img
        className="h-25 w-25"
        alt="res logo"
        src={RES_URL + resData.data.cloudinaryImageId}
      ></img>
      <h3 className="font-bold text-xl">{name}</h3>
      <h3>{avgRating}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{area}</h3>
    </div>
  );
};

export default RestaurantCard;
