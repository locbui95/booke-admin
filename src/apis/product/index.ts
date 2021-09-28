import { axiosClient } from "apis";

import Product from "types/product";

const ProductApi = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  get(id: number) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(product: Product) {
    const url = `/products/`;
    return axiosClient.post(url, product);
  },
  edit(id: number, product: Product) {
    const url = `/products/${id}`;
    return axiosClient.put(url, product);
  },
  remove(id: number) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  }
};
export default ProductApi;
