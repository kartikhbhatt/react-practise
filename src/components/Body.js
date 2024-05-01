import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
   const [listOfRestaurants, setListOfRestraunt] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

   const [searchText, setsearchText] = useState("");

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);

      setListOfRestraunt(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      setFilteredRestaurant(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   };

   // console.log({
   //    filteredRestaurant,
   //    listOfRestaurants
   // })
   return listOfRestaurants.length === 0 ? (
      <Shimmer />
   ) : (
      <div className="body">
         <div className="filter">
            <div className="search">
               <input
                  type="text"
                  className="search-box"
                  value={searchText}
                  onChange={(e) => {
                     return setsearchText(e.target.value);
                  }}
               />
               <button
                  className="search-btn"
                  onClick={() => {
                     console.log(searchText);

                     const filteredList = listOfRestaurants.filter((res) =>
                        res.info.name
                           .toLowerCase()
                           .includes(searchText.toLowerCase())
                     );
                     setFilteredRestaurant(filteredList);
                  }}
               >
                  Search
               </button>
            </div>
            <button
               className="filter-btn"
               onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                     (res) => res.info.avgRating > 4.5
                  );
                  setFilteredRestaurant(filteredList);
               }}
            >
               Top Rated Restraunts
            </button>
         </div>
         <div className="res-container">
            {filteredRestaurant.map((restaurant) => {
               return (
                  <RestaurantCards
                     {...restaurant?.info}
                     key={restaurant?.info.id}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Body;
