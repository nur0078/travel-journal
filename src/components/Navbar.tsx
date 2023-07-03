import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className=" bg-red-600 shadow-md py-3 px-0 flex justify-center gap-2 text-white">
      <FontAwesomeIcon icon={faEarthEurope} className="h-8" />
      <h1 className="pt-1  font-semibold tracking-tighter">my Travels.</h1>
    </nav>
  );
};

export default Navbar;
