import React, { useState, useEffect } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

import Button from "components/button";
import Popup from "components/popup";
import Product from "types/product";
import Table from "components/table";
import ProductsTableHead from "./products.table-head";

const ProductList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  const [product, setProducts] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url: string = "http://localhost:5005/products";
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        return error;
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url: string = "http://localhost:5005/categories";
        const response = await fetch(url);
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        return error;
      }
    };
    getProducts();
  }, []);

  const renderRows = (item: Product) => (
    <tr key={item.id}>
      <td className="text-left py-5">{item.id}</td>
      <td className="w-1/12 py-5">
        <img src={item.image} alt="" className="w-full" />
      </td>
      <td className="text-center py-5">{item.import_price}</td>
      <td className="text-center w-1/12 py-5">{item.price}</td>
      <td className="py-5 w-2/12" style={{ maxWidth: "15rem" }}>
        {category.map((items: any) => {
          if (items.id === item.categoryID) {
            return <p className="truncate w-3/4">{items.name}</p>;
          }
          return null;
        })}
      </td>
      <td className="py-5" style={{ maxWidth: "10rem" }}>
        <p className="truncate w-3/4">{item.author}</p>
      </td>
      <td className="py-5 text-center">
        {item.status ? (
          <p className="p-1 text-center border border-green-500 rounded-3xl text-xs text-green-500">
            Stocking
          </p>
        ) : (
          <p className="p-1 text-center border border-red-500 rounded-3xl text-xs text-red-500">
            Out of stock
          </p>
        )}
      </td>
      <td className="py-5 text-center">{item.date_submitted}</td>
      <td className="py-5 text-right">
        <Button className="hover:text-yellow-800 bg-white text-yellow-600 text-xl pl-2 pr-7">
          <BsPencilSquare />
        </Button>
        <Button
          onClick={toggle}
          className="hover:text-red-800  bg-white text-red-600 text-xl"
        >
          <BsTrash />
        </Button>
        <Popup
          isOpen={isOpen}
          title="Confirm Infomation"
          message="Are you sure to delete this record?"
          onClose={toggle}
          onConfirm={() => console.log("lii")}
        />
      </td>
    </tr>
  );

  return (
    <div>
      {product ? (
        <Table
          head={<ProductsTableHead />}
          data={product}
          renderRows={renderRows}
        />
      ) : null}
    </div>
  );
};
export default ProductList;
