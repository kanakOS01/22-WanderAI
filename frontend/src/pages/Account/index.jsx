import { logout } from "../../state/user";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

const Account = () => {
  const itenaries = useSelector((state) => state.itenrary);
  const [content, setContent] = useState("");
  const { username } = useSelector((state) => state.user);
  const descModalRef = useRef(null);
  const handleDescClick = (idx) => {
    setContent(itenaries[idx].desc);
    const modal = new bootstrap.Modal(descModalRef.current);
    modal.show();
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <div
        style={{
          width: "70%",
          margin: "auto",
          marginTop: "2em",
          overflowX: "hidden",
        }}
      >
        <div className="md:flex md:items-center md:justify">
          <div className="flex justify-between items-center w-3/4">
            <div className="flex items-center justify-center md:justify-start">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="3em"
                width="3em"
              >
                <path d="M12 2a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm9 11v-1a7 7 0 00-7-7h-4a7 7 0 00-7 7v1h2v-1a5 5 0 015-5h4a5 5 0 015 5v1z" />
              </svg>
              <div className="md:ml-4 mt-4 md:mt-0 m-auto pb-3 pl-3">
                <h2 className="text-xl font-semibold pb-0.5">
                  {username && username[0].toUpperCase()}
                  {username && username.slice(1, username.length)}
                </h2>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger bg-red-600"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Statistics</h3>
          <div className="mt-4 flex flex-wrap justify-between">
            <div className="w-full sm:w-auto flex items-center justify-center border-t border-gray-200 sm:border-t-0 py-2 sm:py-0 m-auto">
              <span className="block text-lg font-semibold text-red-400">
                24
              </span>
              <span className="text-sm text-gray-600 px-3">Friends</span>
            </div>
            <div className="w-full sm:w-auto flex items-center justify-center border-t border-gray-200 sm:border-t-0 py-2 sm:py-0 m-auto">
              <span className="block text-lg font-semibold text-red-400">
                5
              </span>
              <span className="text-sm text-gray-600 px-3">Trips</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Document Storage</h3>
          <div className="mt-4">
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
              <h4 className="text-lg font-semibold">Passport</h4>
              <p className="text-sm text-gray-600">
                Expiry Date: January 1st, 2025
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="bg-gray-200 p-4 rounded-md shadow-md">
            <h4 className="text-lg font-semibold">Visa</h4>
            <p className="text-sm text-gray-600">
              Expiry Date: January 1st, 2025
            </p>
          </div>
        </div>
        <div className="mt-6">
          <div className="bg-gray-200 p-4 rounded-md shadow-md">
            <h4 className="text-lg font-semibold">Aadhar Card</h4>
            <p className="text-sm text-gray-600">.pdf</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="bg-gray-200 p-4 rounded-md shadow-md">
            <h4 className="text-lg font-semibold">Photographs</h4>
            <p className="text-sm text-gray-600">.jpg</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="bg-gray-200 p-4 rounded-md shadow-md">
            <h4 className="text-lg font-semibold">Driving License</h4>
            <p className="text-sm text-gray-600">
              Expiry Date: January 1st, 2025
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-center">
            Itenories History
          </h3>
          {itenaries &&
            itenaries.map((itenrary, index) => {
              return (
                <div
                  className="w-full rounded-md border my-4 hover:bg-slate-100 cursor-pointer"
                  key={index}
                >
                  <div className="p-4">
                    <pre
                      onClick={() => handleDescClick(index)}
                      className="mt-3 text-sm text-gray-600"
                      style={{ height: "300px", overflow: "hidden" }}
                    >
                      {itenrary.desc}
                    </pre>
                  </div>
                </div>
              );
            })}
        </div>
        <div style={{ height: "15em" }}></div>
      </div>
      <div
        className="modal fade"
        ref={descModalRef}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">Are you sure you want to logout?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger bg-red-500"
                onClick={handleSignOut}
                data-bs-dismiss="modal"
              >
                yes Log me out
              </button>
              <button
                type="button"
                className="btn btn-success bg-green-500"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        ref={descModalRef}
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <pre>{content}</pre>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger bg-red-500"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Account;
