import { AiOutlinePlus } from "react-icons/ai";

import { useState } from "react";

import Button from "components/button";
import Search from "components/search";
import Category from "types/category";
import ListCategories from "modules/categories/list";
import Form from "./form";

const valueDemo: Category = {
  id: 1,
  name: "Sweet Book",
  description: "Sweet Book decreption",
  status: true
};

export default function CategoryModule() {
  const [mode, setMode] = useState<string>("create");
  const handleSearch = (search: string) => {
    console.log(search);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hanldeClickAddButon = () => {
    setIsOpen(true);
    setMode("create");
  };
  const hanldeClickEditButon = () => {
    setIsOpen(true);
    setMode("edit");
  };
  const hanldeClickClose = (): void => {
    setIsOpen(false);
  };
  const hanldeClickConfirm = (): void => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex items-center bg-white p-8 shadow-sm justify-between">
        <p className="font-bold text-xl">Category</p>
        <div className="w-3/4 flex justify-end">
          <Search onSearch={handleSearch} />
          <Button
            loading={false}
            onClick={hanldeClickAddButon}
            className="flex p-3 bg-blue-400 hover:bg-blue-500 text-white"
          >
            <AiOutlinePlus className="pr-2 text-2xl font-bold" />
            Add Category
          </Button>
          <Form
            isOpen={isOpen}
            mode={mode}
            data={valueDemo}
            hanldeClickClose={hanldeClickClose}
            hanldeClickConfirm={hanldeClickConfirm}
          />
        </div>
      </div>
      <div className="mt-10">
        <ListCategories />
      </div>
    </div>
  );
}
