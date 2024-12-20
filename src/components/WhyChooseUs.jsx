import { FaShippingFast, FaDollarSign, FaShieldAlt, FaThumbsUp, FaRegClock } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast className="text-blue-500 text-4xl" />,
      title: "Fast & Free Delivery",
      description: "We ensure quick delivery to your doorstep without any extra charges.",
    },
    {
      id: 2,
      icon: <FaDollarSign className="text-green-500 text-4xl" />,
      title: "Affordable Pricing",
      description: "Shop high-quality products at prices that fit your budget.",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-purple-500 text-4xl" />,
      title: "Secure Payments",
      description: "Your transactions are 100% safe with our secure payment gateways.",
    },
    {
      id: 4,
      icon: <FaThumbsUp className="text-yellow-500 text-4xl" />,
      title: "Premium Quality",
      description: "All our products are carefully curated to ensure top-notch quality.",
    },
    {
      id: 5,
      icon: <FaRegClock className="text-red-500 text-4xl" />,
      title: "24/7 Customer Support",
      description: "Our support team is always ready to assist you anytime, anywhere.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50 rounded-3xl">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
