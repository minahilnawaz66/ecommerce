import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { emptyCart, setCartState } from "../../core/Slices/cartSlice";
import CartProducts from "./CartProducts";
import toast from "react-hot-toast";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cartReducer.cartItems);
  const [checkout, setCheckout] = useState(false);

  const handleOrder = () => {
    dispatch(setCartState(false));
    dispatch(emptyCart());
    setCheckout(false);
    toast.success("your order has been confirmed :)", { duration: 2000 });
  };

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      if (item.quantity)
        total +=
          (item.price  * item.quantity);
    });
    return total.toFixed(2);
  };

    return (
      <div>
        {checkout ? (
          <div className="w-96 mx-auto">
            <h1 className="font-bold text-xl mb-1">Checkout</h1>
			      <h2 className="my-3">Click Confirm button to process your order</h2>
            <form
              className="bg-white rounded p-5 shadow my-4"
            >
              <div className="form-group">
                <label className="pr-3 block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Enter Username</label>
                <input
                  className="input bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label className="pr-3 block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="address">Enter Address</label>
                <input
                  className="input bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="address"
                  id="address"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter address"
                />
              </div>
              <div className="form-group">
                <label className="pr-3 block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="payment">Payment Method</label>
                <input
                  className="cursor-not-allowed input bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="payment"
                  id="payment"
                  type="text"
                  autoComplete="off"
                  value="Cash on Delivery"
                  readOnly
                />
              </div>
            </form>

            <div className="flex items-center space-x-2">
              <span
                className="w-1/2 border border-purple-500 text-purple-500 rounded cursor-pointer text-center py-2"
                onClick={() => setCheckout(false)}
              >
                Cancel
              </span>
              <span
                className="w-1/2 border bg-purple-500 rounded text-white cursor-pointer text-center py-2"
                onClick={handleOrder}
              >
                Confirm
              </span>
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-6 mx-auto space-y-2 w-96">
              {items?.length > 0 ? (
                items.map((item) => <CartProducts key={item.id} {...item} />)
              ) : (
                <div className="flex flex-col justify-center items-center p-4">
                  <p className="text-center text-xl my-2 text-purple-500">Your cart is empty</p>
                </div>
              )}
            </div>
            {items?.length > 0 && (
              <>
                <div className="flex items-center justify-between p-2 w-96 mx-auto">
                  <h2 className="font-bold text-2xl">Total</h2>
                  <h2 className="font-bold text-2xl">${calculateTotal()}</h2>
                </div>
                <div className="mx-auto w-96">
                  <button
                    type="button"
                    onClick={() => setCheckout(true)}
                    className="w-full text-center text-white bg-purple-500 py-2 my-4 rounded font-bold text-lg"
                  >
                    CHECKOUT
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

export default Checkout;
