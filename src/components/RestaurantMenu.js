import { useState, useEffect } from "react";
import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
   // const [resInfo, setResInfo] = useState(null);
   const { resId } = useParams();

   // console.log(params);
   const resInfo = useRestrauntMenu(resId);

   if (resInfo === null) return <Shimmer />;

   const {
      name = "",
      cuisines = [""],
      costForTwoMessage = "",
   } = (!!resInfo?.cards && resInfo?.cards[2]?.card?.card?.info) || {};

   const { itemCards = {} } =
      (!!resInfo?.cards &&
         resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            .card) ||
      {};

   return (
      <div className="menu">
         <h1>{name}</h1>
         <p>
            {cuisines.join(", ")} - {costForTwoMessage}
         </p>
         <h2>Menu</h2>
         <ul>
            {!!itemCards?.length &&
               itemCards.map((item) => {
                  return (
                     <li key={item.card.info.id}>
                        {item.card.info.name} -{" "}
                        {item.card.info.price / 100 ||
                           item.card.info.defaultPrice / 100}
                     </li>
                  );
               })}
         </ul>
      </div>
   );
};

export default RestaurantMenu;
