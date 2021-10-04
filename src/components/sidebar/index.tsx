import { AiFillAppstore, AiOutlineMenuUnfold, AiFillHdd } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

import logo from "assets/logo.png";
import { PATH_CATEGORIES, PATH_PRODUCTS } from "routes/routes.paths";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-80 p-5 bottom-0 bg-white shadow-xl z-50">
      <div className="my-10 text-4xl text-center">
        <Link to="/" className="flex justify-center">
          <img className="w-40" src={logo} alt="" />
        </Link>
      </div>
      <nav className="pt-7 text-center">
        <NavLink
          exact
          activeClassName="bg-blue-400 text-white transition-all"
          to="/"
          className="flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover:bg-blue-400 hover:text-white transition-all mb-1"
        >
          <AiFillAppstore className="text-2xl mx-3" /> Dashboard
        </NavLink>
        <NavLink
          exact
          activeClassName="bg-blue-400 text-white transition-all"
          to={PATH_CATEGORIES}
          className="flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover:bg-blue-400 hover:text-white transition-all mb-1"
        >
          <AiOutlineMenuUnfold className="text-2xl mx-3" />
          Category Management
        </NavLink>
        <NavLink
          activeClassName="bg-blue-400 text-white transition-all"
          to={PATH_PRODUCTS}
          className="flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover:bg-blue-400 hover:text-white transition-all mb-1"
        >
          <AiFillHdd className="text-2xl mx-3" />
          Product Management
        </NavLink>
      </nav>
    </div>
  );
}
