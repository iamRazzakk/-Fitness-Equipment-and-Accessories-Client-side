import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GoPlusCircle } from "react-icons/go";
import { CiCircleMinus } from "react-icons/ci";
import {
  decrementQuantity,
  incrementQuantity,
} from "@/redux/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const selectedItems = useSelector(
    (state: RootState) => state.cart.selectedItems
  );
  console.log(products);
  const handleIncrement = (productId: string) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId: string) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div className="p-4   rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Happy Shopping ❤️
      </h2>
      <div className="lg:flex items-start gap-4">
        <div className="flex-1  p-4">
          <h3 className="text-xl font-semibold mb-4">Your Cart Items:</h3>
          {products.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {products.map((product) => (
                <div key={product._id} className="flex items-center mb-4  p-2">
                  <img
                    src={product.images}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">{product.name}</h4>
                    <p>Price: ${product.price}</p>
                    <div className="flex items-center gap-2">
                      <GoPlusCircle
                        onClick={() => handleIncrement(product._id)}
                        className="text-3xl cursor-pointer hover:bg-white hover:text-black rounded-full"
                      />
                      <span>{product.quantity}</span>
                      <CiCircleMinus
                        onClick={() => handleDecrement(product._id)}
                        className="text-3xl cursor-pointer hover:bg-white hover:text-black rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className=" flex-1 p-4">
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Summary:</h3>
            <p className="text-lg">Total Items: {selectedItems}</p>
            <p className="text-xl font-semibold">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
