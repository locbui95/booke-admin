import { AiOutlinePlus } from "react-icons/ai";

import Button from "components/button";
import Search from "components/search";
import Select from "components/select";
// import EditProduct from "pages/products/edit";
import { Link } from "react-router-dom";
import { PATH_PRODUCTS_ADD } from "routes/routes.paths";

export default function SearchBar() {
  const handleSearch = (search: string) => {
    console.log(search);
  };

  return (
    <div>
      <div className="flex items-center bg-white p-8 shadow-md rounded-lg justify-between m">
        <p className="font-bold text-xl">Product</p>
        <div className="w-3/4 flex justify-end">
          <div className="w-1/4 mr-10">
            <Select>
              <option disabled className="leading-10" value="number">
                number
              </option>
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
          </div>
          <Search onSearch={handleSearch} />
          <Link to={PATH_PRODUCTS_ADD}>
            <Button
              loading={false}
              className="flex p-3 bg-blue-400 hover:bg-blue-500 text-white"
            >
              <AiOutlinePlus className="pr-2 text-2xl font-bold" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
