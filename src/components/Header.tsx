import img from "../assets/hero.jpeg";

import "react-slideshow-image/dist/styles.css";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="slide-container h-[88vh]">
      <img
        className="lg:w-full lg:h-full object-cover relative rounded-md"
        src={img}
        alt=""
      />
      <div className=" absolute lg:-mt-96 mt-32    text-center">
        <h1 className=" lg:text-6xl md:text-3xl text-2xl  font-bold">
          Welcome to Fitness Equipment and Accessories
        </h1>
        <Link to="/products">
          <Button
            variant="secondary"
            className="lg:px-10 lg:py-8 md:px-6 md:py-4  lg:mt-8 mt-4 "
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
