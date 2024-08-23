import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/redux/api/baseApi";

const CategoriesCard = () => {
  const { data: Products, isLoading } = useGetProductsQuery([]);

  if (isLoading) {
    return <h1 className="text-white">Loading</h1>;
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
      {Products?.data?.map((product) => (
        <div
          key={product.id}
          className="max-w-sm w-full rounded-lg shadow-lg overflow-hidden img-container border"
        >
          <div className="p-3 ">
            <img
              className="w-full h-48 object-cover img"
              src={product.images}
              alt={product.name}
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4 flex items-start justify-between">
              <Button>View Details</Button>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;
