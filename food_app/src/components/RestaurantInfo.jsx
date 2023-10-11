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
          {areaName}, 
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
    <div className="delivery-details w-1/3 py-6 text-base font-bold flex flex-row justify-between text-gray-600">
          <span className='flex flex-row items-center'>
          <svg className="RestaurantTimeCost_icon__8UdT4 mr-2" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
          {costForTwoMessage}</span>
        </div>
    </div>
    </>
  );
};

export default RestaurantInfo;
