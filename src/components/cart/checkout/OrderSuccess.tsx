import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Order Success</h1>
      <div className="flex flex-col items-center justify-center border rounded-md w-1/2 mx-auto mt-8 p-4">
        <p className="text-green-400 mb-4">
          Thank you for your order! Your order has been placed successfully.
        </p>
        <Link to="/products">
          <Button>Continue Shoping</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
