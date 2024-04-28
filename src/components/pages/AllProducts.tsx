import { useEffect, useState } from "react";
import { useAppSelector , useAppDispatch } from "../../core/hooks";
import { addProducts } from "../../core/Slices/productSlice";
import ProductCard from "./ProductCard";
import { Product } from "./Product";

const AllProducts = () => {
  const dispatch = useAppDispatch();
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const allProducts = useAppSelector(
    (state) => state.productReducer.allProducts
  );

  useEffect(() => {
    const fetchProducts = () => {
      fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .then(({ products }) => {
          dispatch(addProducts(products));
        });
    };
    fetchProducts();
  }, [allProducts, dispatch]);

  useEffect(() => {
    setCurrentProducts(allProducts);
  }, [allProducts]);

  return (
    <div className="container mx-auto min-h-[83vh] p-4">
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-3 space-y-4">
          <div className="grid grid-cols-4 gap-4">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
