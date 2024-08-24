const Cart = () => {
  return (
    <div className=" p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center ">
        Happy Shopping ❤️
      </h2>
      <div className="lg:flex items-start gap-4">
        <div className="flex-1 border">my image here</div>
        <div className="border flex-1">
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Total:</h3>
            <p className="text-xl">Price</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
