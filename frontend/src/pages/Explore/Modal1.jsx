const Modal1 = ({ name, image, desc }) => {
  return (
    <div
      className="modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered" >
        <div className="modal-content" style={{width:"50em",position:"fixed",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"}}>
          <div className="modal-body"
            style={{
              height:"30em",
              width:"50em",
              color: "#fff",
              backgroundSize: "cover", borderRadius: "10px",
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${image})`,
            }}
          >
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
              {name}
            </h1>
            {desc}
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Close
            </button>
            <button
              className="btn btn-primary"
              data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal"
            >
              Plan a trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal1;