import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
   const [resInfo, setResInfo] = useState(null);

   useEffect(() => {
      fetchMenu();
   }, []);

   const fetchMenu = async () => {
      const data = await fetch(
         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=393840&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
      );
      const json = await data.json();

      console.log(json);
      
      setResInfo(json.data);
   };

   if (resInfo === null) return <Shimmer />;

   const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;


   return (
      <div className="menu">
         <h1>{name}</h1>
         <p>
            {cuisines.join(", ")} - {costForTwoMessage}
         </p>
         <h2>Menu</h2>
         
      </div>
   );
};

export default RestaurantMenu;