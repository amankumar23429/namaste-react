import { RES_URL } from "../utils/constants";

const FoodItems = ({ name, imageId, price, description }) => {
  return (
    <div className="m-2 p-2 w-60 shadow-lg">
      <img className="h-25 w-25" alt="res logo" src={RES_URL + imageId}></img>
      <h3 className="font-bold text-xl">{name}</h3>
      <h3>{price / 100}</h3>
      <h3>{description}</h3>
    </div>
  );
};
export default FoodItems;
