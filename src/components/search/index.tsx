import { ChangeEvent } from "react";

import Input from "components/input";

interface SearchProps {
  onSearch: (search: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative lg:block hidden w-1/2">
      <Input
        className="p-3 w-3/4 bg-gray-200 focus:outline-none focus:border-blue-400 focus:bg-white border-2"
        placeholder="Search name..."
        onChange={handleChange}
      />
    </div>
  );
}
