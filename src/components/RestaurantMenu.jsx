import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, resImage] = useRestaurant(resId);
  const isOnline = useOnline();
  if (!isOnline) {
    return <h2>Oops, your internet is not working</h2>;
  }
  return restaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="res-menu">
      <img className="menu-img" src={RES_URL + resImage}></img>
      <ul>
        {restaurant?.map((res) => {
          if (res?.card?.card?.itemCards != undefined)
            return res?.card?.card?.itemCards?.map((menu) => {
              return (
                <li key={menu?.card?.info?.id}>{menu?.card?.info?.name}</li>
              );
            });
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
