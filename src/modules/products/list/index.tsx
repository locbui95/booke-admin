import React, { useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

import Button from "components/button";
import Popup from "components/popup";
import Product from "types/product";
import Category from "types/category";
import Table from "components/table";
import ProductsTableHead from "./products.table-head";
import { products, categories } from "./constants";
import "./list.module.css";

const ProductListModule = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickOpen = () => setIsOpen(true);
  const handleClickClose = () => setIsOpen(false);

  const renderRows = (product: Product) => (
    <tr key={product.id}>
      <td className="py-5">{product.id}</td>
      <td className="w-1/12 py-5">
        <img src={product.image} alt={product.name} className="w-full" />
      </td>
      <td className="max-w-[9rem] xl:max-w-[15rem] py-5 w-2/12">
        <p className="truncate w-10/12">{product.name}</p>
      </td>
      <td className="py-5">{product.import_price}</td>
      <td className="w-1/12 py-5">{product.price}</td>
      <td className="max-w-[9rem] xl:max-w-[15rem] py-5 w-2/12">
        {categories.map((category: Category) => {
          if (category.id === product.categoryID) {
            return <p className="truncate w-10/12">{category.name}</p>;
          }
          return null;
        })}
      </td>
      <td className="py-5">
        {product.status ? (
          <p className="p-1 text-center border border-[#019707] rounded bg-[#019707] text-xs text-white">
            Stocking
          </p>
        ) : (
          <p className="p-1 text-center border border-[#fb0b12] rounded bg-[#fb0b12] text-xs text-white">
            Out of stock
          </p>
        )}
      </td>
      <td className="py-5">
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
    <div>
      {products ? (
        <Table
          head={<ProductsTableHead />}
          data={products}
          renderRows={renderRows}
        />
      ) : null}
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
export default ProductListModule;
