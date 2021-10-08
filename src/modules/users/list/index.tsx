import { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategories } from "store/categories/action";
import Button from "components/button";
import Table from "components/table";
import { getUsers } from "store/users/action";
import User from "types/user";
import Popup from "components/popup";
import Category from "types/category";
import TableHead from "./table-head";

const UsersList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { users } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleClickRemove = () => {
    setIsOpen(false);
  };

  const handleClickClose = () => {
    setIsOpen(!isOpen);
  };

  const renderRows = (user: User) => (
    <tr key={user.id} className="">
      <td className="py-4 text-center">{user.id}</td>
      <td className="py-4">{user.name}</td>
      <td className="py-4">{user.email}</td>
      <td className="py-4">******</td>
      <td className="py-4">{user.phone}</td>
      <td className="py-4">{user.address}</td>
      <td className="py-4">
        <Button className="bg-white text-yellow-600 text-xl mr-7 hover:text-yellow-800">
          <BsPencilSquare />
        </Button>
        <Button
          onClick={handleClickClose}
          className="bg-white text-red-600 text-xl hover:text-red-800"
        >
          <BsTrash />
        </Button>
      </td>
    </tr>
  );

  return (
    <>
      <Table data={users} head={<TableHead />} renderRows={renderRows} />
      <Popup
        message="Are you sure to delete this User?"
        title="Confirm Information"
        isOpen={isOpen}
        onConfirm={handleClickRemove}
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default UsersList;
