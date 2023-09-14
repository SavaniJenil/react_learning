import RestaurentCard, { withOfferLabel } from "./RestaurentCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

//not use keys (not acceptable) <<<<< index as key <<<<< unique id (best practice)
const Body = () => {
  //#ReactHooks:- State Variable - Gives Super Power to a variable

  //useState() => This can create superpowerful state variable in react
  //Whenever state variable update, react triggers a reconciliation cycle(re-render the components).
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardOffer = withOfferLabel(RestaurentCard);

  //userEffect() => after render a components if we want to do anything so we can do with useEffect();
  //After each and every render cycle useEffect will call.
  //If no dependenciy array => useEffect is called on every render.
  //If dependency array is [] => useEffect is called on initial render(just once).
  //If we put value(btnXYZ) in dependency [] => it will called everytime value(btnXYZ) is updated.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9629354&lng=77.7122996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurent(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1>Looks like you're Offline Please check your internet Connection</h1>
    );

  //Normal JS Variable
  // let listOfRestaurent = resList;
  //conditional rendering
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {console.log(listOfRestaurent)}
      <div className="filter flex flex-row justify-evenly w-[86%] m-auto">
        <div className="search flex flex-row justify-evenly w-2/5 items-center">
          <input
            type="text"
            className="search-box text-base leading-5 w-full h-10 outline-0 text-center overflow-hidden text-ellipsis align-middle font-450 rounded-2xl border border-solid border-gray-200"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn w-auto cursor-pointer m-2 py-2 px-4 border rgb(226, 226, 231) rounded-3xl shadow hover:shadow-lg border-slate-400"
            onClick={() => {
              const filteredResList = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        
        <div className="">
          <button
            className="filter-btn w-auto cursor-pointer m-2 py-2 px-4 border border-slate-400 rgb(226, 226, 231) rounded-3xl shadow hover:shadow-lg"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4.0
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Ratings 4.0+
          </button>
          <button
            className="filter-btn w-auto cursor-pointer m-2 py-2 px-4 border border-slate-400 rgb(226, 226, 231) rounded-3xl shadow hover:shadow-lg"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.info.sla.deliveryTime <= 25
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Fast Delivery
          </button>
          <button
            className="filter-btn w-auto cursor-pointer m-3 py-2 px-4 border border-slate-400 rgb(226, 226, 231) rounded-3xl shadow hover:shadow-lg"
            onClick={() => {
              const filteredList = listOfRestaurent.filter((res) => {
                const textArr = res.info.costForTwo.match(/₹(\d+)/);
                const num = parseInt(textArr[1], 10);
                return num <= 250;
              });
              setFilteredRestaurant(filteredList);
            }}
          >
            Less than Rs.250
          </button>
          <button
            className="filter-btn w-auto cursor-pointer m-3 py-2 px-4 border border-slate-400 rgb(226, 226, 231) rounded-3xl shadow hover:shadow-lg hover:bg-green-600 hover:text-white"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.info.veg 
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Veg
          </button>
          <button
            className="filter-btn w-auto cursor-pointer m-3 py-2 px-4 border border-slate-400 rgb(226, 226, 231) rounded-3xl shadow hover:shadow-lg hover:bg-red-600 hover:text-white"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => !res.info.veg 
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Non-Veg
          </button>
        </div>
      </div>

      <div className="user-box res-container flex flex-wrap w-[86%] mx-[7%]">
      <input
            type="text"
            className="search-box text-base leading-5 w-2/12 h-10 m-auto outline-0 text-center overflow-hidden text-ellipsis align-middle font-450 rounded-2xl border border-solid border-gray-500"
            placeholder="Username to change"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
      </div>
      
      <div className="res-container flex flex-wrap w-[86%] mx-[7%]">
        {filteredRestaurant.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurants/" + restaurent.info.id}
          >
            {
              restaurent.info.aggregatedDiscountInfoV3 ? (<RestaurantCardOffer resData={restaurent} />) : (<RestaurentCard resData={restaurent} />)
            }   
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
