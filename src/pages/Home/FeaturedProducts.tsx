import { Button } from "@/components/ui/button";
import exerciseBallImg from "../../assets/treadmill.png";
import "../../ExternalCss/Card.css";
const FeaturedProducts = () => {
  return (
    <div className="lg:mt-32 md:mt-12 mt-8">
      <h1 className="text-3xl font-bold">Featured Products</h1>
      {/* Product card */}
      <div className="lg:mt-8 max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden img-container">
        <img
          className="w-full h-48 object-cover img"
          src={exerciseBallImg}
          alt={exerciseBallImg}
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">title</h2>
          <p className="mt-2 text-gray-600">description</p>
          <div className="mt-4 flex items-start justify-between">
            <Button>View Details</Button>
            <Button variant="secondary">Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
