import { useSelector } from 'react-redux';
import CartItemList from '../components/CartItemList';
import OrderSummary from '../components/OrderSummary';
import { selectItemsInCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);

  return (
    <div className='container-max py-8 pb-16'>

      {/* cart details */}
      <div className='min-h-[60vh] pb-8 md:flex gap-8'>
        {/* cart items */}
        <CartItemList />
        {/* order summary */}
        {cartItems && cartItems.length !== 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default Cart;
