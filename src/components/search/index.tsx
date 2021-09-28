import { FaSearch } from "react-icons/fa";
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FormEvent,
  useState
} from "react";

interface SearchProps extends ComponentPropsWithoutRef<"input"> {
  onSearch: (search: string) => void;
}

export default function Search({ onSearch, ...props }: SearchProps) {
  const [value, setvalue] = useState<string>("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setvalue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value);
    setvalue("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative lg:block hidden">
      <input
        className="bg-white h-12 w-80 pl-4 pr-8 rounded-2xl shadow-md text-md focus:outline-none"
        type="text"
        name="search"
        placeholder="Search here..."
        onChange={handleOnChange}
        value={value}
        {...props}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mx-3 text-gray-400 text-xl "
      >
        <FaSearch />
      </button>
    </form>
  );
}
