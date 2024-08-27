import image1 from "../../assets/benefit/1.jpg";
import image2 from "../../assets/benefit/2.jpg";
import image3 from "../../assets/benefit/3.jpg";
import image4 from "../../assets/benefit/4.jpg";

const benefits = [
  {
    title: "High Quality",
    description: "Our products are made with the highest quality materials.",
    backgroundImage: image1,
  },
  {
    title: "Eco-Friendly",
    description: "We are committed to sustainability in all our products.",
    backgroundImage: image2,
  },
  {
    title: "Affordable",
    description:
      "Get the best value for your money with our competitive pricing.",
    backgroundImage: image3,
  },
  {
    title: "Fast Shipping",
    description: "Enjoy quick and reliable delivery to your doorstep.",
    backgroundImage: image4,
  },
];

const BenefitsofOurProducts = () => {
  return (
    <div className="py-8 ">
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold  text-white mb-6">
        Benefits of Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-lg shadow-md text-center bg-cover bg-center h-64 flex flex-col justify-center items-center "
            style={{ backgroundImage: `url(${benefit.backgroundImage})` }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-white">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsofOurProducts;
