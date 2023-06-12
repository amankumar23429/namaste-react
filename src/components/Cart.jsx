import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleOnCLick = () => {
    dispatch(clearItems());
  };
  return (
    <div>
      <h1 className="text-3xl p-2 font-bold">Cart Page</h1>
      <h3 className="m-2 text-xl font-bold"> Items - {cartItems.length}</h3>
      <button
        className="bg-green-100 m-5 p-2 font-bold text-xl"
        onClick={handleOnCLick}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItems id={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
