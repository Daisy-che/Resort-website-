'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const RestaurantLanding = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [selectedPeople, setSelectedPeople] = useState('1 Person');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/images/restaurant.jpeg', 
    '/images/restaurant2.jpg', 
  ];

  const popularCategories = [
    {
      title: 'Cheesecakes',
      category: 'Desserts',
      image: '/images/cheesecake.webp'
    },
    {
      title: 'Salmon Fry',
      category: 'Sea Food',
      image: '/images/salmon fry.jpeg'
    },
    {
      title: 'Beverage',
      category: 'Hot Chocolate',
      image: '/images/hot chocolate.jpeg'
    }
  ];

  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(imageRotationInterval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); 
  };

  return (
    <div className="relative min-h-screen">
      <div 
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gray-900 -z-10" />
        
        <nav className="relative z-20 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">
              <img src='/images/resto_logo-.png'/>
            </div>
            
            <button 
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={toggleMenu} 
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex space-x-6 text-white font-bold">
              <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Pages</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Menu</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Blog</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Shop</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 text-white py-4 px-4 z-50">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-gray-300 transition-colors py-2">Home</a>
                <a href="#" className="hover:text-gray-300 transition-colors py-2">Pages</a>
                <a href="#" className="hover:text-gray-300 transition-colors py-2">Menu</a>
                <a href="#" className="hover:text-gray-300 transition-colors py-2">Blog</a>
                <a href="#" className="hover:text-gray-300 transition-colors py-2">Shop</a>
                <a href="#" className="hover:text-gray-300 transition-colors py-2">Contact</a>
              </div>
            </div>
          )}
        </nav>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 text-center">Best Restaurant</h1>
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <div className="absolute inset-0 border-2 border-[#826a45] rounded-full flex items-center justify-center">
              <div className="rotate-45 transform">
                <span className="block text-xs md:text-sm italic font-bold text-center">BEST FOOD SINCE 1945</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-30">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-xl w-full md:w-96 mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-brown-100 rounded-full">
                <div className="w-6 h-6 text-brown-600">🍽️</div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Book a table</h2>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder="+4733378901"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-brown-600 focus:border-transparent"
                />
              </div>

              <div>
                <select 
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-brown-600 focus:border-transparent"
                  value={selectedPeople}
                  onChange={(e) => setSelectedPeople(e.target.value)}
                >
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="date"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-brown-600 focus:border-transparent"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <div className="relative">
                <select 
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-brown-600 focus:border-transparent"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                </select>
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <button className="w-full bg-[#6a4418] text-white font-bold py-3 rounded-md hover:bg-brown-700 transition-colors">
                Book A Table
              </button>
            </form>
          </div>

         
          <div className="text-black mt-8 md:mt-40">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                🔥 Our Popular category
              </h2>
              <div className="flex gap-2">
                <button className="p-2 bg-brown-600 rounded-full hover:bg-brown-700 transition-colors">
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button className="p-2 bg-brown-600 rounded-full hover:bg-brown-700 transition-colors">
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {popularCategories.map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[250px] object-cover transition-all group-hover:scale-110 duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLanding;
