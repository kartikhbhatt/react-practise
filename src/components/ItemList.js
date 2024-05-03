import React from "react";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ data }) => {
   // console.log(data[0]?.card?.info?.name);

   // console.log(data[2].card.info);
   return (
      <div>
         {data.map((item) => (
            <div
               key={item?.card?.info?.id}
               className=" m-4 p-2 rounded-lg border-b-2 text-left flex justify-between align-baseline items-center"
            >
               <div className="flex flex-col w-9/12 ">
                  <h1 className="">
                     {item?.card?.info?.name} Rs.
                     {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                  </h1>
                  <p className="f py-2 font-light text-xs">
                     {item?.card?.info?.description}
                  </p>
               </div>
               <div className=" w-3/12 ">
                  <div className="absolute">
                     <button className="p-2 mx-auto rounded-md text-white bg-black f">
                        Add +
                     </button>
                  </div>
                  <img
                     className=""
                     src={CDN_URL + item?.card?.info?.imageId}
                     alt=""
                  />
               </div>
            </div>
         ))}
      </div>
   );
};

export default ItemList;
