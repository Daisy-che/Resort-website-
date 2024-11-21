'use client';
import React from 'react';

const SpecialChefs = () => {
  const chefs = [
    {
      name: 'Alexander Petllo',
      role: 'Assistant Chef',
      image: '/images/Alejandro.jpg', 
    },
    {
      name: 'Mendia Juxef',
      role: 'Burger King',
      image: '/images/Mendia.jpg', 
    },
    {
      name: 'Petro William',
      role: 'Main Chef',
      image: '/images/peter.jpg', 
    },
  ];

  return (
    <div>
    <div className="bg-[#f9f6f3] py-12 px-6">
      <div className="container mx-auto text-center">
    
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Meet Our Special Chefs
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-lg p-6  transition-transform transform hover:scale-105"
            >
             
              <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-[#d4c5a6]">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                />
              </div>

             
              <h3 className="mt-4 text-xl font-semibold text-black">
                {chef.name}
              </h3>

             
              <p className="text-[#8b7a5d] text-sm font-medium mt-2 uppercase">
                {chef.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <h2 className="text-lg font-bold mb-4">About Us</h2>
        <p className="text-white">Continued at zealously necessary is Surrounded air motionless the end Literature Gay direction neglected.</p>
        <div className="flex mt-4">
          <a href="#" className="text-white hover:text-gray-300 mr-4"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white hover:text-gray-300 mr-4"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white hover:text-gray-300 mr-4"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-white hover:text-gray-300 mr-4"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <h2 className="text-lg font-bold mb-4">Explore</h2>
        <ul>
          <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Career</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Company Profile</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Help Center</a></li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <h2 className="text-lg font-bold mb-4">Contact Info</h2>
        <p className="text-white">175 10th Street, Office 375 Berlin, De 21562</p>
        <p><a href="tel:+12334598768" className="text-white hover:text-gray-300">+123 34598768</a></p>
        <p><a href="tel:+55434598734" className="text-white hover:text-gray-300">+554 34598734</a></p>
        <p><a href="mailto:food@restan.com" className="text-white hover:text-gray-300">food@restan.com</a></p>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <h2 className="text-lg font-bold mb-4">Newsletter</h2>
        <p className="text-white">Join our subscribers list to get the latest news and special offers.</p>
        <form>
          <div className="flex">
            <input type="email" placeholder="Your Email" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 mr-2" />
            <button type="submit" className="bg-white hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <p className="mt-2 text-xs text-white">Privacy Text</p>
        </form>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default SpecialChefs;
