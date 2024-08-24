import { Button } from "@/components/ui/button";
import "../../ExternalCss/Card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { IProducts } from "@/types/types";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { data: Products, isLoading } = useGetProductsQuery([]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="lg:mt-32 md:mt-12 mt-8">
      <h1 className="text-3xl font-bold">Featured Products</h1>
      {/* Product card */}
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper lg:mt-8 md:mt-6 mt-4"
      >
        {Products?.data?.slice(0, 8).map((product: IProducts) => (
          <SwiperSlide
            key={product._id}
            className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden img-container"
          >
            <div className="p-3 bg-gray-400">
              <img
                className="w-full h-48 object-cover img"
                src={product.images}
                alt={product.name}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">
                {product.name}
              </h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-4 flex items-start justify-between">
                <Link to={"/products"}>
                  <Button>See More</Button>
                </Link>
                <h1 className="text-black">${product.price}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
