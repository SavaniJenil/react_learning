import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddress } from '../features/address/addressSlice';

const useRestaurants = (url) => {
  const { address } = useSelector(selectAddress);
  const [banners, setBanners] = useState([]);
  const [foods, setFoods] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRestaurants = async () => {
    setIsLoading(true);
    setError(null);

    try {
      setIsLoading(true);
      // const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.961616&lng=77.718919&page_type=DESKTOP_WEB_LISTING');
      const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96432&lng=77.71378&page_type=DESKTOP_WEB_LISTING');
      // const { data } = await axios.post(url, address);
      const data = await res.json();

      if (data?.data) {
        setBanners(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === 'topical_banner'
          )[0]
        );

        setFoods(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === 'whats_on_your_mind'
          )[0]
        );

        setTopRestaurants(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === 'top_brands_for_you'
          )[0]
        );

        setRestaurants(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === "top_brands_for_you"
          )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          // data?.data?.cards.filter(
          //   (items) => items?.card?.card?.id === 'restaurant_grid_listing'
          // )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    } catch (err) {
      setError(err.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, [address.city]);

  return {
    banners,
    foods,
    topRestaurants,
    restaurants,
    isLoading,
    error,
    triggerGetRestaurants: () => {
      return getRestaurants();
    },
  };
};

export default useRestaurants;
