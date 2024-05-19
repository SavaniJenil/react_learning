import axios from 'axios';
import { useEffect, useState } from 'react';
import { GET_RESTAURANTS_URL } from '../utils/constants';

const useRestaurantsMenu = (restId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96432&lng=77.71378&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);
        const data = await res.json();

        // const { data } = await axios.get(GET_RESTAURANTS_URL + `/${restId}`);
        setRestaurant(data?.data);
      } catch (err) {
        console.log(err.response);
        setError(err.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { restaurant, isLoading, error };
};

export default useRestaurantsMenu;
