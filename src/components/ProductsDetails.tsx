import { useGetSingleProductsQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: response, error, isLoading } = useGetSingleProductsQuery(id);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;
  const product = response?.data;

  if (!product) return <div>No product found</div>;

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
          <h1 className="text-3xl font-bold ">{product.name}</h1>
          <p className="mt-4 text-gray-400">{product.description}</p>
          <div className="mt-6 flex items-center">
            <span className="text-xl font-bold text-gray-500">
              ${product.price}
            </span>
          </div>
          <div className="mt-6">
            <Button variant="secondary" className="  px-4 py-2 rounded">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
