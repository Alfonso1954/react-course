import React from "react";

const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text=xs m-2">
          Electronic
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1200 alt='Headphones'"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-9">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">$400</span>
      </p>
    </div>
  );
};

export default Card;
