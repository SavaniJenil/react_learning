import { Link } from 'react-router-dom';
import DelishioLogo from '../assets/Delishio_logo.png';

const Logo = () => {
  return (
    <Link
      to='/'
      data-testid='logo'
      className='text-xl md:text-2xl font-semibold flex items-center'
    >
      <img src={DelishioLogo} alt="Logo" className='w-14 rounded-md mr-1' />
      <span className='hidden md:block logo'>Delishio</span>
    </Link>
  );
};

export default Logo;
