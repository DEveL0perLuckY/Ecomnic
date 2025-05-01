import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EXCLUSIVE_ITEMS = [
  {
    title: "Website Exclusive",
    subtitle: "Go Beyond Limits",
    image: "https://fakeimg.pl/1200x400?text=Website+Exclusive&font=lobster&font_size=50",
    route: "/exclusive",
  },
  {
    title: "New Collection",
    subtitle: "Explore Premium Gear",
    image: "https://fakeimg.pl/1200x400?text=New+Collection&font=lobster&font_size=50",
    route: "/newcollection",
  },
  {
    title: "Special Offers",
    subtitle: "Up to 50% Off",
    image: "https://fakeimg.pl/1200x400?text=Special+Offers&font=lobster&font_size=50",
    route: "/sales",
  },
];

function Cards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev === 2) {
            return 0;
          } else {
            return prev + 1; 
          }
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div
        className="relative rounded-xl overflow-hidden group h-96"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {" "}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {EXCLUSIVE_ITEMS.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <Link to={item.route}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
                  <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
                  <p className="text-2xl">{item.subtitle}</p>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Exclusive
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {EXCLUSIVE_ITEMS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
