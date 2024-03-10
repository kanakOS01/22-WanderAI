import axios from "axios";
import { useEffect, useState } from "react";
import DisplaItenary from "./DisplaItenary";
import Steps from "./Steps";
import { aiServerUrl, appServerUrl } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { set as setQuery } from "../../state/searchquery";
const Modal2 = ({ name, image, desc }) => {
  const user = useSelector((state) => state.user);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [itenary, setItenary] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const location = useSelector((state) => state.searchquery);
  const dispatch = useDispatch();
  const setLocation = (val) => {
    dispatch(setQuery(val));
  };
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState("solo");
  const [budget, setBudget] = useState("");
  useEffect(() => {
    setIsLoaded(false);
    setItenary("");
    setContentLoaded(false);
    if (name != "") setLocation(name);
  }, [name, desc, image]);
  useEffect(() => {
    setIsValid(
      location != "" &&
        startDate != "" &&
        endDate != "" &&
        type != "" &&
        new Date(startDate) < new Date(endDate)
    );
  }, [location, startDate, endDate, type]);
  useEffect(() => {
    if (isLoaded) return;
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  }, [isLoaded]);
  const handleFetchItenary = async () => {
    if (!isValid) return;
    setContentLoaded(true);
    const options = {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    // try {
    const data = { location, startDate, endDate, type, budget };
    const res = await axios.post(aiServerUrl + "/get_itinerary", data, options);
    setItenary(res.data.itinerary);
    setContentLoaded(false);
    const resp = await axios.post(
      appServerUrl + "/api/_v1/itenary",
      {desc:res.data.itinerary},
      {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }
    );
    console.log(resp.data);
    // } catch (e) {
    //   console.log(e.message);
    // }
  };
  return (
    <div
      className={"modal fade"}
      id="exampleModalToggle2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            width: "50em",
            position: "fixed",
            right: "50%",
            transform: "translateX(50%)",
          }}
        >
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {"Lets Plan a trip"}
            </h1>
          </div>
          <div className="modal-body" style={{ width: "100%" }}>
            {contentLoaded || itenary != "" ? (
              <DisplaItenary
                location={location}
                itenary={itenary}
                contentLoaded={contentLoaded}
              />
            ) : (
              <Steps
                name
                image={image}
                desc={desc}
                setLocation={setLocation}
                setType={setType}
                location={location}
                type={type}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                budget={budget}
                setBudget={setBudget}
              />
            )}
          </div>
          <div className="modal-footer">
            {itenary == "" && (
              <button
                type="button"
                className={
                  "btn btn-success " +
                  (isValid ? "bg-green-500" : "bg-gray-500")
                }
                onClick={handleFetchItenary}
              >
                Submit
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger bg-red-500"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal2;
