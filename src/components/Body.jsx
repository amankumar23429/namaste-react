import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantsList from "../utils/useRestaurantsList";
import { ALL_RES_URL } from "../utils/constants";

const Body = () => {
  let [searchText, setSearchText] = useState("");
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

  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-6">
        <input
          className="bg-slate-300"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterData(e.target.value, listOfRestaurants);
            setFilterListOfRestaurants(data);
          }}
        ></input>
        <button
          className="bg-cyan-500 mx-2 px-2 py-1 text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchText, listOfRestaurants);
            setFilterListOfRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterListOfRestaurants?.length == 0 ? (
          <h1>No restaurant found</h1>
        ) : (
          filterListOfRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
