import * as Yup from "yup";

export const CategorySchema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  description: Yup.string().required("Please enter description")
});
