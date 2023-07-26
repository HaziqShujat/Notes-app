import * as Yup from "yup";


export const Formsigninscheme = Yup.object({
    
      Email: Yup.string().email("Invalid email").required("Required"),
      Password: Yup.string()
      .required("required")
     
  });