import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = Number(formData.get("phone"));
    const address = formData.get("address") as string;

    if (name && email && phone && address) {
      toast.success("Order placed successfully!");
      navigate("/order-success");
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h1 className="text-3xl font-bold">Confirm Your Order</h1>
      <div className="lg:flex items-center justify-center gap-4 lg:mt-4 text-black">
        <div className="flex-1 rounded-md border border-gray-400 p-4">
          <h1 className="text-2xl font-bold text-white">User Details</h1>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="phone">Phone</label>
            <Input type="number" id="phone" name="phone" placeholder="Phone" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="address">Delivery Address</label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="Your Address"
            />
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
              Cash on Delivery
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
        <Button className="bg-white text-black" type="submit">
          Place Order
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
