import barbell from "../../assets/barbell.png";
import benches from "../../assets/benches.jpg";
import treadmill from "../../assets/treadmill.png";
const Categories = () => {
  const categories = [
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
  return (
    <div className="lg:mt-12">
      <h1 className="text-3xl font-bold">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center lg:mt-8 md:mt-6 mt-4">
        {categories?.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center relative overflow-hidden "
          >
            <img
              src={category?.img}
              alt={category?.name}
              className="lg:h-48 lg:w-48 rounded-full object-cover border border-gray-500 p-2"
            />
            <h3 className="text-xl font-semibold lg:mt-5 md:mt-4 mt-2">
              {category?.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
