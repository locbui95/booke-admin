export default interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  timeCreat_Update: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
