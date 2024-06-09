import React from "react";

const BMIUI = () => {
  return (
    <div className="w-96 m-auto bg-blue-1000 p-3 rounded-lg">
      <h1 className="text-blue-300 text-center text-3xl font-semibold mb-10">
        BMI Calculator
      </h1>
      <form className="">
        <div className="flex flex-col w-full text-white mb-7">
          <label htmlFor="weight" className="capitalize  text-sm mb-1">
            weight (lbs)
          </label>
          <input
            type="text"
            name=""
            id="weight"
            className="border-none h-8 rounded p-2 text-gray-700 text-sm focus:outline-none focus:bg-blue-200 transition-all ease-in-out duration-500 font-semibold"
          />
        </div>
        <div className="flex flex-col w-full text-white mb-7">
          <label htmlFor="height" className="capitalize  text-sm mb-1">
            height (in)
          </label>
          <input
            type="text"
            name=""
            id="height"
            className="border-none h-8 rounded p-2 text-gray-700 text-sm focus:focus:outline-none focus:bg-blue-200 transition-all ease-in-out duration-500 font-semibold"
          />
        </div>
        <div>
          <button className="bg-blue-900 p-2 font-semibold rounded btn pr-2 text-white">
            calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default BMIUI;
