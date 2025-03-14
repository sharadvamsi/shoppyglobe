import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../utils/redux/cartSlice";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch hook

  //function to handle form submission

  const handleOrder = ()=>{
    setOrderPlaced(!orderPlaced);
    dispatch(emptyCart());
  }
  

  //conditional rendering thank you message
  if (orderPlaced) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-xl md:text-2xl font-bold my-5">
          Thank you for your order!
        </p>
        <h1 className="text-3xl font-bold my-5">Order Placed !!</h1>

        <Link to="/products">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded shadow-xl active:scale-95">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-screen overflow-hidden flex-col">
      <h1 className="text-3xl font-bold my-5 order-first">Checkout</h1>
      <div className="flex justify-center flex-col md:flex-row w-full ">
        <div className="flex justify-center items-center w-full md:w-[60%]">
          <div className="cartitems flex flex-col items-center px-5 my-10 bg-red-100 rounded-lg">
            <p className="text-3xl text-gray-700 uppercase my-3 font-bold">
              Order Summary
            </p>
            <p className="text-xl my-3">Items: {cart.products.length}</p>
            <div>
              {cart.products.map((product) => (
                <CheckoutItem key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-between w-full my-10">
              <div className="w-1/2">
                <h6 className="text-xl text-black font-semibold">
                  Cart Total:
                </h6>
                <h6 className="text-xl text-black font-semibold">Discount :</h6>
                <h6 className="text-xl text-black font-semibold">
                  Shipping Charge :{" "}
                </h6>
                <h6 className="text-xl text-black font-semibold">Total : </h6>
                <button
                    className="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-yellow-600  hover:to-red-600 transition ease-in-out duration-300"
                    type="submit" onClick={handleOrder}
                  >
                   Place Order
                  </button>
              </div>
              <div className="w-1/2">
                <p className="text-xl font-medium font-mono">
                  Rs. {cart.total.toFixed(2)}
                </p>
                <p className="text-xl font-medium font-mono">0</p>
                <p className="text-xl font-medium font-mono">
                  <span className="">Free</span>
                </p>
                <p className="text-xl font-medium font-mono">
                  Rs. {cart.total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
