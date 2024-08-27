import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSelectedCategory } from "@/redux/features/categoriesSlice";
import SearchBar from "@/components/searchBar/SearchBar";

const CategoriesCard = () => {
  const { data: Products, isLoading } = useGetProductsQuery([]);
  const dispatch = useAppDispatch();

  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

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
    dispatch(setSelectedCategory(category));
  };

  const handleClearFilters = () => {
    setMinPrice(null);
    setMaxPrice(null);
    setSortOrder(null);
    dispatch(setSelectedCategory(null));
  };

  const filteredProducts = Products?.data?.filter((product: IProducts) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const searchMatch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

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
        <label className="flex items-center">
          <input
            onChange={() => handleCategoryChange("Barbell")}
            type="checkbox"
            value="Barbell"
            className="mr-2"
            checked={selectedCategory === "Barbell"}
          />
          Barbell
        </label>
        <label className="flex items-center">
          <input
            onChange={() => handleCategoryChange("Treadmill")}
            type="checkbox"
            value="Treadmill"
            className="mr-2"
            checked={selectedCategory === "Treadmill"}
          />
          Treadmill
        </label>
        <label className="flex items-center">
          <input
            onChange={() => handleCategoryChange("Benches")}
            type="checkbox"
            value="Benches"
            className="mr-2"
            checked={selectedCategory === "Benches"}
          />
          Benches
        </label>
      </div>

      <div className="lg:mt-4">
        <div className="lg:flex items-center justify-start gap-4">
          <Input
            className="flex-1 text-black"
            type="number"
            id="minPrice"
            placeholder="Min Price"
            value={minPrice !== null ? minPrice : ""}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <Input
            className="flex-1 text-black"
            type="number"
            id="maxPrice"
            placeholder="Max Price"
            value={maxPrice !== null ? maxPrice : ""}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <div className="flex-1">
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
        <Button
          className="lg:mt-4"
          onClick={handleClearFilters}
          variant="secondary"
        >
          Clear Filters
        </Button>
        <SearchBar />
      </div>

      <div className="lg:mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-white">
        {sortedProducts?.map((product: IProducts) => (
          <div
            key={product._id}
            className="max-w-sm w-full rounded-lg shadow-lg overflow-hidden img-container border border-gray-500"
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
              <p className="mt-2 text-gray-300">${product.description}</p>
              <div className="mt-4 flex items-start justify-between">
                <Link to={`/products/${product._id}`}>
                  <Button>View Details</Button>
                </Link>
                {/* <Button
                  onClick={() => handleAddToCart(product)}
                  variant="secondary"
                >
                  Add to Cart
                </Button> */}
                <h1>${product.price}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
