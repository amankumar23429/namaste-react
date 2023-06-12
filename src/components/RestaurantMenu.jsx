import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, resImage] = useRestaurant(resId);
  const isOnline = useOnline();
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItems(item));
  };
  if (!isOnline) {
    return <h2>Oops, your internet is not working</h2>;
  }
  return restaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="flex ">
      <div>
        <img className="h-72 p-2" src={RES_URL + resImage}></img>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {restaurant?.map((res) => {
            if (res?.card?.card?.itemCards != undefined)
              return res?.card?.card?.itemCards?.map((menu) => {
                return (
                  <li key={menu?.card?.info?.id}>
                    {menu?.card?.info?.name}
                    <button
                      className="m-2 p-1 bg-green-100"
                      onClick={() => {
                        addFoodItem(menu?.card?.info);
                      }}
                    >
                      Add
                    </button>
                  </li>
                );
              });
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
