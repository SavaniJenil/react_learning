import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("clicked");
    dispatch(clearCart());
  };

  return (
    <div className="w-[60%] m-auto">
      <div className="text-center text-3xl font-bold">Cart</div>
      {cartItems.length !== 0 ? (
        <div >
          <button
            className="clear-btn bg-red-700 text-white w-auto cursor-pointer ms-full py-2 px-4 border border-slate-400 rgb(226, 226, 231) rounded-3xl shadow hover:shadow-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList items={cartItems} />
        </div>
      ) : (
        <div >
          <img
            className="w-9/12 m-auto"
            src="https://adasglobal.com/img/empty-cart.png"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
