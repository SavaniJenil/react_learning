import { CDN_URL } from '../utils/constants';

const Banner = ({ banner }) => {
  return (
    <div className='keen-slider__slide cursor-pointer'>
      <img className='block w-full' src={CDN_URL + banner?.imageId} alt='' />
    </div>
  );
};

export default Banner;
