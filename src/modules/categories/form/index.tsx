import { AiFillCloseCircle } from "react-icons/ai";
import { useFormik } from "formik";
import { useMemo, useState } from "react";
import * as Yup from "yup";

import Button from "components/button";
import Input from "components/input";
import Switch from "components/switch";
import Category from "types/category";
import styles from "./form.module.css";

interface FormProps {
  mode: string;
  data: Category;
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
}

export default function Form({ mode, data, isOpen, setIsOpen }: FormProps) {
  let title: string;
  if (mode === "edit") {
    title = "Edit Category";
  } else {
    title = "Add Category";
  }
  const initialValues = useMemo(() => {
    if (mode === "edit") {
      return {
        name: data.name,
        description: data.description,
        status: data.status
      };
    }
    return {
      name: "",
      description: "",
      status: true
    };
  }, [data, mode]);

  const [valueCheckSwitch, setValueCheckSwitch] = useState<boolean>(true);
  const handleChangeSwitch = (onChangeSwitch: boolean): void => {
    setValueCheckSwitch(onChangeSwitch);
  };
  const hanldeClickClose = (): void => {
    setIsOpen(false);
  };
  const handleSubmit = (values: any, { resetForm }: any): void => {
    const submitData = {
      name: values.name,
      descripton: values.description,
      status: valueCheckSwitch
    };
    console.log(submitData);
    resetForm({ value: "" });
    hanldeClickClose();
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: handleSubmit,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Please enter name"),
      description: Yup.string().required("Please enter description")
    })
  });

  return (
    <div>
      {isOpen ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-center items-center fixed bg-gray-800 bg-opacity-50 inset-0 ">
            <div className="flex flex-col p-5 h-auto max-w-xl rounded-md bg-white shadow-lg w-full">
              <div className="flex justify-between mb-6">
                <h1 className="font-semibold text-xl">{title}</h1>
                <Button
                  className="border-none text-xl ml-36"
                  onClick={hanldeClickClose}
                >
                  <AiFillCloseCircle />
                </Button>
              </div>
              <div className="my-3 flex items-center">
                <div className="flex mr-2 w-24">
                  <label
                    className="mr-1 block text-gray-700 text-md font-bold"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <p className="text-red-500">*</p>
                </div>
                <Input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <span className={styles.error}>{formik.errors.name}</span>
              ) : null}
              <div className="my-3 flex items-center">
                <div className="flex mr-2 w-24">
                  <label
                    className="mr-1 block text-gray-700 text-md font-bold"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <p className="text-red-500">*</p>
                </div>
                <Input
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.description && formik.errors.description ? (
                <span className={styles.error}>
                  {formik.errors.description}
                </span>
              ) : null}
              <div className="my-3 flex items-center">
                <label
                  className="mr-2 w-24 block text-gray-700 text-md font-bold"
                  htmlFor="description"
                >
                  Status
                </label>
                <Switch onChange={handleChangeSwitch} isChecked={data.status} />
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
                  type="submit"
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
}
