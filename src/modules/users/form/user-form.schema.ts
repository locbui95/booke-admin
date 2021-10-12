import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  email: Yup.string().required("Please enter email"),
  password: Yup.string().required("Please enter password"),
  phone: Yup.string().required("Please enter phone"),
  address: Yup.string().required("Please enter address")
});
