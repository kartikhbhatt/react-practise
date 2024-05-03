import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategories from "./RestaurantCategories";

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

   const categories =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
         (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
   // const { title } = categories;
   // console.log(categories);
   return (
      <div className="menu text-center">
         <h1 className="font-bold my-10 text-2xl">{name}</h1>
         <p>
            {cuisines.join(", ")} - {costForTwoMessage}
         </p>
         {categories.map((category) => (
            <RestaurantCategories
               key={category?.card?.card?.title}
               data={category?.card?.card}
            />
         ))}
      </div>
   );
};

export default RestaurantMenu;
