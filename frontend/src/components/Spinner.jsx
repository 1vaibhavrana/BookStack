import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex justify-center items-center  animate-ping w-16 h-16 m-8 rounded-full bg-blue-600">
        <div className="flex justify-center items-center   w-10 h-10 m-8 rounded-full bg-white" ></div>
      </div>
    </div>
  );
};

export default Spinner;
