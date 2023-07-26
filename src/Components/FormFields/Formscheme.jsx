import * as Yup from "yup";


export const FormSchemea = Yup.object({
    Username: Yup.string()
      .min(3, "to short")
      .max(10, "Must be 10 characters or less")
      .required("Name is Required"),
      Email: Yup.string().email("Invalid email").required("Required"),
      Password: Yup.string()
      .required("required")
      .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Enter Strong pasword"),
      CfmPassword: Yup.string()
      .required("required")
      .oneOf([Yup.ref("Password"), null], "Pasword must Matched"),
  });