/* eslint-disable react/prop-types */
import Arcade from "/icon-arcade.svg";
import Advanced from "/icon-advanced.svg";
import Pro from "/icon-pro.svg";
import { useState } from "react";

const planData = [
  {
    id: 1,
    name: "Arcade",
    icon: Arcade,
    price: {
      monthly: "$9/mo",
      yearly: "$90/yr",
    },
  },
  {
    id: 2,
    name: "Advanced",
    icon: Advanced,
    price: {
      monthly: "$12/mo",
      yearly: "$120/yr",
    },
  },
  {
    id: 3,
    name: "Pro",
    icon: Pro,
    price: {
      monthly: "$15/mo",
      yearly: "$150/yr",
    },
  },
];

const Step2 = ({ nextStep, prevStep, setFormData, checked, setChecked }) => {
  const handleClick = (e) => {
    setChecked(e.target.checked);
  };

  const handleData = (data) => {
    setFormData((prevState) => ({
      ...prevState,
      plan: {
        duration: checked ? "Yearly" : "Monthly",
        planType: data.name,
        price: checked ? data.price.yearly : data.price.monthly,
      },
    }));
  };

  return (
    <div className=" sm:flex sm:flex-col sm:justify-around sm:items-baseline">
      <section className="m-4 bg-White px-4 py-6 rounded-lg relative -top-[5.5rem] sm:top-0">
        <h1 className="font-bold text-2xl text-Marine-blue mb-3">
          Select your plan
        </h1>
        <p className="text-Cool-gray text-lg mb-4">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col gap-4">
          {planData.map((data) => (
            <button
              key={data.id}
              className="border border-Light-gray flex p-4 rounded-lg gap-3 items-start"
              onClick={() => handleData(data)}
            >
              <img src={data.icon} alt={data.name} />
              <div className={`flex flex-col items-start`}>
                <p className="text-Marine-blue font-bold">{data.name}</p>
                <span className="text-Cool-gray">
                  {checked ? data.price.yearly : data.price.monthly}
                </span>
                <span className={`${!checked && "hidden"} text-Marine-blue`}>
                  2 months free
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="flex gap-4 items-center justify-center mt-10 pb-6">
          <span className={`${!checked && "text-Cool-gray"}`}>Monthly</span>
          <label className="switch">
            <input type="checkbox" onClick={handleClick} />
            <span className="slider"></span>
          </label>
          <span className={`${checked && "text-Cool-gray"}`}>Yearly</span>
        </div>
      </section>
      <div className="flex justify-between w-full">
        <button
          className="m-4  p-2 text-Cool-gray hover:text-Marine-blue rounded-sm text-sm absolute sm:relative left-0 -bottom-[4.5rem] sm:bottom-0 sm:px-6 sm:py-3 sm:rounded-lg sm:self-start sm:mr-8 sm:inline-block"
          onClick={prevStep}
        >
          Go Back
        </button>
        <button
          className="m-4 bg-Marine-blue p-2 text-White rounded-sm text-sm absolute sm:relative right-0 -bottom-[4.5rem] sm:bottom-0 sm:px-6 sm:py-3 sm:rounded-lg sm:self-end sm:mr-8 sm:inline-block"
          onClick={nextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
