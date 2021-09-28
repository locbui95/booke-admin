export default interface Product {
  id: number;
  name: string;
  price: number;
  import_price: number;
  tax: number;
  status: boolean;
  image: string;
  description: string;
  categoryID: number;
  author: string;
  date_of_manufacture: string;
  date_submitted: string;
}
