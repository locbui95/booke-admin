import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="relative lg:block hidden">
      <input
        className="bg-white h-12 w-80 pl-4 pr-8 rounded-2xl shadow-md text-md focus:outline-none"
        type="search"
        name="search"
        placeholder="Search here..."
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mx-3 text-gray-400 text-xl"
      >
        <FaSearch />
      </button>
    </div>
  );
}
