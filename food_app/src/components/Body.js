import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

//not use keys (not acceptable) <<<<< index as key <<<<< unique id (best practice)
const Body = () => {
  //#ReactHooks:- State Variable - Gives Super Power to a variable
  //userEffect() =>
  //useState() => This can create superpowerful state variable in react
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);

  //Normal JS Variable
  // let listOfRestaurent = resList;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfRestaurent(filteredList);
            console.log(listOfRestaurent);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
