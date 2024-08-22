import { Button } from "@/components/ui/button";
import exerciseBallImg from "../../assets/treadmill.png";
import "../../ExternalCss/Card.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Scrollbar } from "swiper/modules";
const FeaturedProducts = () => {
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
        <SwiperSlide className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden img-container">
          <div className="p-3 bg-gray-400">
            <img
              className="w-full h-48 object-cover img"
              src={exerciseBallImg}
              alt="Exercise Ball"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Title</h2>
            <p className="mt-2 text-gray-600">Description</p>
            <div className="mt-4 flex items-start justify-between">
              <Button>View Details</Button>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden img-container">
          <div className="p-3 bg-gray-400">
            <img
              className="w-full h-48 object-cover img"
              src={exerciseBallImg}
              alt="Exercise Ball"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Title</h2>
            <p className="mt-2 text-gray-600">Description</p>
            <div className="mt-4 flex items-start justify-between">
              <Button>View Details</Button>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden img-container">
          <div className="p-3 bg-gray-400">
            <img
              className="w-full h-48 object-cover img"
              src={exerciseBallImg}
              alt="Exercise Ball"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Title</h2>
            <p className="mt-2 text-gray-600">Description</p>
            <div className="mt-4 flex items-start justify-between">
              <Button>View Details</Button>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden img-container">
          <div className="p-3 bg-gray-400">
            <img
              className="w-full h-48 object-cover img"
              src={exerciseBallImg}
              alt="Exercise Ball"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Title</h2>
            <p className="mt-2 text-gray-600">Description</p>
            <div className="mt-4 flex items-start justify-between">
              <Button>View Details</Button>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden img-container">
          <div className="p-3 bg-gray-400">
            <img
              className="w-full h-48 object-cover img"
              src={exerciseBallImg}
              alt="Exercise Ball"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Title</h2>
            <p className="mt-2 text-gray-600">Description</p>
            <div className="mt-4 flex items-start justify-between">
              <Button>View Details</Button>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden img-container">
          <div className="p-3 bg-gray-400">
            <img
              className="w-full h-48 object-cover img"
              src={exerciseBallImg}
              alt="Exercise Ball"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Title</h2>
            <p className="mt-2 text-gray-600">Description</p>
            <div className="mt-4 flex items-start justify-between">
              <Button>View Details</Button>
              <Button variant="secondary">Add to Cart</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
