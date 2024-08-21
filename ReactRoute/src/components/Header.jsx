import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
