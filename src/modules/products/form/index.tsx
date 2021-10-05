import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/button";
import Input from "components/input";
import Select from "components/select";
import Switch from "components/switch";
import { Link } from "react-router-dom";
import { PATH_PRODUCTS } from "routes/routes.paths";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./form.module.css";

interface UserFormProps {
  mode: "create" | "edit";
}
export default function Form({ mode }: UserFormProps) {
  const handleChange = (abc: boolean) => {
    console.log(abc);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      import_price: 0,
      tax: 0,
      status: true,
      image: "",
      description: "",
      categoryID: 0,
      author: "",
      publishing_year: "",
      date_submitted: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Please enter name"),
      price: Yup.string().required("Please enter price"),
      import_price: Yup.string().required("Please enter import price"),
      tax: Yup.string().required("Please enter tax"),
      image: Yup.string().required("Please enter image"),
      description: Yup.string().required("Please enter description"),
      categoryID: Yup.string().required("Please choose category"),
      publishing_year: Yup.string().required("Please choose publishing year"),
      date_submitted: Yup.string().required("Please choose date submitted"),
      author: Yup.string().required("Please enter author")
    }),
    onSubmit: (values: any, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    }
  });

  return (
    <div>
      <Link to={PATH_PRODUCTS}>
        <Button className="rounded-full px-3 py-3 bg-blue-400 text-white text-xl hover:bg-blue-500 transition-all">
          <AiOutlineArrowLeft />
        </Button>
      </Link>
      <div className="text-center text-2xl font-bold pb-3 shadow-sm ">
        PRODUCT INFORMATION
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="p-5 flex justify-center bg-white rounded-md shadow-lg"
      >
        <div className="w-1/2">
          <div className="flex justify-between">
            <div className="mt-1 w-2/4 mr-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline"
                name="name"
                id="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <span className={styles.error}>{formik.errors.name}</span>
              ) : null}
            </div>
            <div className="mt-1 w-2/4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="author"
                id="author"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.author}
              />
              {formik.touched.author && formik.errors.author ? (
                <span className={styles.error}>{formik.errors.author}</span>
              ) : null}
            </div>
          </div>
          <div className="flex">
            <div className="mt-1 w-2/4 mr-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="price"
                id="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
                min="0"
              />
              {formik.touched.price && formik.errors.price ? (
                <span className={styles.error}>{formik.errors.price}</span>
              ) : null}
            </div>
            <div className="mt-1 w-2/4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="import_price"
              >
                Import price
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="import_price"
                id="import_price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.import_price}
                min="0"
              />
              {formik.touched.import_price && formik.errors.import_price ? (
                <span className={styles.error}>
                  {formik.errors.import_price}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex">
            <div className="mt-1 w-2/4 mr-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="tax"
              >
                Tax
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="tax"
                id="tax"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.tax}
                min="0"
              />
              {formik.touched.tax && formik.errors.tax ? (
                <span className={styles.error}>{formik.errors.tax}</span>
              ) : null}
            </div>
            <div className="mt-1 w-2/4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="image"
                id="image"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.image}
              />
              {formik.touched.image && formik.errors.image ? (
                <span className={styles.error}>{formik.errors.image}</span>
              ) : null}
            </div>
          </div>

          <div className="mt-1">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400"
              name="description"
              id="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <span className={styles.error}>{formik.errors.description}</span>
            ) : null}
          </div>

          <div className="flex">
            <div className="mt-1 w-2/4 mr-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="publishing_year"
              >
                Publishing Year
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="publishing_year"
                id="publishing_year"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.publishing_year}
              />
              {formik.touched.publishing_year &&
              formik.errors.publishing_year ? (
                <span className={styles.error}>
                  {formik.errors.publishing_year}
                </span>
              ) : null}
            </div>
            <div className="mt-1 w-2/4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="date_submitted"
              >
                Date Submitted
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="date_submitted"
                id="date_submitted"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.date_submitted}
              />
              {formik.touched.date_submitted && formik.errors.date_submitted ? (
                <span className={styles.error}>
                  {formik.errors.date_submitted}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex">
            <div className="mt-1 w-2/4 mr-4">
              <p className="block text-gray-700 text-md font-bold mb-2">
                Status
              </p>
              <Switch
                onChange={handleChange}
                isChecked={formik.values.status}
              />
            </div>
            <div className="mt-1 w-2/4 ">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="categoryID"
              >
                Category
                <span className="text-red-400 ml-1">*</span>
              </label>
              <Select
                className="h-[2.6rem] py-[11px] px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400 "
                name="categoryID"
                id="categoryID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.categoryID}
              >
                <option className="leading-10" value="1">
                  one
                </option>
                <option className="leading-10" value="2">
                  two
                </option>
                <option className="leading-10" value="2">
                  three
                </option>
              </Select>
              {formik.touched.categoryID && formik.errors.categoryID ? (
                <span className={styles.error}>{formik.errors.categoryID}</span>
              ) : null}
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <Button
              className="mr-4 px-3 py-2 rounded-md transition-all  bg-blue-400 hover:bg-blue-500 text-white text-sm"
              type="submit"
            >
              SUBMIT
            </Button>
            <Link to={PATH_PRODUCTS} className="">
              <Button className="px-3 py-2 rounded-md transition-all bg-gray-200 hover:bg-gray-400">
                CANCEL
              </Button>
            </Link>
          </div>
        </div>
        <div className="ml-10 mt-5 block">
          <img
            className="w-[20rem] h-[30rem] border-md shadow-lg rounded-xl"
            src="https://i.pinimg.com/564x/ab/4f/2d/ab4f2dc76ef777821c5ad32976a328b3.jpg"
            alt=""
          />
        </div>
      </form>
    </div>
  );
}
