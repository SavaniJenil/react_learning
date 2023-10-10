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
      <div className='max-w-[77%] w-min-[77%] mx-auto flex flex-row items-center justify-around gap-1 md:gap-3'>

      <form
        onSubmit={handleSearch}
        className='flex flex flex-row items-center w-[38%]'
      >
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for Restaurent'
          className='search-box text-base leading-5 w-full h-10 outline-0 text-center overflow-hidden text-ellipsis align-middle font-450 rounded-2xl border border-solid border-gray-200 pr-2'
          ref={serachRef}
        />
        <button
          type='submit'
          className='w-auto cursor-pointer m-2 py-2 px-4 border rgb(226, 226, 231) rounded-3xl shadow hover:shadow-md border-slate-400'
        >
          <span className='hidden md:block'>Search</span>
        </button>
      </form>
      <div className='filters flex flex-row items-center'>
      <button
            className="filter-btn w-auto cursor-pointer my-2 mx-1 py-2 px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md"
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
            className="filter-btn w-auto cursor-pointer my-2 mx-1 py-2 px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md"
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
            className="filter-btn w-auto cursor-pointer my-2 mx-1 py-2 px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md"
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
            className="filter-btn w-auto cursor-pointer my-2 mx-1 py-2 px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md hover:bg-green-600 hover:text-white"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.veg 
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Veg
          </button>
          <button
            className="filter-btn w-auto cursor-pointer my-2 mx-1 py-2 px-4 border border-gray-300 rounded-3xl shadow-sm hover:shadow-md hover:bg-red-600 hover:text-white"
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
