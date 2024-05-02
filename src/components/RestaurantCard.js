import { CDN_URL } from "../utils/constants";
import React from "react";
import PropTypes from "prop-types";

const RestaurantCards = (props) => {
   // const { resData } = props;
   const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } = props;
   return (
      <div className="res-card">
         <img
            className="res-logo"
            src={CDN_URL + cloudinaryImageId}
            alt="logo"
            srcSet=""
         />
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}</h4>
         <h4>{deliveryTime}</h4>
         {/* <h4>{props.sla.deliveryTime}</h4> */}
      </div>
   );
};

RestaurantCards.propTypes = {
   cloudinaryImageId: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   avgRating: PropTypes.number.isRequired,
   cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
   deliveryTime: PropTypes.number.isRequired,
};

export default RestaurantCards;
