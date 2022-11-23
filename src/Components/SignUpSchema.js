import * as Yup from "yup";

export const SignUpSchema = Yup.object({
 
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  //phoneno: Yup.string().phoneno().required("Please enter your phone no"),
  //phoneno: Yup.string().phoneno().matches("/^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/", 'Phone number is not valid')
  phoneno:Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .required('A phone number is required'),
    // .oneOf([Yup.ref("password"), null], "Password must match"),
});