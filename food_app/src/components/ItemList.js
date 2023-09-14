const ItemList = ({ items }) => {
  Food_IMG_API =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="text-base font-normal" key={item.card.info.id}>
            <div className="flex flex-row justify-between py-10 border-b-2">
              <div className="item-box flex flex-col pt-5 justify-center w-10/12">
                {item?.card?.info?.isVeg ? (
                  <label className="mb-3">
                    <img
                      className="h-5 w-5"
                      src="https://freesvg.org/img/1531813273.png"
                    />
                  </label>
                ) : (
                  <label className="mb-3">
                    <img
                      className="h-5 w-5"
                      src="https://freesvg.org/img/1531813245.png"
                    />
                  </label>
                )}
                <div className="font-bold">{item.card.info.name}</div>
                <div className="pt-2 text-slate-600">
                  &#8377;
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </div>
                <div className="text-sm text-slate-600">
                  {item.card.info.description}
                </div>
              </div>
              <div className="2/12">
                <img
                  className="rounded-lg h-28 w-28 object-cover"
                  alt="food-logo"
                  src={
                    item?.card?.info?.imageId
                      ? Food_IMG_API + item.card.info.imageId
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHpDd-kxPCROp5aMnTNumI8C9QGoZ5ia7Rg&usqp=CAU"
                  }
                />
                <div className="absolute">
                  <button className="absolute filter-btn w-auto cursor-pointer px-2 border border-slate-400 rgb(226, 226, 231) rounded-md shadow shadow-white hover:shadow-lg ml-7 mt-[-13px] bg-white">
                    Add+
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
