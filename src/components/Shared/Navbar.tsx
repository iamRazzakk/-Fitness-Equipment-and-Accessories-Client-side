import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="lg:flex items-center justify-between lg:h-20 lg:w-full">
      <h1 className="text-3xl font-bold nav">Fitness</h1>
      <ul className="lg:flex items-center gap-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Products</li>
        <li>Products Managements</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
