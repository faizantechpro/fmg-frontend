import { Button } from "antd";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { doSignUp } from "../SignUp/user.action";
import TextInput from "../Input/TextInput";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);

  const validateUser = Yup.object({
    password: Yup.string()
      .min(5, "Must be 5 characters or more")
      .required("Required"),
    rePassword: Yup.string()
      .min(5, "Must be 5 characters or more")
      .oneOf([Yup.ref("password"), null], "Passwords don't match!")
      .required("Required"),
  });
  const handleSignUp = (values) => {
    if (values.password == values.rePassword) {
      dispatch(
        doSignUp({
          ...values,
        })
      );
    }
  };

  return (
    <Formik
      initialValues={{
        password: "",
        rePassword: "",
      }}
      validationSchema={validateUser}
      onSubmit={(values) => {
        (values.userId = userId), handleSignUp(values);
      }}
    >
      <Form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <TextInput
            name="password"
            type="password"
            className=" border rounded-lg dark:bg-[#E5E5E51A] bg-white dark:text-white text-base h-10"
            placeholder="Password"
          />
          <TextInput
            type="password"
            name="rePassword"
            className=" border rounded-lg dark:bg-[#E5E5E51A] bg-white dark:text-white text-base h-10"
            placeholder="Re Enter Password"
          />
        </div>
        <Button
          className="bg-[#0897DD] w-full text-lg h-10 text-white rounded-lg "
          size="large"
          htmlType="submit"
        >
          Continue
        </Button>
      </Form>
    </Formik>
  );
};
export default ResetPassword;
