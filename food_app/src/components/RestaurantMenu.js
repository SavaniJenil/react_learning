import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { Food_IMG_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [isVeg, setIsVeg] = useState(true);
  const [showIndex, setShowIndex] = useState(0);

  const toggleVegNonVeg = () => {
    setIsVeg(!isVeg);
  };

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    locality,
    areaName,
    sla,
    veg,
    aggregatedDiscountInfo,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { slaString, lastMileTravelString } = sla;

  const { descriptionList } = aggregatedDiscountInfo;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resInfo.cards);
  return (
    <div className="main text-start filter flex flex-col justify-evenly w-[60%] m-auto txet-cutom font-customFont">
      <div className="heading flex flex-row justify-between border-b border-dashed py-6">
        <div className="res-details flex flex-col">
          <h1 className="text-2xl font-bold my-3">{name}</h1>
          <h3 className="text-base truncate text-slate-500">
            {cuisines.join(", ")}
          </h3>
          <div className="text-base text-slate-500">
            {locality},{areaName}
          </div>
          <h3 className="text-base text-slate-500">{lastMileTravelString}</h3>
        </div>
        <div className="rating h-20 w-20 border border-solid border-gray-300 shadow-md rounded-md text-center p-2 max-w-[100px] float-right my-auto">
          <h3 className="text-base font-bold text-green-700 h-8 border-b border-solid">
            {avgRating} ★
          </h3>
          <h3 className="h-8 text-xs">{totalRatingsString} </h3>
        </div>
      </div>

      <div className="body">
        <div className="delivery-details w-1/4 py-6 text-base font-bold flex flex-row justify-between text-gray-500">
          <span>{costForTwoMessage}</span>
          <span className="flex flex-row">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" alt="DISTANCE_FEE_NON_FOOD_LM" className="mr-2 h-5 w-5" />
            {slaString}</span>
        </div>

        <div className="offer-section flex flex-row">
          {descriptionList.map((des) => {
            <div className="offer-box border-2 rounded-lg w-auto h-auto">
              <div className="">{des?.meta}</div>
            </div>;
          })}
        </div>

        <div className="menu-catagories my-3 pb-8 border-b-8 border-slate-300">
          <div className="button flex items-center">
            {veg ? (
              <label>Pure Veg 🥦</label>
            ) : (
              <div>
                <button
                  className={`px-3 py-2 rounded-l-full ${
                    isVeg
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                  onClick={toggleVegNonVeg}
                >
                  🥦
                </button>
                <button
                  className={`px-3 py-2 rounded-r-full ${
                    !isVeg
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                  onClick={toggleVegNonVeg}
                >
                  🍗
                </button>
              </div>
            )}
          </div>
        </div>

        {/* <div>
          <h2>Menu</h2>
          <ul>
            {categories.map((c) => {
              return (
                <ul className="text-xl font-extrabold py-10" key={c.card.card.title}>
                  {c.card.card.title}{" ("+c.card.card.itemCards.length+")"}
                  {itemCards.map((item) => {
                    return (
                      <li
                        className="text-base font-normal"
                        key={item.card.info.id}
                      >
                        <div className="flex flex-row justify-between py-10">
                          <div className="item-box flex flex-col pt-5 justify-center">
                            <div className="">{item.card.info.name}</div>
                            <div className="pt-2">
                              &#8377;
                              {item.card.info.price / 100 ||
                                item.card.info.defaultPrice / 100}
                            </div>
                          </div>
                          <img className="rounded-lg h-28 w-28 object-cover"
                            alt="food-logo"
                            src={Food_IMG_API + item?.card?.info?.imageId}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </ul>
        </div> */}
        <div>
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex= { () => {setShowIndex(index)} }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
