import { FaShoppingBasket, FaThLarge } from "react-icons/fa";
import DashboardCard from "components/dashboard-card";

export default function DashboardList() {
  const products = 10;
  const productsOnStock = 8;
  const productsOutofStock = 2;
  const categories = 8;
  const categoriesActive = 5;
  const categoriesNotActive = 3;

  return (
    <div>
      <h2 className="mb-10 text-3xl font-medium text-gray-600">Dashboard</h2>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <DashboardCard
            icon={<FaShoppingBasket />}
            count={products}
            title="Total Products"
            statusTrueTitle="On stock"
            statusFalseTitle="Out of stock"
            statusTrueCount={productsOnStock}
            statusFalseCount={productsOutofStock}
          />
        </div>
        <div>
          <DashboardCard
            icon={<FaThLarge />}
            count={categories}
            title="Total Categories"
            statusTrueTitle="Active"
            statusFalseTitle="Not Active"
            statusTrueCount={categoriesActive}
            statusFalseCount={categoriesNotActive}
          />
        </div>
      </div>
    </div>
  );
}
