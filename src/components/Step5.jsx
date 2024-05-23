import Thanks from "/icon-thank-you.svg";

const Step5 = () => {
  return (
    <div className=" sm:flex sm:flex-col sm:justify-around sm:items-baseline">
      <section className="m-4 bg-White px-4 py-6 rounded-lg relative -top-[5.5rem] sm:top-0">
        <div className="flex flex-col items-center py-16 gap-4 md:gap-10">
          <img
            src={Thanks}
            alt="Thanks icon"
            className="flex-1  w-[60px] h-[60px] md:w-[100px] md:h-[100px] "
          />

          <h3 className="font-semibold text-Marine-blue text-2xl md:text-4xl">
            Thank you!
          </h3>
          <p className="text-center text-Cool-gray max-w-screen-sm md:text-xl">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Step5;
