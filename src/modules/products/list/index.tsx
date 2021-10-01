import React, { useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

import Button from "components/button";
import Popup from "components/popup";
import Product from "types/product";
import Category from "types/category";
import Table from "components/table";
import ProductsTableHead from "./products.table-head";
import "./list.module.css";

const ProductListModule = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickOpen = () => setIsOpen(true);
  const handleClickClose = () => setIsOpen(false);

  const categories = [
    {
      id: 1,
      name: "Management - Business Book",
      description:
        "Business management books are always in the group of most searched business books. Because you will have access to general as well as broader knowledge of economics and management. On the other hand, you can grasp some basic foundations of economic groups such as finance, human resources, marketing.",
      status: true
    },
    {
      id: 2,
      name: "Business finance books",
      description:
        "This series of business books is a useful tool to give you an understanding of the corporate financial system. Because through the compiled knowledge, you can learn how to mobilize and use capital as well as effective cash flow management skills to bring profits to your business.",
      status: true
    }
  ];

  const products = [
    {
      id: 1,
      name: "Self-Training, Self-Leadership",
      price: 95200,
      import_price: 70000,
      tax: 5,
      status: false,
      image:
        "https://newshop.vn/public/uploads/products/42100/sach-huan-luyen-tu-than-lanh-dao-tu-than.jpg",
      description:
        "stSelf-Training, Self-Leadership - focuses on the concept of using yourself as a coaching tool, a key aspect of coaching and coaching.ring",
      categoryID: 1,
      author: "Edgar H. Schein",
      publishing_year: "2021",
      date_submitted: "2021-09-28"
    },
    {
      id: 2,
      name: "Serial Killers in the Financial World",
      price: 96000,
      import_price: 72000,
      tax: 5,
      status: true,
      image:
        "https://newshop.vn/public/uploads/products/41969/sach-nhung-sat-thu-hang-loat-trong-gioi-tai-chinh.jpg",
      description:
        "You have worked your whole life to amass a relatively large fortune, or received it from a close family member. Either way, this is your money, and you certainly don't want it lost or in the hands of someone else. But it's not as easy as you think. Serial killers in the financial world are everywhere, snooping and spying on you, always looking for ways to cut, extract, and even appropriate your entire valuable asset.",
      categoryID: 1,
      author: "Bruce Kelly, Tom Ajamie",
      publishing_year: "2021",
      date_submitted: "2021-09-28"
    },
    {
      id: 3,
      name: "My First Deal",
      price: 238000,
      import_price: 190000,
      tax: 7,
      status: true,
      image:
        "https://newshop.vn/public/uploads/products/41515/sach-thuong-vu-dau-tien-cua-toi.jpg",
      description:
        "My First Deal - is the most basic encyclopedia of business - finance & money that children need to know in today's time full of temptations and financial risks.",
      categoryID: 2,
      author: "Asia Books",
      publishing_year: "2021",
      date_submitted: "2021-09-28"
    }
  ];

  const renderRows = (product: Product) => (
    <tr key={product.id}>
      <td className="py-5">{product.id}</td>
      <td className="w-1/12 py-5">
        <img src={product.image} alt="" className="w-full" />
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
