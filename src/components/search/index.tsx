import { ChangeEvent, FormEvent, useState } from "react";

import Input from "components/input";

interface SearchProps {
  onSearch: (search: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
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
    <form onSubmit={handleSubmit} className="relative lg:block hidden w-1/2">
      <Input
        className="p-3 w-3/4 bg-gray-200 focus:outline-none focus:border-blue-400 focus:bg-white border-2"
        placeholder="Search here..."
        onChange={handleOnChange}
      />
    </form>
  );
}
