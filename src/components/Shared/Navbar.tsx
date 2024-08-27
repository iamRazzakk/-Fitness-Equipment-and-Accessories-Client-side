import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.products.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    )
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 lg:h-20 lg:w-full px-4 py-4 lg:py-8 flex items-center justify-between">
      <Link
        to="/"
        className="lg:text-3xl md:text-2xl text-xl font-bold text-white nav"
      >
        QQMAX Fitness
      </Link>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul
        className={`lg:flex items-center gap-5 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-300 ease-in ${
          isOpen ? "block" : "hidden lg:flex"
        }`}
      >
        <li className="py-2 lg:py-0 text-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              `text-base block lg:inline-block ${
                isPending
                  ? "text-white"
                  : isActive
                  ? "text-blue-600 font-bold"
                  : "text-white font-medium"
              }`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="py-2 lg:py-0 text-center">
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              `text-base block lg:inline-block ${
                isPending
                  ? "text-white"
                  : isActive
                  ? "text-blue-600 font-bold"
                  : "text-white font-medium"
              }`
            }
            onClick={toggleMenu}
          >
            Products
          </NavLink>
        </li>
        <li className="py-2 lg:py-0 text-center">
          <NavLink
            to="/products-managements"
            className={({ isActive, isPending }) =>
              `text-base block lg:inline-block ${
                isPending
                  ? "text-white"
                  : isActive
                  ? "text-blue-600 font-bold"
                  : "text-white font-medium"
              }`
            }
            onClick={toggleMenu}
          >
            Products Managements
          </NavLink>
        </li>
        <li className="py-2 lg:py-0 text-center">
          <NavLink
            to="/about-us"
            className={({ isActive, isPending }) =>
              `text-base block lg:inline-block ${
                isPending
                  ? "text-white"
                  : isActive
                  ? "text-blue-600 font-bold"
                  : "text-white font-medium"
              }`
            }
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <div
        className={`relative lg:ml-5 ${
          isOpen ? "hidden lg:block" : "block lg:block"
        }`}
      >
        <Link to="/cart" className="relative text-white text-2xl">
          <FaCartArrowDown />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center text-sm font-bold leading-none text-red-500 rounded-full">
              +{cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
