import React, { useState } from "react";
import Gian from "./Gian";

const BMIUI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("0 is not a valid input");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) setMessage("Underweight 😐");
      else if (bmi >= 18.5 && bmi < 24.9) setMessage("Normal Weight 😎");
      else setMessage("Overweight 😨");
      return;
    }
  };

  return (
    <div className=" widths bg-blue-1000 p-3 rounded-lg">
      <h1 className="text-blue-300 text-center text-3xl font-semibold mb-10">
        BMI Calculator
      </h1>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full text-white mb-7">
          <label htmlFor="weight" className="capitalize  text-sm mb-1">
            weight (in pound)
          </label>
          <input
            type="number"
            name=""
            id="weight"
            className="border-none h-8 rounded p-2 text-gray-700 text-sm focus:outline-none focus:bg-white bg-blue-200 transition-all ease-in-out duration-500 font-semibold"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full text-white mb-7">
          <label htmlFor="height" className="capitalize  text-sm mb-1">
            height (in inch)
          </label>
          <input
            type="number"
            name=""
            id="height"
            className="border-none h-8 rounded p-2 text-gray-700 text-sm focus:focus:outline-none focus:bg-white bg-blue-200 transition-all ease-in-out duration-500 font-semibold"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-blue-900 p-2 font-semibold rounded btn pr-2 text-white">
            calculate
          </button>
        </div>
        <div>
          <h3 className="bg-white rounded mt-5 p-4 font-semibold">
            <p>your bmi is : {bmi}</p>
            <p>{bmi >= 25 ? <Gian /> : message}</p>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default BMIUI;
