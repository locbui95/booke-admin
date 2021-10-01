import { AiOutlinePlus } from "react-icons/ai";

import Button from "components/button";
import Search from "components/search";

// import Search from "components/search";

export default function Categories() {
  const handleSearch = (search: string) => {
    console.log(search);
  };

  return (
    <div>
      <div className="flex items-center bg-white p-8 shadow-sm justify-between">
        <p className="font-bold text-xl">Category</p>
        <div className="w-3/4 flex justify-end">
          <Search onSearch={handleSearch} />
          <Button
            loading={false}
            className="flex p-3 bg-blue-400 hover:bg-blue-500 text-white"
          >
            <AiOutlinePlus className="pr-2 text-2xl font-bold" />
            Add Category
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <p>List product</p>
      </div>
    </div>
  );
}
