import img from "../../assets/whywhitus/why.png";
import img2 from "../../assets/whywhitus/car.png";
import img3 from "../../assets/whywhitus/ait.png";
import img4 from "../../assets/whywhitus/mess.png";
import img5 from "../../assets/whywhitus/sec.png";

const WhyWithUs = () => {
  return (
    <div className="lg:mt-32 md:mt-12 mt-8 flex flex-col lg:flex-row items-center">
      <div className="flex-1 hover:shadow-lg hover:shadow-gray-400 rounded-lg">
        <img
          src={img}
          alt="Why With Us"
          className="rounded-lg hover:rounded-md object-cover"
        />
      </div>
      <div className="flex-1 space-y-6 mt-8 lg:mt-0 lg:ml-12">
        <div className="flex items-center gap-6 p-3  rounded-lg shadow-lg">
          <div className="border-2 border-gray-400 rounded-full p-5 icons  ">
            <img src={img2} alt="Fast Delivery" className=" " />
          </div>

          <div>
            <h3 className="lg:text-xl text-base font-semibold text-white withUs">
              Fast Delivery
            </h3>
            <p className="text-gray-400">
              Get your orders delivered quickly and on time, ensuring you
              receive your products when you need them the most.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 p-3  rounded-lg shadow-lg">
          <div className="border-2 border-gray-400 rounded-full p-5 icons  ">
            <img
              src={img3}
              alt="Shipping Worldwide"
              className="  object-cover w-full h-full text-black "
            />
          </div>
          <div>
            <h3 className="lg:text-xl text-base font-semibold text-white withUs">
              Shipping Worldwide
            </h3>
            <p className="text-gray-400">
              We ship to any corner of the world, offering reliable and
              efficient international delivery to meet your global needs.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 p-3  rounded-lg shadow-lg">
          <div className="border-2 border-gray-400 rounded-full p-5 icons  ">
            <img
              src={img5}
              alt="Online Support"
              className=" object-cover w-full h-full text-black "
            />
          </div>

          <div>
            <h3 className="lg:text-xl text-base font-semibold text-white withUs">
              Secure Payments
            </h3>
            <p className="text-gray-400">
              Your transactions are safe and encrypted, providing you with peace
              of mind every time you make a purchase.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 p-3  rounded-lg shadow-lg">
          <div className="border-2 border-gray-400 rounded-full p-5 icons  ">
            <img
              src={img4}
              alt="Secure Payments"
              className=" object-cover w-full h-full text-black "
            />
          </div>

          <div>
            <h3 className="lg:text-xl text-base font-semibold text-white withUs">
              Online Support
            </h3>
            <p className="text-gray-400">
              We're here to help you 24/7 with dedicated online support,
              ensuring all your questions are promptly answered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWithUs;
