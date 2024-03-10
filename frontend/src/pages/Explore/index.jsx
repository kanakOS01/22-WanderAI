import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const Index = () => {
  const explore = useSelector((state) => state.explore);
  const [selectedPlace, setSelectedPlace] = useState({
    name: "",
    image: "",
    desc: "",
  });
  return (
    <>
      <div className="bg-gray-100 text-gray-800 pt-6">
        <div className="container mx-auto py-8">
          <div className="max-w mx-16">
            <h2 className="text-2xl font-semibold mb-4 text-left">Explore</h2>
            <h3 className="text-1xl font-semibold mb-4 text-left">
              {" "}
              Places you cant miss out on
            </h3>
            {/* <button className="btn btn-primary">Open first modal</button> */}
          </div>
          <br />
          <h3 className="text-1xl font-semibold mb-4 text-left">
            {" "}
            Places you cant miss out on
          </h3>
          <div className="places grid grid-cols-3 gap-4">
            {explore.map((place, idx) => {
              return (
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  key={idx}
                >
                  <img
                    src={place.image}
                    // src={"https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"}
                    alt="Image"
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 flex justify-evenly items-center">
                      {place.name}
                      <a
                        href={`https://www.google.com/search?q=${place.name}`}
                        target="_blank"
                      >
                        <img
                          width={50}
                          src={
                            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg"
                          }
                          alt=""
                        />
                      </a>
                      <button
                        className="btn btn-primary "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalToggle"
                        onClick={() => setSelectedPlace(place)}
                      >
                        Explore
                      </button>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ height: "15em" }}></div>
      </div>
      <Modal
        selectedPlace={selectedPlace}
      />
    </>
  );
};
export default Index;
