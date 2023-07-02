import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <FontAwesomeIcon icon={faEarthEurope} className="nav--logo" />
      <h1 className="nav--title">my travel journal.</h1>
    </nav>
  );
};

export default Navbar;
