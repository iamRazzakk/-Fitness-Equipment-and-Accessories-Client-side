import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
  // Corrected useSelector function with a return statement
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.products.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    )
  );

  return (
    <nav className="lg:flex items-center justify-between lg:h-20 lg:w-full px-4 py-8">
      <Link to="/">
        <h1 className="text-3xl font-bold nav">QQMAX Fitness</h1>
      </Link>
      <ul className="lg:flex items-center gap-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `text-base ${
              isPending
                ? "text-white"
                : isActive
                ? "text-blue-600 font-bold"
                : "text-white font-medium"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            `text-base ${
              isPending
                ? "text-white"
                : isActive
                ? "text-blue-600 font-bold"
                : "text-white font-medium"
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/products-managements"
          className={({ isActive, isPending }) =>
            `text-base ${
              isPending
                ? "text-white"
                : isActive
                ? "text-blue-600 font-bold"
                : "text-white font-medium"
            }`
          }
        >
          Products Managements
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive, isPending }) =>
            `text-base ${
              isPending
                ? "text-white"
                : isActive
                ? "text-blue-600 font-bold"
                : "text-white font-medium"
            }`
          }
        >
          About Us
        </NavLink>
      </ul>
      <Link to="/cart" className="relative">
        <FaCartArrowDown className="text-2xl" />
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0  inline-flex items-center justify-center  text-base font-bold leading-none text-red-500  rounded-full">
            +{cartItemCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
