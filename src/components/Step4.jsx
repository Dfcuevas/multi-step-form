/* eslint-disable react/prop-types */
const Step4 = ({ checked, nextStep, prevStep, formData }) => {
  console.log(formData);
  return (
    <div className=" sm:flex sm:flex-col sm:justify-around sm:items-baseline">
      <section className="m-4 bg-White px-4 py-6 rounded-lg relative -top-[5.5rem] sm:top-0">
        <h1 className="font-bold text-2xl text-Marine-blue mb-3">
          Finishing up
        </h1>
        <p className="text-Cool-gray text-lg mb-4">
          Double-check everything looks OK before confirming.
        </p>
        <div>
          <div className="bg-Magnolia p-4">
            <div className="border-b">
              <div>
                <p>
                  {formData.plan.planType}({formData.plan.duration})
                  <span className="underline">Change</span>
                </p>
              </div>
              <span>{formData.plan.price}</span>
            </div>
            <div>
              {formData.addons.map((item) => (
                <div
                  className="flex justify-between items-center"
                  key={item.service}
                >
                  <span>{item.service}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p>{checked ? "(per year)" : "(per month)"}</p>
            <span>+$12/{checked ? "yr" : "mo"}</span>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-between sm:pl-0 sm:pr-10 items-center">
        <button
          className="m-4  p-2 text-Cool-gray hover:text-Marine-blue rounded-sm text-sm absolute sm:relative left-0 -bottom-[4.5rem] sm:bottom-0 sm:pl-0 sm:py-3 sm:rounded-lg sm:self-start sm:m-0 sm:inline-block"
          onClick={prevStep}
        >
          Go Back
        </button>
        <button
          className="m-4 bg-Marine-blue p-2 text-White  text-sm absolute sm:relative right-0 -bottom-[4.5rem] sm:bottom-0 sm:px-6 sm:py-3 rounded-lg sm:self-end sm:m-0"
          onClick={nextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step4;
