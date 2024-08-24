import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="lg:flex items-center justify-between lg:h-20 lg:w-full px-4 py-8">
      <Link to="/">
        <h1 className="text-3xl font-bold nav">QQMAX Fitness</h1>
      </Link>
      <ul className="lg:flex items-center gap-5">
        {/* <Link to="/">
          <li>Home</li>
        </Link> */}
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

        {/* <li>Products</li> */}
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
        {/* <li>Products Managements</li> */}
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
        {/* <li>About Us</li> */}
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
      <Link to="/cart">
        <FaCartArrowDown className="text-2xl" />
      </Link>
    </nav>
  );
};

export default Navbar;
