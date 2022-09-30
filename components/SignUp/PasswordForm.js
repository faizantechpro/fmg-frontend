import { Button } from "antd";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { doSignUp } from "./user.action";
import TextInput from "../Input/TextInput";
import { FormattedMessage, useIntl } from "react-intl";

const PasswordForm = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const intl = useIntl();
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
            className=" border rounded-lg dark:bg-[#E5E5E51A] dark:text-white bg-white text-base h-10"
            placeholder={intl.formatMessage({ id: "signUpPass" })}
          />
          <TextInput
            type="password"
            name="rePassword"
            className=" border rounded-lg dark:bg-[#E5E5E51A] dark:text-white bg-white text-base h-10"
            placeholder={intl.formatMessage({ id: "signUpConfPass" })}
          />
        </div>
        <Button
          className="bg-[#0897DD] hover:bg-[#0897DD] w-full text-lg h-10 dark:text-white rounded-lg "
          size="large"
          htmlType="submit"
        >
          <FormattedMessage id="signUpCont" />
        </Button>
      </Form>
    </Formik>
  );
};
export default PasswordForm;
