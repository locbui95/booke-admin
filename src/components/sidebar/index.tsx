import { AiFillAppstore, AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillInboxesFill } from "react-icons/bs";
import logo from "../../assets/logo.png";

export default function Sidebar() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="fixed top-0 left-0 w-80 p-5 bottom-0 bg-white shadow-xl">
        <div className="my-10 text-4xl text-center">
          <a className="flex justify-center">
            <img className="w-40" src={logo} alt="" />
          </a>
        </div>
        <nav className="pt-7 text-center">
          <a className="flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover:bg-blue-400 hover:text-white transition-all">
            <AiFillAppstore className="text-2xl mx-3" /> Dashboard
          </a>
          <a className="flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover:bg-blue-400 hover:text-white transition-all">
            <AiOutlineMenuUnfold className="text-2xl mx-3" />
            Management Category
          </a>
          <a className="flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover:bg-blue-400 hover:text-white transition-all">
            <BsFillInboxesFill className="text-2xl mx-3" />
            Management Product
          </a>
        </nav>
      </div>
    </div>
  );
}
