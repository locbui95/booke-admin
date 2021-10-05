import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "store/product/action";
import { RootState } from "store";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

import Spinner from "components/spinner";
import Button from "components/button";
import Popup from "components/popup";
import Product from "types/product";
import Category from "types/category";
import Table from "components/table";
import ProductsTableHead from "./products.table-head";
import { categories } from "./constants";

const ProductList = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { Products, loading } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleClickOpen = () => setIsOpen(true);

  const handleClickClose = () => setIsOpen(false);

  const renderRows = (product: Product) => (
    <tr key={product.id} className="text-left">
      <td className="py-5">{product.id}</td>
      <td className="py-5 pl-5 w-1/5 max-w-[10rem] xl:max-w-[20rem] ">
        <p className="truncate w-10/12">{product.name}</p>
      </td>
      <td className="py-5 w-2/12">{product.import_price}</td>
      <td className="py-5 pl-5 w-1/12">{product.price}</td>
      <td className="py-5 pl-5 w-1/5 max-w-[10rem] xl:max-w-[20rem] ">
        {categories.map((category: Category) => {
          if (category.id === product.categoryID) {
            return <p className="truncate w-10/12">{category.name}</p>;
          }
          return null;
        })}
      </td>
      <td className="py-5 w-1/12">
        {product.status ? (
          <p className="p-1 text-center border border-[#019707] rounded bg-[#019707] text-xs text-white">
            On stock
          </p>
        ) : (
          <p className="p-1 text-center border border-[#fb0b12] rounded bg-[#fb0b12] text-xs text-white">
            Out of stock
          </p>
        )}
      </td>
      <td className="py-5 pl-5 w-2/12">
        <Button className="hover:text-yellow-800 bg-white text-yellow-600 text-xl pl-2 pr-7">
          <BsPencilSquare />
        </Button>
        <Button
          onClick={handleClickOpen}
          className="hover:text-red-800  bg-white text-red-600 text-xl"
        >
          <BsTrash />
        </Button>
      </td>
    </tr>
  );

  return (
    <div className="mt-10">
      {!loading ? (
        <Table
          loading={loading}
          head={<ProductsTableHead />}
          data={Products}
          renderRows={renderRows}
        />
      ) : (
        <div className=" flex justify-center items-center relative">
          <Spinner />
        </div>
      )}
      <Popup
        isOpen={isOpen}
        title="Confirm Infomation"
        message="Are you sure to delete this record?"
        onClose={handleClickClose}
        onConfirm={() => console.log("lii")}
      />
    </div>
  );
};
export default ProductList;
