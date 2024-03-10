import "./Ham.css";
import { Link } from "react-router-dom";
const Ham = () => {
    return (
        <div className="ham">
            <button
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
            >
                <span className="material-symbols-outlined" style={{color:"#fff"}}>menu</span>
            </button>
            <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
            >
                <div className="offcanvas-header">
                    <Link to={"/"} style={{ color: "rgba(255,255,255,.7)" }} onClick={() => {
                        const offcanvas = document.getElementById("offcanvasWithBothOptions");
                        offcanvas.classList.remove("show");
                    }} >
                        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">WanderAI</h5>
                    </Link>
                    <p
                        className="close-button"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </p>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li>
                            <Link to="/home" onClick={() => {
                                const offcanvas = document.getElementById("offcanvasWithBothOptions");
                                offcanvas.classList.remove("show");
                            }}>Home</Link>
                        </li>
                        <li>
                            <Link to="/explore" onClick={() => {
                                const offcanvas = document.getElementById("offcanvasWithBothOptions");
                                offcanvas.classList.remove("show");
                            }}>Explore</Link>
                        </li>
                        <li>
                            <Link to="/map" onClick={() => {
                                const offcanvas = document.getElementById("offcanvasWithBothOptions");
                                offcanvas.classList.remove("show");
                            }}>Maps</Link>
                        </li>
                        <li>
                            <Link to="/map" onClick={() => {
                                const offcanvas = document.getElementById("offcanvasWithBothOptions");
                                offcanvas.classList.remove("show");
                            }}>Blogs</Link>
                        </li>
                        <li>
                            <Link to="/account" onClick={() => {
                                const offcanvas = document.getElementById("offcanvasWithBothOptions");
                                offcanvas.classList.remove("show");
                            }}>Account</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
export default Ham;