import useRestaurants from '../hooks/useRestaurants';
import { GET_RESTAURANTS_URL } from '../utils/constants';
import SearchFoodList from '../components/SearchFoodList';

const Search = () => {

  const { foods, isLoading } =
  useRestaurants(GET_RESTAURANTS_URL);

  return <div className='container-max min-h-screen mt-8 flex flex-col w-full'>
    <div className="w-[80%] mx-auto">
    <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for restaurent and food'
          className='search-box w-[85%] text-base leading-5 h-10 outline-0 text-start pl-4 overflow-hidden text-ellipsis align-middle font-450 rounded-lg border border-solid border-gray-200 pr-2'
        />
        <button
          type='submit'
          className='w-auto cursor-pointer ml-5 py-2 px-4 border rgb(226, 226, 231) rounded-3xl shadow hover:shadow-md border-slate-400'
        >
          Search
          </button>
    </div>
    <div className="w-[77%] mx-auto mt-10">
      <p className="text-xl font-black text-gray-700 tracking-tight font-proximanova">Popular Cuisines</p>
    </div>
    <div className="w-[87%] mx-auto">
      <SearchFoodList foods={foods} isLoading={isLoading} />
    </div>
  </div>
};

export default Search;
