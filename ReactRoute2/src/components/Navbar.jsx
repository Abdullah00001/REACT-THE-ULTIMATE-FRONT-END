import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/Posts"}>Posts</NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
