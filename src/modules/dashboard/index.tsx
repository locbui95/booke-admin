import CircleChart from "components/chart";
import { FaShoppingBasket, FaThLarge } from "react-icons/fa";
import DashboardCard from "components/dashboard-card";

export default function DashboardList() {
  const products = 10;
  const categories = 8;
  const productsOnStock = 8;
  const productsOutofStock = 2;

  const dataProduct = [
    { name: "In stock", value: productsOnStock },
    { name: "Out of stock", value: productsOutofStock }
  ];

  const dataCategory = [
    { name: "Active", value: productsOnStock },
    { name: "Inactive", value: productsOutofStock }
  ];

  return (
    <div>
      <h2 className="mb-10 text-3xl font-medium text-gray-600">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-around mb-8 bg-white text-gray-600 shadow-md rounded-xl ">
          <div className="flex justify-center items-center ml-3">
            <DashboardCard
              icon={<FaShoppingBasket />}
              count={products}
              title="Total Products"
            />
          </div>
          <div className="flex justify-center items-center">
            <CircleChart data={dataProduct} />
          </div>
        </div>
        <div className="flex items-center justify-around mb-8 bg-white text-gray-600 shadow-md rounded-xl  ">
          <div className="flex justify-center items-center ml-3">
            <DashboardCard
              icon={<FaThLarge />}
              count={categories}
              title="Total Categories"
            />
          </div>
          <div className="flex justify-center items-center">
            <CircleChart data={dataCategory} />
          </div>
        </div>
      </div>
    </div>
  );
}
