import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { emptyCart, setCartState } from "../../core/Slices/cartSlice";
import CartProducts from "./CartProducts";
import toast from "react-hot-toast";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.cartReducer.cartOpen);
  const items = useAppSelector((state) => state.cartReducer.cartItems);
  const [checkout, setCheckout] = useState(false);

  const handleOrder = () => {
    dispatch(setCartState(false));
    dispatch(emptyCart());
    setCheckout(false);
    toast.success("your order has been confirmed :)", { duration: 2000 });
  };

  if (isOpen) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
        {checkout ? (
          <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
            <h1 className="font-bold text-xl mb-1">Checkout</h1>
			<h2 className="my-3">Click Confirm button to process your order</h2>
            <div className="flex items-center space-x-2">
              <span
                className="w-1/2 border border-purple-500 text-purple-500 rounded cursor-pointer text-center py-1"
                onClick={() => setCheckout(false)}
              >
                Cancel
              </span>
              <span
                className="w-1/2 border bg-purple-500 rounded text-white cursor-pointer text-center py-1"
                onClick={handleOrder}
              >
                Confirm
              </span>
            </div>
          </div>
        ) : (
          <div
            className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-2xl">Your Cart</h3>
              <div
                className="text-[24px] cursor-pointer hover:opacity-70"
                onClick={() => dispatch(setCartState(false))}
              >
				<svg height="16" width="16" role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="black" stroke-width="1.5" fill="none" fill-rule="evenodd"></path></svg>
			</div>
            </div>
            <div className="mt-6 space-y-2">
              {items?.length > 0 ? (
                items.map((item) => <CartProducts key={item.id} {...item} />)
              ) : (
                <div className="flex flex-col justify-center items-center p-4">
                  <p className="text-center text-xl my-2">Your cart is empty</p>
                </div>
              )}
            </div>
            {items?.length > 0 && (
              <>
                <div className="flex items-center justify-between p-2">
                  <h2 className="font-bold text-2xl">Total</h2>
                  <h2 className="font-bold text-2xl">$88.90</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setCheckout(true)}
                  className="w-full text-center text-white bg-purple-500 py-2 my-4 rounded font-bold text-lg"
                >
                  CHECKOUT
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
};

export default CartPage;
