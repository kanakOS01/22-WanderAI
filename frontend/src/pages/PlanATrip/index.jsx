import "./Plan.css";
const PlanATrip = () => {
  return (
    <div className="flex justify-center flex-col items-center pt-24 md:px-12">
      <h1 className="mt-5 text-2xl font-medium md:mt-12 text-3xl">
        Plan your Trip
      </h1>
      <form className="mt-12 flex w-full max-w-xl flex-col gap-14">
        <div>
          <p className="mb-4 text-base md: text-lg">Where to?</p>
          <div>
            <div className="text-base md: text-lg">
              <div>
                <div className="relative flex flex-col items-start gap-1.5 md:flex-row md:items-center md: gap-3">
                  <div className="w-full max-w-xl rounded-md">
                    <div className="relative w-full">
                      <select
                        className="form-select"
                        aria-label="Default select example">
                        <option selected>Select a City</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <button type="button"></button>
                </div>
              </div>
            </div>
            <div>
              <div className="ml-6 h-5 border-l-2 border-solid border-gray-200"></div>
              <button className="flex items-center gap-1.5 rounded-lg  bg-red-400 px-3 py-1.5 text-sm text-white transition-colors md:ml-1.5">
                Add Destination
              </button>
            </div>
          </div>
          <br />
          <div className="relative flex min-w-max cursor-pointer items-center gap-1 rounded-md bg-gray-200 px-2.5 py-1.5 text-sm transition-colors hover:bg-gray-300 md:px-3 md:py-3 text-gray-500 hover:text-gray-600 w-10 ">
            <span>Select Dates</span>
          </div>
          <div>
            <p className="mb-4 text-base md:text-lg">
              How many people are going?
            </p>
            <div className="relative flex max-h-[53px]">
              <p className="flex w-full items-center justify-between gap-2 rounded-lg border border-solid border-gray-300 px-4 py-2.5 text-base outline-none">
                <div className="flex items-center gap-2">
                  <span className="min-w-4 rounded-md bg-gray-200 p-1 px-3 text-center text-sm">
                    1
                  </span>
                  "Person"
                </div>
                <div className="flex gap-2">
                  <button className="flex min-w-42 items-center justify-center rounded-md border border-solid border-gray-300 p-1 px-3 py-1.5 text-gray-500 transition-colors hover:border-gray-400 md:hover:bg-gray-100 md: hover:text-gray-700">
                    <p className="mb-2 text-xl leading-15"></p>
                  </button>
                  <button className="flex min-w-42 items-center justify-center rounded-md border border-solid border-gray-300 p-1 px-3 py-1.5 text-gray-500 transition-colors hover: border-gray-400 md:hover: bg-gray-100 md: hover: text-gray-700">
                    <p className=" mb-2 text-xl leading-15"></p>
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-md border border-solid border-gray-300 px-4 py-2.5 text-base transition-colors">
          <span> First time visiting?</span>
          <div className="flex items-center gap-2 text-xs">
            <button className="relative rounded-md border border-solid border-gray-300 px-3 py-1 text-gray-500 transition-colors hover:bg-gray-100 md:hover:border-gray-400 md:hover:text-gray-700">
              Yes
            </button>
            <button className="relative rounded-md border border-solid border-gray-300 px-3 py-1 text-gray-500 transition-colors hover:bg-gray-100 md:hover:border-gray-400 md:hover:text-gray-700">
              No
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-4 text-base md: text-lg">
            <h2>
              "How much do you plan to spend on the trip?"
              <span className="ml-2 text-base text-gray-400">(Optional)</span>
            </h2>
            <p className=" mt-1 text-base text-gray-400">
              "Consider "
              <span className="text-black">Stay + Activities + Food</span>
            </p>
          </div>
          <div className="w-full">
            <div className="relative">
              <button
                className=" mt-0 flex w-full cursor-pointer flex-col gap-5 rounded-md border border-solid border-solid border-white px-5 py-2.5 hover: border-gray-400"
                type="button"
                aria-haspopup="listbox "></button>
                <select
                className="form-select"
                aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-1 max-w-xl text-base md: text-lg">
            "Are you travelling for a special occasion"
            <span className="ml-2 text-base text-gray-400">(Optional)</span>
          </h2>
        </div>
        <select className="form-select" aria-label="Default select example">
          <option selected>Select your occasion</option>
          <option value="1">Honeymoon</option>
          <option value="2">Adventure</option>
          <option value="3">Event</option>
          <option value="4">Business</option>
          <option value="5">None</option>
        </select>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mt-8 w-fit items-center rounded-full bg-black px-5 py-2 text-white transition-colors hover: bg-gray-900 disabled: cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500">
            Create New Trip
          </button>
        </div>
      </form>
      <div style={{ height: "15em" }}></div>
    </div>
  );
};
export default PlanATrip;