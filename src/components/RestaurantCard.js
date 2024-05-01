import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
   // const { resData } = props;
   const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
   } = props;
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

export default RestaurantCards;
