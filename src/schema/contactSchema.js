import * as yup from "yup";
export const contactSchema = yup.object().shape({
  Name: yup.string().required("Enter a name"),
  email: yup
    .string()
    .email("Invaild email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must be a gmail.com address"
    )
    .required("Enter an email"),
  Message: yup.string().required("Enter a message"),
});
