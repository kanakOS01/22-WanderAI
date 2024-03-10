import { motion, useMotionValue } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../../state/chat";
import { set as setQuery } from "../../state/searchquery";

const DefaultNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchquery);
  const searchRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const dragY = useMotionValue(0);
  const dragStartY = useMotionValue(0);
  const dragThreshold = 50; // Adjust as needed

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.value = search;
      searchRef.current.focus();
      searchRef.current.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          handeSearch();
        }
      });
    }
  }, [searchRef]);

  const handleDragStart = (_, info) => {
    dragStartY.set(info.point.y);
  };

  const handleDragEnd = () => {
    const dragDistance = dragY.get() - dragStartY.get();
    if (Math.abs(dragDistance) > dragThreshold) {
      setExpanded(!expanded);
    }
  };

  const handeSearch = () => {
    const search = searchRef.current?.value;
    if (search) {
      navigate("/explore");
      dispatch(setQuery(search));
      setTimeout(() => {
        const modal = new bootstrap.Modal(
          document.getElementById("exampleModalToggle2"),
          {
            keyboard: false,
          }
        );
        modal.show();
      }, window.location.href.includes("explore")?0:2000);
    }
  };

  return (
    <motion.div className="nav-home nav">
      <div className={`content ${expanded ? "expanded" : "expanded-not"}`}>
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0} // Disable elastic effect for smoother dragging
          className="top"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="slider"></div>
        </motion.div>
        <div className="search">
          <input
            className="left"
            ref={searchRef}
            type="text"
            style={{ color: "#000" }}
            placeholder="Search a place"
            value={search}
            onChange={(e) => {
              dispatch(setQuery(e.target.value));
            }}
          />
          <span
            className="material-symbols-outlined right"
            onClick={handeSearch}
          >
            add_circle
          </span>
        </div>
        <div className="icons">
          <Link to={"/home"} onClick={() => setExpanded(false)}>
            <span className="material-symbols-outlined">home</span>
            <p>home</p>
          </Link>
          <Link to={"/map"} onClick={() => setExpanded(false)}>
            <span className="material-symbols-outlined">map</span>
            <p>Map</p>
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropa"
            onClick={() => setExpanded(false)}
          >
            <span className="material-symbols-outlined">Translate</span>
            <p>Translator</p>
          </Link>
          <a
            onClick={() => {
              dispatch(toggleVisibility());
              setExpanded(false);
            }}
          >
            <span className="material-symbols-outlined">Chat</span>
            <p>Chat</p>
          </a>
          <Link to={"/blogs"} onClick={() => setExpanded(false)}>
            <span className="material-symbols-outlined">edit_calendar</span>
            <p>Blog</p>
          </Link>
          <Link to={"/explore"} onClick={() => setExpanded(false)}>
            <span className="material-symbols-outlined">Explore</span>
            <p>Explore</p>
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => setExpanded(false)}
          >
            {/* <button type="button" className="btn btn-primary">
    Launch static backdrop modal
  </button> */}
            <span className="material-symbols-outlined">call</span>
            <p>Emergency</p>
          </Link>
          <Link to={"/account"} onClick={() => setExpanded(false)}>
            <span className="material-symbols-outlined">person</span>
            <p>Account</p>
          </Link>
        </div>
        ;
      </div>
    </motion.div>
  );
};
export default DefaultNav;
