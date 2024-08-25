import Header from "../components/Header";
import BenefitsofOurProducts from "./Home/BenefitsofOurProducts";
import Categories from "./Home/Categories";
import FeaturedProducts from "./Home/FeaturedProducts";
import ImageGallery from "./Home/ImageGallery";
import WhyWithUs from "./Home/WhyWithUs";

const Home = () => {
  return (
    <div className="font-Lexend bg-black text-white">
      <Header />
      <Categories />
      <FeaturedProducts />
      <WhyWithUs />
      {/* add another section */}
      <BenefitsofOurProducts />
      <ImageGallery />
    </div>
  );
};

export default Home;
