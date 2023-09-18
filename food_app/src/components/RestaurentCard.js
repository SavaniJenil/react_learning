import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "rgb(255, 255, 255)",
};

const RestaurentCard = (props) => {
  //const RestaurentCard = (props) => {      OR     const RestaurentCard = ({ resName, cuisine }) => {           Destructuring on the fly as <h4>{restName}</h4>
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3 = {},
    veg,
  } = resData?.info;
  const { slaString } = sla;
  const { header, subHeader } = aggregatedDiscountInfoV3;
  return (
    <div
      data-testid="resCard"
      className="res-card p-[5px] w-[237px] m-3 transform scale-100 transition-transform duration-300 ease-in-out hover:rounded-10 hover:scale-95 hover:transition-shadow hover:shadow-10 hover:shadow-gray-300"
      style={styleCard}
    >
      <img
        className="res-logo w-full h-36 object-cover rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="text-lg font-bold truncate mt-4 h-6">{name}</h4>
      <div className="res-card-details flex flex-row justify-around items-center  text-slate-500">
        <h5 className="text-base mt-1 w-1/2">
          {avgRating}
          <span className="text-yellow-400 text-lg">★</span>
        </h5>
        <h5 className="text-base mt-1 w-1/2">{slaString}</h5>
      </div>
      <h5 className="text-base mt-1 truncate h-6 w-full text-slate-500">
        {cuisines.join(", ")}
      </h5>
      <div className="flex flex-row justify-between  items-center">
        <h5 className="text-base mt-1 font-medium text-slate-500">
          {costForTwo}{" "}
        </h5>
        {veg ? (
          <img
            className="h-7 w-7"
            src="https://freesvg.org/img/1531813273.png"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

//Higher Order Component

//Input - RestaurantCard ==> RestaurantCardOffer

export default RestaurentCard;

export const withOfferLabel = (RestaurentCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 = {} } = resData?.info;
    const { header, subHeader } = aggregatedDiscountInfoV3;
    return (
      <div className="group relative">
        <label className="text-white bg-gradient-to-b from-transparent via-black to-black absolute truncate w-[227px] h-9 z-[2] text-xl font-bold m-[17px] pt-1 text-center mt-[113px] rounded-br-lg rounded-bl-lg transition-opacity duration-100 hover:scale-95 group-hover:scale-95">
          {header} {subHeader}
        </label>
        <RestaurentCard
          {...props}
          className="hover:scale-95 group-hover:scale-95"
        />
      </div>
    );
  };
};
