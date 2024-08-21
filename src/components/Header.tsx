import img from "../assets/hero.jpeg";

import "react-slideshow-image/dist/styles.css";

const Header = () => {
  return (
    <div className="slide-container lg:h-[88vh]">
      <img className="lg:w-full lg:h-full object-cover" src={img} alt="" />
    </div>
  );
};

export default Header;
