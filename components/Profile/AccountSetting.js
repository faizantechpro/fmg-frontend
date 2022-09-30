import * as Yup from "yup";
import { Button, Card } from "antd";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "./profile.action";
import TextInput from "../Input/TextInput";
import PhoneInput from "react-phone-number-input";

const AccountSetting = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const validateUser = Yup.object({
    currentPassword: Yup.string()
      .min(5, "Must be 5 characters or more")
      .required("Required"),
    newPassword: Yup.string()
      .min(5, "Must be 5 characters or more")
      .required("Required"),
    rePassword: Yup.string()
      .min(5, "Must be 5 characters or more")
      .oneOf([Yup.ref("newPassword"), null], "Passwords don't match!")
      .required("Required"),
  });

  const onFinish = (values) => {
    dispatch(resetPassword({ ...values }));
  };

  return (
    <Card className="dark:bg-[#0D567A] bg-white md:w-3/4 border-0 md:ml-4 rounded-md mt-8 md:mt-0">
      <div className="dark:text-white text-lg font-bold pl-2">
        Account Setting
      </div>
      <div className="md:px-10 px-4">
        <h1 className="dark:text-white font-bold text-lg">Email</h1>
        <Formik
          initialValues={{
            email: user?.email,
            currentPassword: "",
            newPassword: "",
            rePassword: "",
          }}
          validationSchema={validateUser}
          onSubmit={(values, { resetForm }) => {
            (values.userId = user?._id), onFinish(values), resetForm();
          }}
        >
          <Form>
            <TextInput
              name="email"
              type="text"
              value={user.email}
              disabled
              placeholder="username@gmail.com"
              className="border rounded-lg bg-[#0D567A]  text-black text-base h-10 mb-2 mt-2"
            />
            <div className="flex  my-2 w-full">
              <PhoneInput
                country={"us"}
                placeholder="1425652"
                disabled
                onChange={(phone) => console.log({ phone })}
              />
            </div>
            <h1 className="dark:text-white font-bold text-lg mb-3">
              Change Password
            </h1>
            <TextInput
              name="currentPassword"
              type="password"
              placeholder="Current Password"
              className="border rounded-lg dark:bg-[#0D567A] bg-white dark:text-white text-base h-10 mb-2"
            />
            <TextInput
              name="newPassword"
              type="password"
              placeholder="Enter New Password"
              className="border rounded-lg dark:bg-[#0D567A] bg-white dark:text-white text-base h-10 mb-2"
            />
            <TextInput
              name="rePassword"
              type="password"
              placeholder="Re-Enter New Password"
              className="border rounded-lg dark:bg-[#0D567A] bg-white dark:text-white text-base h-10 mb-2"
            />
            <div className="flex justify-center">
              <Button
                size="large"
                htmlType="submit"
                className="h-10 w-28 flex justify-center font-bold text-base bg-[#0897DD]  hover:bg-[#0897DD] dark:text-white rounded border-0"
              >
                Save
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </Card>
  );
};

export default AccountSetting;
