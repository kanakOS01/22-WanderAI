import SignupNav from "./SignUpNav";
import SigninNav from "./SigninNav";
import HomeNav from "./HomeNav";
import DefaultNav from "./DefaultNav";
const Navbar = () => {

  const page = window.location.href.split("/")[window.location.href.split("/").length - 1];
  if (page === "") return (<HomeNav />);
  else if (page === "signup") return (<SignupNav/>);
  else if (page === "login") return (<SigninNav/>);
  else return (<DefaultNav />);
  };
export default Navbar;