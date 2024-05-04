import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategories = ({ data, isVisible, setshowItems }) => {
   const { title = "", itemCards = {} } = data;
   // console.log(props.data, itemCards.length);
   // console.log(itemCards);

   const handelClick = () => {
      setshowItems();
   };

   return (
      <div className="w-6/12 bg-gray-100 my-4 mx-auto shadow-lg p-4">
         <div
            className="flex justify-between cursor-pointer"
            onClick={handelClick}
         >
            <h2 className="font-bold  text-center">
               {title} ({itemCards.length})
            </h2>
         </div>

         {isVisible && <ItemList data={itemCards} />}
      </div>
   );
};
export default RestaurantCategories;
