import { useEffect, useRef, useState } from "react";
import { sendEmail } from "../../utils/sendEmail";
import axios from "axios";
import { useSelector } from "react-redux";
import "./style.css";

const EmergencyModal = () => {
  const user = useSelector((state) => state.user);
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const closeRef = useRef(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [location, setLocation] = useState({
    lat: "",
    long: "",
  });
  const [fetch, setFetch] = useState({
    fetch1: false,
    fetch2: false,
  });

  useEffect(() => {
    try {
      axios
        .get("https://geolocation-db.com/json/")
        .then((response) => {
          setLocation({
            lat: response.data.latitude,
            long: response.data.longitude,
          });
          setFetch({ ...fetch, fetch1: true });
        })
        .catch(function (err) {
          setFetch({ ...fetch, fetch1: true });
        });
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }, []);
  useEffect(() => {
    if (formRef && formRef.current && user && user.username) {
      formRef.current["exampleInputEmail1"].value = user.username;
      setFetch({ ...fetch, fetch2: true });
    }
  }, [formRef.current, user.token]);

  const showError = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleFormSubmit = async (e) => {
    if (formRef.current) {
      e.preventDefault();
      if (!formRef.current["exampleInputEmail1"].value) {
        showError("Please fill Name field");
        return;
      }
      if (!formRef.current["exampleInputPassword1"].value) {
        showError("Please fill in some description");
        return;
      }
      const values = {
        name: formRef.current["exampleInputEmail1"].value,
        description: formRef.current["exampleInputPassword1"].value,
        loc:
          "https://www.google.com/maps/place/" +
          location.lat +
          "+" +
          location.long,
      };
      try {
        const a = await sendEmail(values);
        if (a === "success") {
          setSuccess("Email sent successfully");
          closeRef.current.click();
        } else {
          showError("Failed to send email");
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  };
  const isFetched = fetch.fetch1 && fetch.fetch2;
  return (
    <>
      <div
        className={"modal fade "}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Emergency Contact Details
              </h1>
            </div>
            <div className="modal-body">
              {!fetch.fetch1 && fetch.fetch2 ? (
                <div className="fetching">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span>Auto-filling details</span>
                </div>
              ) : (
                <form
                  autoComplete="false;"
                  id="emergency-form"
                  onSubmit={handleFormSubmit}
                  ref={formRef}
                >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="coordinates" className="form-label">
                      Coordinates
                    </label>
                    <div className="flex justify-around">
                      <input
                        type="number"
                        className="form-control w-1/3"
                        id="coordinates1"
                        value={location.lat}
                        onChange={(e) =>
                          setLocation({ ...location, lat: e.target.value })
                        }
                        required
                      />
                      <input
                        type="number"
                        className="form-control w-1/3"
                        id="coordinates2"
                        value={location.long}
                        onChange={(e) =>
                          setLocation({ ...location, long: e.target.value })
                        }
                        required
                      />
                    </div>
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <div type="text" className="form-control" id="location">
                      {"https://www.google.com/maps/place/" +
                        location.lat +
                        "+" +
                        location.long}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      required
                    />
                  </div>
                </form>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "green",
                  color: "white",
                }}
                onClick={handleFormSubmit}
              >
                Send
              </button>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
                style={{
                  backgroundColor: "red",
                  color: "white",
                }}
                ref={closeRef}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        {message && (
          <div
            className="alert alert-danger"
            role="alert"
            style={{
              position: "absolute",
              bottom: "0",
              right: "10px",
            }}
          >
            {message}
          </div>
        )}
      </div>
      {success && (
        <div
          className="alert alert-success"
          role="alert"
          style={{
            position: "absolute",
            bottom: "0",
            right: "10px",
          }}
        >
          {success}
        </div>
      )}
    </>
  );
};

export default EmergencyModal;
