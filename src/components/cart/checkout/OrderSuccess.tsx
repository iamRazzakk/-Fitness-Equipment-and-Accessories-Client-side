import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="lg:mt-12 md:mt-8 mt-4">
      <h1 className="lg:text-3xl text-xl font-bold text-center ">
        Order Success
      </h1>
      <div className="flex flex-col items-center justify-center border rounded-md w-1/2 mx-auto mt-8 p-4">
        <p className="text-green-400 mb-4">
          Thank you for your order! Your order has been placed successfully.
        </p>
        <Link to="/products">
          <Button className="bg-white text-black">Continue Shoping</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
