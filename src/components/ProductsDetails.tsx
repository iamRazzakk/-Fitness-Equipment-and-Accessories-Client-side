import { useGetSingleProductsQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/redux/hook";
import { cddToCart } from "@/redux/features/cartSlice";
import { toast } from "sonner";
import { IProducts } from "@/types/types";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data: response, error, isLoading } = useGetSingleProductsQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;

  const handleAddToCart = (product: IProducts) => {
    const quantity = 1;
    dispatch(cddToCart({ product, quantity }));
    toast.success("Product Added to Cart Successfully");
  };

  const product = response?.data;

  if (!product) return <div>No product found</div>;

  const isOutOfStock = product.stock <= 0;

  return (
    <div className="p-6 max-w-3xl mx-auto text-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            className="w-full h-96 object-cover rounded"
            src={product.images}
            alt={product.name}
          />
        </div>
        <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-400">{product.description}</p>
          <div className="mt-6 flex items-center">
            <span className="text-xl font-bold text-gray-500">
              ${product.price}
            </span>
          </div>
          <p className="mt-4">
            {isOutOfStock ? (
              <h2 className="bg-red-400 rounded w-24 px-2">Out of Stock</h2>
            ) : (
              <h2 className="bg-green-400 rounded w-24 px-2">In Stock</h2>
            )}
          </p>
          <div className="mt-6">
            <Button
              onClick={() => handleAddToCart(product)}
              variant="secondary"
              className={`px-4 py-2 rounded `}
              disabled={isOutOfStock}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
