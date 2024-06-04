import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start all"></div>
      <div className="">
        <ul className="menu menu-horizontal gap-2 text-base font-semibold">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
