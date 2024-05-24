/* eslint-disable react/prop-types */

const Step1 = ({ formData, nextStep, handleChange }) => {
  return (
    <div className=" sm:flex sm:flex-col sm:justify-around sm:items-baseline">
      <section className="m-4 bg-White px-4 py-6 rounded-lg relative -top-[5.5rem] sm:top-0">
        <h1 className="font-bold text-2xl text-Marine-blue mb-3">
          Personal info
        </h1>
        <p className="text-Cool-gray text-lg mb-4">
          Please provide your name, email address, and phone number.
        </p>
        <div className="mb-3">
          <label htmlFor="name" className="text-Marine-blue">
            Name
            <input
              className="block border-[1px] border-Light-gray w-full p-2 rounded-sm mt-1"
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-Marine-blue">
            Email Address
            <input
              className="block border-[1px] border-Light-gray w-full p-2 rounded-sm mt-1"
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone" className="text-Marine-blue">
            Phone Number
            <input
              className="block border-[1px] border-Light-gray w-full p-2 rounded-sm mt-1"
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. +1234567890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </section>

      <button
        className="m-4 bg-Marine-blue p-2 text-White text-sm absolute sm:relative right-0 -bottom-[4.5rem] sm:bottom-0 sm:px-6 sm:py-3 rounded-md sm:self-end sm:mr-8"
        onClick={nextStep}
      >
        Next Step
      </button>
    </div>
  );
};

export default Step1;
