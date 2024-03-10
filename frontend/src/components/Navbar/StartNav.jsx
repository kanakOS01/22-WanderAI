import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Nav.css";
const StartNav = () => {
  return (
    <motion.div
      className="nav-start nav"
      initial={{ transform: "translateY(100%)" }}
      animate={{ transform: "translateY(-25%)" }}
      exit={{ opacity: 0, transform: "translateY(100%)" }}
    >
      <div className="content">
        <div className="head">Explore the world now</div>
        <div className="sub-head">The best travel advisor in 2023</div>
        <div className="sub-head">Plan your first trip with us</div>
        <div>
          <Link to="/signup">
            <div className="btn">Start your journey</div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default StartNav;