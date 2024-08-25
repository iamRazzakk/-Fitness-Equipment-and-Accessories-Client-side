import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import headerImg from "../../assets/aboutUs/products.jpg";
import { Link, NavLink } from "react-router-dom";
import { IProducts } from "@/types/types";
import { useAppDispatch } from "../../redux/hook";
import { cddToCart } from "@/redux/features/cartSlice";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CategoriesCard = () => {
  const { data: Products, isLoading } = useGetProductsQuery([]);
  const dispatch = useAppDispatch();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  if (isLoading) {
    return <h1 className="text-white">Loading</h1>;
  }

  const handleAddToCart = (product: IProducts) => {
    const quantity = 1;
    dispatch(cddToCart({ product, quantity }));
    toast.success(`${product.name} has been added to your cart!`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const filteredProducts = Products?.data?.filter((product: IProducts) => {
    // Category filtering
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    // Price filtering
    const priceMatch =
      (minPrice === null || product.price >= minPrice) &&
      (maxPrice === null || product.price <= maxPrice);

    return categoryMatch && priceMatch;
  });

  // Sorting products
  const sortedProducts = filteredProducts?.sort(
    (a: IProducts, b: IProducts) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    }
  );

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
          <input
            onChange={() => handleCategoryChange("Barbell")}
            type="checkbox"
            value="Barbell"
            className="mr-2"
            checked={selectedCategories.includes("Barbell")}
          />
          Barbell
        </label>
        {/* Treadmill */}
        <label className="flex items-center">
          <input
            onChange={() => handleCategoryChange("Treadmill")}
            type="checkbox"
            value="Treadmill"
            className="mr-2"
            checked={selectedCategories.includes("Treadmill")}
          />
          Treadmill
        </label>
        {/* Benches */}
        <label className="flex items-center">
          <input
            onChange={() => handleCategoryChange("Benches")}
            type="checkbox"
            value="Benches"
            className="mr-2"
            checked={selectedCategories.includes("Benches")}
          />
          Benches
        </label>
      </div>

      <div className="lg:mt-8">
        <div className="lg:flex items-center justify-start gap-4">
          <Input
            className="flex-1 text-black"
            type="number"
            id="minPrice"
            placeholder="Min Price"
            value={minPrice !== null ? minPrice : ""}
            onChange={(e) => setMinPrice(Number(e.target.value) || null)}
          />
          <Input
            className="flex-1 text-black"
            type="number"
            id="maxPrice"
            placeholder="Max Price"
            value={maxPrice !== null ? maxPrice : ""}
            onChange={(e) => setMaxPrice(Number(e.target.value) || null)}
          />
          <div className="flex-1">
            {/* Sorting dropdown (re-enabled) */}
            <DropdownMenu>
              <DropdownMenuTrigger className="border px-4 py-[6px] rounded-md">
                Sort the Products
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setSortOrder("asc")}>
                  Price (Ascending)
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setSortOrder("desc")}>
                  Price (Descending)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="lg:mt-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 text-white">
        {sortedProducts?.map((product: IProducts) => (
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
