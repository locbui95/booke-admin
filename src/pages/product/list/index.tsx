import ProductListModule from "modules/products/list";
import SearchBar from "modules/products/search-bar";

export default function ProductList() {
  return (
    <div>
      <SearchBar />
      <div className="mt-10">
        <ProductListModule />
      </div>
    </div>
  );
}
