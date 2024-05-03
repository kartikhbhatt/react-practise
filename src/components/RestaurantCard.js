import { CDN_URL } from "../utils/constants";
import React from "react";
import PropTypes from "prop-types";

const RestaurantCards = (props) => {
   // const { resData } = props;
   const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } = props;
   return (
      <div className="res-card m-4 p-4 h-[500] w-[300] bg-gray-100 hover:shadow-lg rounded-lg hover:bg-gray-200">
         <img
            className="res-logo rounded-lg"
            src={CDN_URL + cloudinaryImageId}
            alt="logo"
            srcSet=""
         />
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}</h4>
         {/* <h4>{deliveryTime}</h4> */}
         <h4>Delivery time: {props.sla.deliveryTime} minutes</h4>
      </div>
   );
};

export const withPromotedLabel = (RestaurantCards) => {
   return (props) => {
      return (
         <div>
            <label>Promoted</label>
            <RestaurantCard {...props} />
         </div>
      );
   };
};

RestaurantCards.propTypes = {
   cloudinaryImageId: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   avgRating: PropTypes.number.isRequired,
   cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
   deliveryTime: PropTypes.number.isRequired,
};

export default RestaurantCards;
