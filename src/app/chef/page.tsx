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
   

    </div>
  );
};

export default SpecialChefs;
