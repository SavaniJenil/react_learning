import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "rgb(255, 255, 255)",
  }
  
const RestaurentCard = (props) => {     //const RestaurentCard = (props) => {      OR     const RestaurentCard = ({ resName, cuisine }) => {           Destructuring on the fly as <h4>{restName}</h4>
    const {resData} = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    const { slaString } = sla;
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h4>{name}</h4>         
        <h5>{cuisines.join(', ')}</h5>
        <h5>{costForTwo} </h5>
        <div className="res-card-details">
        <h5>{avgRating}⭐</h5>
        <h5>{slaString}</h5>
        </div>
      </div>
    );
  };

  export default RestaurentCard;