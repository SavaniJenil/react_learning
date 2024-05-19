import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import { GET_RESTAURANTS_URL } from '../utils/constants';
import BannerList from './BannerList';
import FoodList from './FoodList';
import RestaurantList from './RestaurantList';

const Body = () => {
  const { banners, foods, restaurants, isLoading } =
    useRestaurants(GET_RESTAURANTS_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const serachRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();

    setFilteredRestaurants(
      restaurants.filter((rest) =>
        rest.info.name
          .toLowerCase()
          .includes(serachRef.current.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [isLoading]);

  return (
    <div className='bg-white relative py-8'>
      {/* banners */}
      <BannerList banners={banners} isLoading={isLoading} />

      {/* food list */}
      <FoodList foods={foods} isLoading={isLoading} />

      {/* search bar */}
      <div className='container-max mx-auto flex flex-row items-center flex-wrap md:flex-none justify-around gap-1 md:gap-3'>

      <form
        onSubmit={handleSearch}
        className='flex flex-row items-center w-[38%] gap-1 md:gap-3'
      >
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for restaurent'
          className='search-box text-[8px] md:text-xs lg:text-base leading-5 pl-2 md:pl-5 w-full h-6 md:h-10 outline-0 text-left overflow-hidden text-ellipsis align-middle font-450 rounded-lg border border-solid border-gray-200 pr-2'
          ref={serachRef}
        />
        <button
          type='submit'
          className='filter-btn w-auto cursor-pointer my-1 md:my-2 md:mx-1 py-1 md:py-2 px-2 md:px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md text-[8px] md:text-xs lg:text-base'
        >
          <span className='filter-btn md:block text-[8px] md:text-xs lg:text-base'>Search</span>
        </button>
      </form>
      <div className='filters flex flex-row items-center gap-1 md:gap-0'>
      <button
            className="filter-btn w-auto cursor-pointer my-1 md:my-2 md:mx-1 py-1 md:py-2 px-2 md:px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md text-[8px] md:text-xs lg:text-base"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.avgRating >= 4.0
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Ratings 4.0+
          </button>
          <button
            className="filter-btn w-auto cursor-pointer my-1 md:my-2 md:mx-1 py-1 md:py-2 px-2 md:px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md text-[8px] md:text-xs lg:text-base"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.sla.deliveryTime <= 25
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Fast Delivery
          </button>
          <button
            className="filter-btn w-auto cursor-pointer my-1 md:my-2 md:mx-1 py-1 md:py-2 px-2 md:px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md text-[8px] md:text-xs lg:text-base"
            onClick={() => {
              const filteredList = restaurants.filter((res) => {
                const textArr = res.info.costForTwo.match(/₹(\d+)/);
                const num = parseInt(textArr[1], 10);
                return num <= 250;
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            Less than Rs.250
          </button>
          <button
            className="filter-btn w-auto cursor-pointer my-1 md:my-2 md:mx-1 py-1 md:py-2 px-2 md:px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md hover:bg-green-600 hover:text-white text-[8px] md:text-xs lg:text-base"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.veg 
              );
              setFilteredRestaurants(filteredList);
            }}
          >
           Pure Veg
          </button>
          <button
            className="filter-btn w-auto cursor-pointer my-1 md:my-2 md:mx-1 py-1 md:py-2 px-2 md:px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md hover:bg-red-600 hover:text-white text-[8px] md:text-xs lg:text-base"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => !res.info.veg 
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Non-Veg
          </button>
      </div>
      </div>
    
      {/* restaurant list */}
      <RestaurantList isLoading={isLoading} restaurants={filteredRestaurants} />
    </div>
  );
};
export default Body;
