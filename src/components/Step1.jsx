const Step1 = () => {
  return (
    <div className="relative min-h-[90vh] bg-Magnolia">
      <div className="bg-[url('/bg-sidebar-mobile.svg')] min-w-[375px] h-[172px] bg-no-repeat bg-cover sm:bg-[url('/bg-sidebar-desktop.svg')]"></div>
      <main>
        <div className="m-6 bg-White flex flex-col gap-4 p-6 rounded-lg absolute top-20">
          <h2 className="text-Marine-blue font-bold text-2xl">Personal info</h2>
          <p className="text-Cool-gray text-md font -tracking-normal">
            Please provide your name, email address and phone number.
          </p>
          <div>
            <label htmlFor="name" className="text-Marine-blue">
              Name
              <input
                className="block border px-3 py-2 rounded-md border-Light-gray placeholder:text-Cool-gray"
                type="text"
                name="name"
                id="name"
                placeholder="e.g. Stephen King"
              />
            </label>
          </div>

          <div>
            <label htmlFor="email" className="text-Marine-blue">
              Email Address
              <input
                className="block border px-3 py-2 rounded-md border-Light-gray placeholder:text-Cool-gray"
                type="email"
                name="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
              />
            </label>
          </div>

          <div>
            <label htmlFor="phone" className="text-Marine-blue">
              Phone Number
              <input
                className="block border px-3 py-2 rounded-md border-Light-gray placeholder:text-Cool-gray"
                type="text"
                name="phone"
                id="name"
                placeholder="e.g. +1234567890"
              />
            </label>
          </div>
        </div>
        <button className="absolute -bottom-[11%] right-0">Next Step</button>
      </main>
    </div>
  );
};

export default Step1;
