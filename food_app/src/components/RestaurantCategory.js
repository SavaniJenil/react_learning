import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="header text-base font-bold py-5 flex flex-col justify-between bg-gray-100 p-4 mx-auto my-6 shadow-lg rounded-lg">
        <div
          className="flex flex-row justify-between w-full cursor-pointer items-center"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-3xl pt-4">&#129171;</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
