const FoodMenu = () => {
    const items = [
      {
        id: 1,
        name: "Shushi",
        price: "$56.00",
        image: "/images/shushi.jpeg",
        rating: 5.0,
        ratingCount: 2,
        description: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      },
      {
        id: 2,
        name: "Salmon Fry",
        price: "$81.00",
        image: "/images/salmon fries.jpeg",
        rating: 5.0,
        ratingCount: 2,
        description: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      },
      {
        id: 3,
        name: "Prawns Fry",
        price: "$31.00",
        image: "/images/prawn fry.jpeg",
        rating: 5.0,
        ratingCount: 2,
        description: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      },
      {
        id: 4,
        name: "Crustaceans Lobsters",
        price: "$51.00",
        image: "/images/crustaceans lobster.jpeg",
        rating: 5.0,
        ratingCount: 2,
        description: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      },
      {
        id: 5,
        name: "Chicken Nuggets",
        price: "$49.00",
        image: "/images/chicken nugget.jpeg",
        rating: 5.0,
        ratingCount: 2,
        description: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      },
      {
        id: 6,
        name: "Chicken Alfredo",
        price: "$36.00",
        image: "/images/chicken alfredo.jpeg",
        rating: 5.0,
        ratingCount: 2,
        description: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      },
    ];
  
    return (
        <div>
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16"> 
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg border border-gray-200 transform hover:scale-105 transition duration-300 w-full"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg" 
              />
              <div className="p-6"> 
                <div className="flex items-center justify-between mb-3"> 
                  <span className="text-yellow-500 font-medium text-sm"> 
                    ★ {item.rating} ({item.ratingCount})
                  </span>
                  <span className="text-[#826a45] font-semibold text-lg"> 
                    {item.price}
                  </span>
                </div>
                <h3 className="text-md font-bold text-gray-900 mb-3"> 
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">{item.description}</p> 
                <div className="flex justify-center mt-4">
                  <button className="bg-gray-800 text-white text-sm py-2 px-4 rounded-md hover:bg-gray-900 transition duration-200">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative  text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-cover bg-center bg-no-repeat py-16 px-8 rounded-lg max-w-7xl mx-auto shadow-lg"
        style={{
          backgroundImage: `url('/images/black wallpaper.jpg')`,
        }}>
  <div className="relative max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
        <img src="/images/fooddisplay-.png" alt="Food Image" className="w-96 h-auto rounded-lg" />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">Are you Ready to Start your online Order?</h1>
        <p className="text-lg mb-8">Bndulgence diminution so discovered mr apartments. Are of under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shaving. She sang know now.</p>
        <div className="flex space-x-4 mt-8">
          <a href="#" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">App Store</a>
          <a href="#" className="bg-[#826a45] text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">Play Store</a>
        </div>
      </div>
      
    </div>
  </div>
</div>
</div>

      </div>
    );
  };
  
  export default FoodMenu;