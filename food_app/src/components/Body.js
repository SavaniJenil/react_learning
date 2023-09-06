import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//not use keys (not acceptable) <<<<< index as key <<<<< unique id (best practice)
const Body = () => {
  //#ReactHooks:- State Variable - Gives Super Power to a variable

  //useState() => This can create superpowerful state variable in react
  //Whenever state variable update, react triggers a reconciliation cycle(re-render the components).
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurents);
    setListOfRestaurent(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Normal JS Variable
  // let listOfRestaurent = resList;
  //conditional rendering
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn"
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

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container" >
        {filteredRestaurant.map((restaurent) => (
         <Link key={restaurent.info.id} to={"/restaurants/"+restaurent.info.id}> <RestaurentCard resData={restaurent} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
