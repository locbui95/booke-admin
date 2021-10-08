import { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/button";
import Table from "components/table";
import { deleteUser, getUsers } from "store/users/action";
import User from "types/user";
import Popup from "components/popup";
import TableHead from "./table-head";

interface UsersProps {
  keySearch: string;
}

const UsersList = (props: UsersProps) => {
  const { keySearch } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { users } = useSelector((state: RootState) => state.users);
  const [userId, setUserId] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleShowForm = (id: number) => {
    setIsOpen(!isOpen);
    setUserId(id);
  };

  const handleConfirmDelete = () => {
    setIsOpen(false);
    dispatch(deleteUser(userId));
  };

  const newArrayUser: User[] = users.filter((user: User) => {
    if (user.name.toLowerCase().includes(keySearch.toLowerCase())) {
      return user;
    }
    return "";
  });

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
          onClick={() => handleShowForm(user.id)}
          className="bg-white text-red-600 text-xl hover:text-red-800"
        >
          <BsTrash />
        </Button>
      </td>
    </tr>
  );

  return (
    <>
      <Table data={newArrayUser} head={<TableHead />} renderRows={renderRows} />
      <Popup
        message="Are you sure to delete this user?"
        title="Confirm Information"
        isOpen={isOpen}
        onConfirm={handleConfirmDelete}
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default UsersList;
