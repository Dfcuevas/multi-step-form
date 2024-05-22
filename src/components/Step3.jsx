import { useState } from "react";

/* eslint-disable react/prop-types */
const Step3 = ({ prevStep, nextStep, setFormData, formData, checked }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const addons = [
    {
      id: 1,
      service: "Online services",
      description: "Access to multiplayer games",
      price: {
        monthly: "$1/mo",
        yearly: "$10/yr",
      },
    },
    {
      id: 2,
      service: "Larger storage",
      description: "Extra 1TB cloud save",
      price: {
        monthly: "$2/mo",
        yearly: "$20/yr",
      },
    },
    {
      id: 3,
      service: "Customizable profile",
      description: "Custo theme on your profile",
      price: {
        monthly: "$2/mo",
        yearly: "$20/yr",
      },
    },
  ];

  const test = (addon) => {
    const inputChecked = document.getElementById(addon.service).checked;

    if (inputChecked) {
      setFormData((prevData) => ({
        ...prevData,
        addons: [
          ...prevData.addons,
          {
            service: addon.service,
            price: checked ? addon.price.yearly : addon.price.monthly,
            checked: inputChecked,
          },
        ],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        addons: prevData.addons.filter((a) => a.service !== addon.service),
      }));
    }
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className=" sm:flex sm:flex-col sm:justify-around sm:items-baseline">
      <section className="m-4 bg-White px-4 py-6 rounded-lg relative -top-[5.5rem] sm:top-0">
        <h1 className="font-bold text-2xl text-Marine-blue mb-3">
          Pick add-ons
        </h1>
        <p className="text-Cool-gray text-lg mb-4">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col gap-4">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className={`border-Light-gray border p-4 rounded-lg ${selectedIndex === addon.id && 'border-Marine-blue'}`}
              onClick={() => handleItemClick(addon.id)}
            >
              <label
                onClick={() => test(addon)}
                htmlFor={addon.service}
                className="flex gap-2 items-center justify-between"
              >
                <div className="flex gap-4 items-center">
                  <input
                    style={{
                      width: "25px",
                      height: "25px",
                    }}
                    type="checkbox"
                    name={addon.service}
                    id={addon.service}
                    checked={formData.addons.checked}
                  />
                  <div>
                    <p>{addon.service}</p>
                    <span className="text-Cool-gray">{addon.description}</span>
                  </div>
                </div>

                <span className="text-Cool-gray">
                  {checked ? addon.price.yearly : addon.price.monthly}
                </span>
              </label>
            </div>
          ))}
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

export default Step3;
