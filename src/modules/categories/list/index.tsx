import { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategories } from "store/categories/action";
import Button from "components/button";
import Spinner from "components/spinner";
import Table from "components/table";
import Popup from "components/popup";
import Category from "types/category";
import TableHead from "./table-head";

const ListCategories = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(0);
  const { categories, loading } = useSelector(
    (state: RootState) => state.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleClickClose = (id: number) => {
    setCategoryId(id);
    setIsOpen(!isOpen);
  };

  const handleClickRemove = () => {
    setIsOpen(false);
    dispatch(deleteCategory(categoryId));
  };

  const renderRows = (category: Category) => (
    <tr key={category.id} className="py-2">
      <td className="text-center">{category.id}</td>
      <td className="pl-5">{category.name}</td>
      <td className="my-24 max-w-md p-2.5 h-auto">
        <p className="truncate w-full px-6 py-4 mx-auto">
          {category.description}
        </p>
      </td>
      <td>
        {category.status ? (
          <p className="p-1 text-center border border-[#019707] rounded bg-[#019707] text-xs text-white">
            Actived
          </p>
        ) : (
          <p className="p-1 text-center border border-[#fb0b12] rounded bg-[#fb0b12] text-xs text-white">
            Unactived
          </p>
        )}
      </td>
      <td className="px-5">
        <Button className="bg-white text-yellow-600 text-xl pl-2 pr-7 hover:text-yellow-800">
          <BsPencilSquare />
        </Button>
        <Button
          className="bg-white text-red-600 text-xl hover:text-red-800"
          onClick={() => handleClickClose(category.id)}
        >
          <BsTrash />
        </Button>
      </td>
    </tr>
  );

  return (
    <>
      {!loading ? (
        <Table data={categories} head={<TableHead />} renderRows={renderRows} />
      ) : (
        <div className=" flex justify-center items-center relative">
          <Spinner />
        </div>
      )}
      <Popup
        message="Are you sure to delete this record ?"
        title="Confirm Information"
        isOpen={isOpen}
        onConfirm={handleClickRemove}
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default ListCategories;
