import { FC } from "react";
import { Product } from "./Product";
import { addToCart } from "../../core/Slices/cartSlice";
import { useAppDispatch } from "../../core/hooks";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

const ProductCard: FC<Product> = ({
  id,
  thumbnail,
  title,
  category,
  price,
}) => {
  const dispatch = useAppDispatch();
  const { requireAuth } = useAuth();

  const addCart = () => {
    requireAuth(() => {
      dispatch(
        addToCart({
          id,
          title,
          category,
          thumbnail,
          price,
        })
      );
      toast.success("product added to cart successfully", {
        duration: 2000,
      });
    });
  };

  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
          <img src={thumbnail} alt={title} className="inline-block h-60" />
      </div>
      <div className="px-8 pt-4 bg-gray-100">
        <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        <div className="font-semibold">
          {title}
        </div>
      </div>
      <div className="bg-gray-100 flex items-center justify-between px-8 pb-4">
      ${price}
        <button
          type="button"
          className="flex items-center space-x-2 text-white py-2 px-4 rounded bg-purple-500"
          onClick={addCart}
        >
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
