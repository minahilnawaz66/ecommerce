import { FC } from "react";
import { Cart } from "./Cart";
import { useAppDispatch } from "../../core/hooks";
import { addToCart , removeFromCart } from "../../core/Slices/cartSlice";

const CartProducts: FC<Cart> = ({id, thumbnail, title, quantity, category, price}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-7 gap-3 border items-center">
      <img src={thumbnail} alt="thumbnail" className="h-20 col-span-2" />
      <div className="col-span-3">
        <h3 className="leading-4">{title}</h3>
        <div className="flex items-center space-x-1">

          <span>Qty: {quantity}</span>
		      <div
            className="cursor-pointer hover:opacity-80"
            onClick={() => dispatch(removeFromCart(id))}
          >
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.64702 3.72727C6.64702 3.00396 6.91745 2.31026 7.39883 1.7988C7.88021 1.28734 8.53309 1 9.21386 1C9.89463 1 10.5475 1.28734 11.0289 1.7988C11.5103 2.31026 11.7807 3.00396 11.7807 3.72727M6.64702 3.72727H1M6.64702 3.72727H11.7807M11.7807 3.72727H17M16.0588 3.72727L14.6063 16.1025C14.5196 16.9002 14.16 17.6362 13.5958 18.1704C13.0317 18.7047 12.3023 18.9999 11.5466 19H6.88111C6.12539 18.9999 5.39605 18.7047 4.83188 18.1704C4.26772 17.6362 3.90809 16.9002 3.82143 16.1025L1.94118 3.72727M7.16039 8.09091V14.6364M11.2673 14.6364V8.09091" stroke="#2D2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
		    </div>
          <div
            className="cursor-pointer hover:opacity-80"
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  title,
                  quantity,
                  thumbnail,
                  category,
                  price,
                })
              )
            }
          />
        </div>
      </div>
      <div className="font-bold col-span-2">
			<span>${price}</span>
        <div
          className="text-red-500 cursor-pointer text-1xl hover:text-red-600"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
