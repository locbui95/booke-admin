import { AiOutlinePlus } from "react-icons/ai";

import { useState } from "react";

import Button from "components/button";
import Search from "components/search";
import Category from "types/category";
import CategoriesList from "modules/categories/list";
import Form from "./form";

export default function CategoryList() {
  const [mode, setMode] = useState<string>("create");
  const [categoryRow, setCategoryRow] = useState<Category>({
    id: 0,
    name: "",
    description: "",
    status: true
  });
  const [searchName, setSearchName] = useState<string>("");

  const handleSearch = (search: string) => {
    setSearchName(search);
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hanldeClickAddButon = (): void => {
    setIsOpen(true);
    setMode("create");
  };
  const onClose = (): void => {
    setIsOpen(false);
  };
  const hanldeClickEditButon = (value: Category): void => {
    setCategoryRow(value);
    setIsOpen(true);
    setMode("edit");
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
            categoryRow={categoryRow}
            onClose={onClose}
          />
        </div>
      </div>
      <div className="mt-10">
        <CategoriesList
          searchName={searchName}
          hanldeClickEditButon={hanldeClickEditButon}
        />
      </div>
    </div>
  );
}
