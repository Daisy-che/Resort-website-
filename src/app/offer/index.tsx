import React from "react";

const SpecialOfferSection = () => {
  return (
    <div className="bg-white">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 px-8 rounded-lg max-w-7xl mx-auto shadow-lg"
        style={{
          backgroundImage: `url('/images/WALL.jpg')`,
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Images Section */}
          <div className="flex flex-col items-center gap-4 md:w-1/2">
            <div className="relative">
              <img
                src="/images/salmon fry.jpeg"
                alt="Salmon Dish"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="relative">
              <img
                src="/images/dish.jpeg"
                alt="Main Course"
                className="w-60 h-60 rounded-full border-4 border-white shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-white text-sm font-bold py-1 px-2 rounded-full">
                Save 55%
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/variety.jpg"
                alt="Dessert Dish"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <h4 className="text-lg text-yellow-600 font-semibold">
                TODAY SPECIAL OFFER
              </h4>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Explore Irresistible Promotions!
            </h2>
            <p className="text-gray-700 mb-6">
              Contrasted dissimilar get joy you instrument out reasonably.
              Again keeps at no meant stuff. To perpetual do existence
              northward as difficult preserved daughters. Continued at up to
              zealously necessary.
            </p>
            <button className="bg-[#826a45] text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-yellow-700 transition">
              Order Today
            </button>
          </div>
        </div>
      </section>
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">Our Specials Menu</h2>
      <div className="flex flex-wrap justify-center space-x-4 mt-4 font-bold">
        <div className="px-4 py-2 rounded-md  text-[#826a45] hover:bg-gray-100 cursor-pointer">
          MAIN DISHES
        </div>
        <div className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer">
          SEA-FOOD
        </div>
        <div className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer">
          DESSERTS
        </div>
        <div className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer">
          BEVERAGE
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default SpecialOfferSection;
