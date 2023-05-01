import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, listOfRestaurants) {
  const filterData = listOfRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

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
            console.log(e.target.value);
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
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
