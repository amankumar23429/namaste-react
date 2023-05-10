export function filterData(searchText, listOfRestaurants) {
  const filterData = listOfRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}
