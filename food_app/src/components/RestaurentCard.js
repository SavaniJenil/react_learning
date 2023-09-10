import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "rgb(255, 255, 255)",
  }
  
const RestaurentCard = (props) => {     //const RestaurentCard = (props) => {      OR     const RestaurentCard = ({ resName, cuisine }) => {           Destructuring on the fly as <h4>{restName}</h4>
    const {resData} = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    const { slaString } = sla;
    return (
      <div className="res-card p-[5px] w-[237px] m-3 transform scale-100 transition-transform duration-300 ease-in-out hover:rounded-10 hover:scale-95 hover:transition-shadow hover:shadow-10 hover:shadow-gray-300" style={styleCard}>
        <img className="res-logo w-full h-32 object-cover rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h4 className="text-lg font-bold truncate mt-4 h-6">{name}</h4>         
        <div className="res-card-details flex flex-row justify-around items-center  text-slate-500">
        <h5 className="text-base mt-1 w-1/2">{avgRating}<span className="text-yellow-300 text-lg">★</span></h5>
        <h5 className="text-base mt-1 w-1/2">{slaString}</h5>
        </div>
        <h5 className="text-base mt-1 truncate h-6 w-full text-slate-500">{cuisines.join(', ')}</h5>
        <h5 className="text-base mt-1 font-medium text-slate-500">{costForTwo} </h5>
      </div>
    );
  };

  export default RestaurentCard;