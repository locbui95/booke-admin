import Button from "components/button";
import Input from "components/input";
import Switch from "components/switch";
import { Link } from "react-router-dom";
import { PATH_PRODUCTS } from "routes/routes.paths";

export default function Form() {
  const handleChange = () => {
    console.log("1");
  };
  return (
    <div>
      <div className="text-center text-2xl font-bold p-5 shadow-sm ">
        ADD NEW PRODUCT
      </div>
      <form className="p-5 shadow-sm flex justify-center bg-white">
        <div className="w-1/2">
          <div className="flex justify-between">
            <div className="mt-2 w-2/4 mr-4">
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
              />
            </div>
            <div className="mt-2 w-2/4">
              <p className="block text-gray-700 text-md font-bold mb-2">
                Status
              </p>
              <Switch onChange={handleChange} />
            </div>
          </div>
          <div className="flex">
            <div className="mt-2 w-2/4 mr-4">
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
                type="text"
              />
            </div>
            <div className="mt-2 w-2/4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="importprice"
              >
                Import price
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="importprice"
                id="importprice"
                type="text"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-2 w-2/4 mr-4">
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
                type="text"
              />
            </div>
            <div className="mt-2 w-2/4">
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
              />
            </div>
          </div>

          <div className="mt-2">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <Input
              className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
              name="description"
              id="description"
              type="text"
            />
          </div>
          <div className="flex">
            <div className="mt-2 w-2/4 mr-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="categoryid"
              >
                CategoryID
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="categoryid"
                id="categoryid"
                type="text"
              />
            </div>
            <div className="mt-2 w-2/4">
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
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-2 w-2/4 mr-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="puplishingyear"
              >
                Puplishing Year
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="puplishingyear"
                id="puplishingyear"
                type="text"
              />
            </div>
            <div className="mt-2 w-2/4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="datesubmitted"
              >
                Date Submitted
              </label>
              <Input
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-400"
                name="datesubmitted"
                id="datesubmitted"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <Button className="mr-2 px-3 py-2 rounded-md transition-all  bg-blue-400 hover:bg-blue-500 text-white text-sm">
              SUBMIT
            </Button>
            <Link to={PATH_PRODUCTS} className="px-3">
              <Button className="px-3 py-2 rounded-md transition-all bg-gray-200 hover:bg-gray-400">
                CANCEL
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
