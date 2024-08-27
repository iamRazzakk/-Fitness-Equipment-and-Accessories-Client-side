import { Button } from "@/components/ui/button";
import img1 from "../../assets/gallery/1.jpg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpg";
import img5 from "../../assets/gallery/5.jpg";
const ImageGallery = () => {
  return (
    <div className="lg:mt-32 md:mt-12 mt-8">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">Gallery</h1>
      <div className="lg:flex items-center lg:gap-4 lg:mt-8 md:mt-6 mt-4">
        <div>
          <img className="lg:w-full galleyImg rounded-md " src={img1} alt="" />
          <img
            className="lg:w-full galleyImg rounded-md  lg:mt-4"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img className="galleyImg rounded-md" src={img3} alt="" />
        </div>
        <div>
          <img className="lg:w-full galleyImg rounded-md " src={img4} alt="" />
          <img
            className="lg:w-full galleyImg rounded-md  lg:mt-4"
            src={img5}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center lg:mt-12 md:mt-8 mt-6 bg-white text-black w-32 rounded-md mx-auto">
        <Button>See more</Button>
      </div>
    </div>
  );
};

export default ImageGallery;
