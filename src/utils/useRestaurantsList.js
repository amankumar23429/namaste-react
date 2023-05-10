import { useEffect, useState } from "react";
import { ALL_RES_URL } from "./constants";

const useRestaurantsList = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(ALL_RES_URL);
    const json = await data.json();
    setListofRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return [listOfRestaurants, filterListOfRestaurants];
};
export default useRestaurantsList;
