import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategories = (props) => {
   const { title = "", itemCards = {} } = props?.data;
   // console.log(props.data, itemCards.length);
   // console.log(itemCards);
   const [showItems, setshowItems] = useState(false);
   const handelClick = () => {
      setshowItems(!showItems);
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

         {showItems && <ItemList data={itemCards} />}
      </div>
   );
};
export default RestaurantCategories;
