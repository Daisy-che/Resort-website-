import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      image: "/images/food.jpeg", 
      title: "Quality Foods",
      description:
        "Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.",
    },
    {
      image: "/images/fast_delivery-removebg-preview.png", 
      title: "Fast Delivery",
      description:
        "Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.",
    },
    {
      image: "/images/pizza.jpeg", 
      title: "Delicious Recipes",
      description:
        "Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-30 h-30 mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FeaturesSection;
