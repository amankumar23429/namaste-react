import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantsList from "../utils/useRestaurantsList";

const Body = () => {
  let [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filterListOfRestaurants] = useRestaurantsList();

  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          className="search-input"
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
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, listOfRestaurants);
            setFilterListOfRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filterListOfRestaurants.length == 0 ? (
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
