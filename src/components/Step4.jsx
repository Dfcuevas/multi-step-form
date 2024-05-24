/* eslint-disable react/prop-types */
const Step4 = ({ checked, nextStep, prevStep, formData, setStep }) => {
  let totalPrice =
    formData.addons.reduce((acum, current) => {
      return acum + current.price;
    }, 0) + formData.plan.price;

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
          <div className="bg-Alabaster p-4 rounded-lg">
            <div className="border-b border-Light-gray flex justify-between items-center">
              <div className="flex flex-col pb-4 ">
                <p className="text-Marine-blue font-semibold">
                  {formData.plan.planType}({formData.plan.duration})
                </p>
                <span
                  className="underline text-Cool-gray cursor-pointer hover:text-Purplish-blue"
                  onClick={setStep}
                >
                  Change
                </span>
              </div>
              <span className="text-Marine-blue font-semibold">
                {checked
                  ? `$${formData.plan.price}/yr`
                  : `$${formData.plan.price}/mo`}
              </span>
            </div>
            <div>
              {formData.addons.map((item) => (
                <div
                  className="flex justify-between items-center py-4"
                  key={item.service}
                >
                  <span className="text-Cool-gray">{item.service}</span>
                  <span className="text-Marine-blue">
                    {checked ? `$${item.price}/yr` : `$${item.price}/mo`}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 pt-8 pb-4 flex justify-between">
            <p className="text-Cool-gray">
              Total {checked ? "(per year)" : "(per month)"}
            </p>
            <span className="text-Purplish-blue font-semibold">
              {checked ? `$${totalPrice}/yr` : `$${totalPrice}/mo`}
            </span>
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
