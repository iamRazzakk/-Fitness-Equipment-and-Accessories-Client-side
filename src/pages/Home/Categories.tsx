import { useDispatch } from "react-redux";
import barbell from "../../assets/barbell.png";
import benches from "../../assets/benches.jpg";
import treadmill from "../../assets/treadmill.png";
import { Link } from "react-router-dom";
import { setSelectedCategory } from "@/redux/features/categoriesSlice";
const Categories = () => {
  const dispatch = useDispatch();
  const AllCategories = [
    {
      name: "Barbell",
      img: barbell,
    },
    {
      name: "Benches",
      img: benches,
    },
    {
      name: "Treadmill",
      img: treadmill,
    },
  ];
  const handleCategoryClick = (categoryName) => {
    dispatch(setSelectedCategory(categoryName));
  };
  return (
    <div className="lg:mt-12 md:mt-8 mt-4">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">Categories</h1>
      <div className="grid grid-cols-3 gap-6 text-center lg:mt-8 md:mt-6 mt-4">
        {AllCategories?.map((category, idx) => (
          <Link
            key={idx}
            to={`/products?name=${encodeURIComponent(category.name)}`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div
              className="flex flex-col items-center justify-center relative overflow-hidden "
              onClick={() => handleCategoryClick(category.name)}
            >
              <img
                src={category?.img}
                alt={category?.name}
                className="lg:h-48 lg:w-48 w-16 rounded-full object-cover border border-gray-500 p-2"
              />
              <h3 className="lg:text-xl text-base font-semibold lg:mt-5 md:mt-4 mt-2">
                {category?.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
