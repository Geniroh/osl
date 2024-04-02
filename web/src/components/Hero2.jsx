import React from "react";

const ComponentWithOverlay = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/logo.png')",
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Your content */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Your Content Goes Here</h1>
      </div>
    </div>
  );
};

export default ComponentWithOverlay;
