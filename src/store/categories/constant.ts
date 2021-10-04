import Category from "types/category";

const PENDING = "PENDING";
const GET_CATEGORIES = "GET_CATEGORIES";
const REJECTED = "REJECTED";
const DELETE_CATEGORY = "DELETE_CATEGORY";

export { PENDING, GET_CATEGORIES, REJECTED, DELETE_CATEGORY };

interface Pending {
  type: typeof PENDING;
  payload?: string;
}
interface getCategory {
  type: typeof GET_CATEGORIES;
  payload: Category[];
}
interface Rejected {
  type: typeof REJECTED;
  payload?: string;
}
interface deleteCategory {
  type: typeof DELETE_CATEGORY;
  payload: number;
}

export type ActionTypes = Pending | Rejected | getCategory | deleteCategory;
