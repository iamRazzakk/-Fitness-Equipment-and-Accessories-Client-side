import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import headerImg from "../../assets/aboutUs/products.jpg";
import { Link, NavLink } from "react-router-dom";
import { IProducts } from "@/types/types";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "@/redux/features/cartSlice";
const CategoriesCard = () => {
  const { data: Products, isLoading } = useGetProductsQuery([]);
  const dispatch = useAppDispatch();
  if (isLoading) {
    return <h1 className="text-white">Loading</h1>;
  }
  const handleAddToCart = (product: IProducts) => {
    // console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div>
        <img
          className="relative w-full lg:h-96 object-cover"
          src={headerImg}
          alt=""
        />
        <Link
          to="/products"
          className="absolute lg:-mt-64 lg:text-5xl font-bold text-center lg:ml-[450px]"
        >
          /products
        </Link>
      </div>
      <div>
        <NavLink to="/">Home </NavLink>/
        <NavLink to="/products"> products</NavLink>
      </div>
      <div className="lg:mt-8 flex items-center gap-4">
        {/* Barbell */}
        <label className="flex items-center">
          <input type="checkbox" value="Barbell" className="mr-2" />
          Barbell
        </label>
        {/* Treadmill */}
        <label className="flex items-center">
          <input type="checkbox" value="Treadmill" className="mr-2" />
          Treadmill
        </label>
        {/* Benches */}
        <label className="flex items-center">
          <input type="checkbox" value="Benches" className="mr-2" />
          Benches
        </label>
      </div>
      <div className="lg:mt-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 text-white">
        {Products?.data?.map((product: IProducts) => (
          <div
            key={product._id}
            className="max-w-sm w-full rounded-lg shadow-lg overflow-hidden img-container border"
          >
            <div className="p-3 ">
              <img
                className="w-full h-48 object-cover img rounded-lg"
                src={product.images}
                alt={product.name}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold ">{product.name}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-4 flex items-start justify-between">
                <Link to={`/products/${product._id}`}>
                  <Button>View Details</Button>
                </Link>
                <Button
                  onClick={() => handleAddToCart(product)}
                  variant="secondary"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
