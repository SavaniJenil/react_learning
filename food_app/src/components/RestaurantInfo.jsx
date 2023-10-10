import { StarIcon } from '@heroicons/react/24/solid';

const RestaurantInfo = ({ info }) => {
  const { name, sla, areaName, totalRatingsString, avgRatingString, cuisines, costForTwoMessage } =
    info;

  return (
    <>
    <div className='flex justify-between items-center pb-4 border-b border-dashed'>
      <div>
        <h2 className='text-xl font-bold my-2'>{name}</h2>
        <p className='text-xs text-gray-500'>
          {cuisines?.map((c, i) => (
            <span key={i}>
              {c}
              {i === cuisines.length - 1 ? '' : ', '}
            </span>
          ))}
        </p>
        <p className='text-xs text-gray-500'>
          {areaName}, {sla.lastMileTravelString}
        </p>
      </div>
      <div className='border rounded-md font-bold  p-2 text-sm'>
        <p className='flex-center gap-1 mb-2 text-green-700 '>
          <StarIcon className='w-4 h-4' /> {avgRatingString}
        </p>
        <p className='pt-2 border-t text-xs font-normal text-gray-500'>
          {totalRatingsString}
        </p>
      </div>
    </div>
    <div>
    <div className="delivery-details w-1/3 py-6 text-base font-bold flex flex-row justify-between text-gray-500">
          <span>{costForTwoMessage}</span>
          <span className="flex flex-row">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" alt="DISTANCE_FEE_NON_FOOD_LM" className="mr-2 h-5 w-5" />
            {sla.lastMileTravelString}
            </span>
        </div>
    </div>
    </>
  );
};

export default RestaurantInfo;
