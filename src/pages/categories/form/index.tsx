import { AiFillCloseCircle } from "react-icons/ai";

import Button from "components/button";
import Input from "components/input";
import Switch from "components/switch";
import Category from "types/category";

interface FormProps {
  mode: string;
  data: Category;
  isOpen: boolean;
  hanldeClickClose: () => void;
  hanldeClickConfirm: () => void;
}

export default function Form({
  mode,
  data,
  isOpen,
  hanldeClickClose,
  hanldeClickConfirm
}: FormProps) {
  let name: string = "";
  let description: string = "";

  if (mode === "edit") {
    name = data.name;
    description = data.description;
  }
  const handleChangeSwitch = (onChangeSwitch: boolean): void => {
    const value: string = !onChangeSwitch ? "Pending" : "Done";
  };

  return (
    <div>
      {isOpen ? (
        <div className="flex justify-center items-center fixed bg-gray-800 bg-opacity-50 inset-0 ">
          <div className="flex flex-col p-5 h-auto max-w-xl rounded-md bg-white shadow-lg w-full">
            <div className="flex justify-between mb-6">
              <h1 className="font-semibold text-xl">Add Catergory</h1>
              <Button
                className="border-none text-xl ml-36"
                onClick={hanldeClickClose}
              >
                <AiFillCloseCircle />
              </Button>
            </div>
            <div className="my-3 flex items-center">
              <p className="mr-2 w-24">Name *</p>
              <Input defaultValue={name} />
            </div>
            <div className="my-3 flex items-center">
              <p className="mr-2 w-24">Description *</p>
              <Input defaultValue={description} />
            </div>
            <div className="my-3 flex items-center">
              <p className="mr-2 w-24">Status</p>
              <Switch onChange={handleChangeSwitch} />
            </div>
            <div className="flex justify-end items-center mt-2">
              <Button
                className="w-20 text-gray-900 font-medium rounded-lg p-2 hover:bg-gray-200 hover:bg-opacity-30"
                onClick={hanldeClickClose}
              >
                Cancel
              </Button>
              <Button
                className="w-20 text-blue-400 font-medium rounded-lg p-2 hover:bg-gray-200 hover:bg-opacity-30"
                onClick={hanldeClickConfirm}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
