import BackgroundImage from "./backgroundimg";
const Home = () => {
  return (
    <div className="flex-wrap">
      <div className=" font-sans leading-normal tracking-normal mt-16">
        <section className=" py-10 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Your Dashboard
            </h1>
            <p className="text-lg mb-8">
              Here you can manage your bookings and personalize your travel
              experience.
            </p>
            <a
              href="#"
              className="bg-black hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full"
            >
              Book Now
            </a>
          </div>
        </section>
        <BackgroundImage />
        <div className=" py-10 text-center flex-wrap">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Talk to our AI</h2>
            <p className="text-lg mb-8">
              Have a question or need assistance? Chat with our AI assistant.
            </p>
            <a
              href="#"
              className="bg-black hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full">
              Chat Now
            </a>
          </div>
        </div>
      </div>
    <div style={{ height: "15em" }}></div>
    </div>
  );
};
export default Home;
