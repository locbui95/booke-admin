import ProductList from "modules/products/list";
import SearchBar from "modules/products/search-bar";

export default function Product() {
  return (
    <div>
      <SearchBar />
      <div className="mt-10">
        <ProductList />
      </div>
    </div>
  );
}
