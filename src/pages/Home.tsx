import Header from "../components/Header";
import Categories from "./Home/Categories";
import FeaturedProducts from "./Home/FeaturedProducts";
import ImageGallery from "./Home/ImageGallery";
import WhyWithUs from "./Home/WhyWithUs";

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <FeaturedProducts />
      <WhyWithUs />
      {/* add another section */}
      <ImageGallery />
    </>
  );
};

export default Home;
