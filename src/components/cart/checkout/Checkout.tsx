import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Checkout = () => {
  const handleClick = () => {
    toast.error("some this is wrong");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Confirm Your Order</h1>
      <div className="lg:flex items-center justify-center gap-4 lg:mt-4 text-black">
        <div className="flex-1 rounded-md border border-gray-400 p-4">
          <h1 className="text-2xl font-bold text-white">User Details</h1>
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" placeholder="Name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <label htmlFor="phone">Phone</label>
            <Input type="number" id="phone" placeholder="Phone" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <label htmlFor="address">Delivery Address</label>
            <Input type="text" id="address" placeholder="Your Address" />
          </div>
        </div>
        <div className="flex-1 rounded-md border border-gray-400 p-4 lg:h-[346px]">
          <h1 className="text-2xl font-bold text-white">Payment Methods</h1>
          <div className="mt-4">
            <label className="block text-white">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                className="mr-2"
              />
              Cash on Delevery
            </label>
            <label className="block text-white mt-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Stripe"
                className="mr-2"
              />
              Stripe
            </label>
          </div>
        </div>
      </div>
      <div className="mt-auto flex justify-end lg:mt-4">
        <Button onClick={handleClick}>Place Order</Button>
      </div>
    </div>
  );
};

export default Checkout;
