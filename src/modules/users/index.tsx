import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

import Button from "components/button";
import Search from "components/search";
import UsersList from "./list";

export default function UserList() {
  const [keySearch, setKeySearch] = useState<string>("");

  const handleSearch = (search: string) => {
    setKeySearch(search);

  return (
    <div>
      <div className="flex items-center bg-white p-8 shadow-md rounded-lg justify-between">
        <p className="font-bold text-xl">User</p>
        <div className="w-3/4 flex justify-end">
          <Search onSearch={handleSearch} />
          <Button
            loading={false}
            className="flex p-3 bg-blue-400 hover:bg-blue-500 text-white"
          >
            <AiOutlinePlus className="pr-2 text-2xl font-bold" />
            Add User
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <UsersList keySearch={keySearch} />
      </div>
    </div>
  );
}
