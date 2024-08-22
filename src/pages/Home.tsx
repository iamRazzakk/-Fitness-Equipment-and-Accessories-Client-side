import Header from "../components/Header";
import Categories from "./Home/Categories";
import FeaturedProducts from "./Home/FeaturedProducts";
import ImageGallery from "./Home/ImageGallery";

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <FeaturedProducts />
      {/* add another section */}
      <ImageGallery />
    </>
  );
};

export default Home;
