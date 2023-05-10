import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState([]);
  const [resImage, setResImage] = useState("");
  useEffect(() => {
    getResturantMenu();
  }, []);

  async function getResturantMenu() {
    const data = await fetch(MENU_URL + resId);
    const json = await data?.json();
    setResImage(json?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId);
    setRestaurant(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }
  return [restaurant, resImage];
};
export default useRestaurant;
