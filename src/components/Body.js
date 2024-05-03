import React from "react";
import { useEffect, useState } from "react";
import RestaurantCards, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
   const [listOfRestaurants, setListOfRestraunt] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

   const [searchText, setsearchText] = useState("");
   const RestaurantCardPromoted = withPromotedLabel(RestaurantCards);

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

   const onlineStatus = useOnlineStatus();
   if (onlineStatus === false)
      return (
         <h1>
            Looks like you are offline, Please check your internet connection
         </h1>
      );
   // console.log(listOfRestaurants);
   // console.log(listOfRestaurants);

   return listOfRestaurants.length === 0 ? (
      <Shimmer />
   ) : (
      <div className="body">
         <div className="flex">
            <div className="search m-4 p-4 ">
               <input
                  type="text"
                  className="border border-solid border-black"
                  value={searchText}
                  onChange={(e) => {
                     return setsearchText(e.target.value);
                  }}
               />
               <button
                  className="px-4 py-2 bg-orange-100 rounded-lg"
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
               <button
                  className="px-4 py-2 bg-orange-100 rounded-lg"
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
         </div>
         <div className="res-container flex flex-wrap rounded-">
            {filteredRestaurant.map((restaurant) => {
               return (
                  <Link
                     className="remove-link"
                     to={"/restaurant/" + restaurant?.info?.id}
                     key={restaurant?.info.id}
                  >
                     {restaurant?.info?.promoted ? (
                        <RestaurantCardPromoted {...restaurant?.info} />
                     ) : (
                        <RestaurantCards {...restaurant?.info} />
                     )}
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Body;
