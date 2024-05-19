import 'keen-slider/keen-slider.min.css';
import FoodItem from './FoodItem';
import { useKeenSlider } from 'keen-slider/react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const SearchFoodList = ({ foods }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    renderMode: 'performance',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    initial: 0,

    breakpoints: {
      '(max-width: 480px)': {
        slides: { perView: 6, spacing: 10 },
      },
      '(min-width: 480px)': {
        slides: { perView: 8, spacing: 10 },
      },
      '(min-width: 768px)': {
        slides: { perView: 10, spacing: 10 },
      },
    },
  });

  if (!foods) {
    return null;
  }

  return (
    <div className='container-max mt-2'>
      <div className='flex items-center justify-between'>
        {instanceRef.current && (
          <div className='flex gap-2 items-end ml-auto'>
            <button
              disabled={currentSlide === 0}
              onClick={() => instanceRef.current?.prev()}
              className='bg-gray-100 p-2 rounded-full disabled:text-gray-300'
            >
              <ArrowLongLeftIcon className='w-4 h-4' />{' '}
            </button>
            <button
              disabled={
                currentSlide ===
                instanceRef?.current?.track?.details?.slides?.length - 1
              }
              onClick={() => instanceRef.current?.next()}
              className='bg-gray-100 p-2 rounded-full disabled:text-gray-300'
            >
              <ArrowLongRightIcon className='w-4 h-4' />{' '}
            </button>
          </div>
        )}
      </div>

      <div ref={sliderRef} className='keen-slider'>
        {foods?.card?.card?.gridElements?.infoWithStyle?.info?.map((food) => (
          <FoodItem food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};
export default SearchFoodList;
