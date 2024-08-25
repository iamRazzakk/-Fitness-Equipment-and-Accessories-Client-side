import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  {
    title: "High Quality",
    description: "Our products are made with the highest quality materials.",
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    title: "Eco-Friendly",
    description: "We are committed to sustainability in all our products.",
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    title: "Affordable",
    description:
      "Get the best value for your money with our competitive pricing.",
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    title: "Fast Shipping",
    description: "Enjoy quick and reliable delivery to your doorstep.",
    icon: <FaCheckCircle className="text-green-500" />,
  },
];

const BenefitsofOurProducts = () => {
  return (
    <div className="py-8 ">
      <h2 className="text-3xl font-bold  text-white mb-6">
        Benefits of Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md text-center"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsofOurProducts;
