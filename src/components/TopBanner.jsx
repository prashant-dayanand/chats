import React from "react";

const TopBanner = () => {
  return (
    <div className="h-1/2"> 
      <div className="relative h-full ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUOXRQQ__cEh-qgmP1Eey3SfAwPqN4sL5nQ&s"
          alt=""
          className="h-full w-full object-cover rounded-t-xl" 
        />
        <div className="absolute bottom-10 left-6">
          <h2 className="text-white text-4xl">Hello There</h2>
          <h2 className="text-white text-4xl font-bold">How can we help?</h2>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
