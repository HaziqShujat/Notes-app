import React from "react";

function Errormodel({ title, message, handleError }) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-75 z-50">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 z-50 overflow-hidden bg-white rounded-lg">
        <div className="bg-red-800 py-4 rounded-t-lg">
          <h2 className="text-white text-center">{title}</h2>
        </div>
        <div className="p-4">
          <p className="text-center">{message}</p>
        </div>
        <div className="p-4 flex justify-end rounded-b-lg">
          <button
            className="bg-red-600  hover:bg-red-600  rounded-lg text-white px-4 py-2"
            onClick={handleError}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default Errormodel;
