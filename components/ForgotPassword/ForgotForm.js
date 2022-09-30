import { useEffect, useState } from "react";
import { Button, Input, notification } from "antd";
import * as Yup from "yup";
import Link from "next/link";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { saveEmail, forgotPassword } from "../SignUp/user.action";
import TextInput from "../Input/TextInput";
import { nextPage } from "../MultiStepForm/StepForm.actions";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { isVerified, disable } = useSelector((state) => state.auth);

  const validateUser = Yup.object({
    email: Yup.string().email("invalid email").required("required"),
    code: Yup.string().required("required"),
  });

  const handleOtp = () => {
    let elements = document.getElementsByName("email")[0].value;
    if (elements.length > 10) {
      dispatch(forgotPassword({ email: elements }));
    } else {
      notification.error({
        message: "Add Your Email Please",
      });
    }
  };
  const onFinish = (values) => {
    dispatch(saveEmail(values));
  };

  useEffect(() => {
    if (isVerified) {
      dispatch(nextPage(1));
    }
  }, [dispatch, isVerified]);

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            email: "",
            code: "",
          }}
          validationSchema={validateUser}
          onSubmit={(values) => onFinish(values)}
        >
          <Form className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <TextInput
                name="email"
                type="email"
                className="border rounded-lg dark:bg-[#E5E5E51A] bg-white dark:text-white text-base h-10"
                placeholder="Email"
              />
              <div className="flex ">
                <TextInput
                  name="code"
                  className="w-full border rounded-lg dark:bg-[#E5E5E51A] bg-white dark:text-white text-base h-10"
                  placeholder="OTP"
                />
                <a
                  className="w-1/2 items-center dark:text-white text-center flex justify-center underline"
                  onClick={handleOtp}
                >
                  Generate OTP
                </a>
              </div>
            </div>
            <Button
              className="bg-[#0897DD] w-full text-lg h-10 text-white rounded-lg"
              size="large"
              disabled={disable}
              htmlType="submit"
            >
              Continue
            </Button>
          </Form>
        </Formik>
      </div>
      <div className="dark:text-white  h-10 items-center flex justify-center">
        Already have an account?
        <Link href="/login">
          <a className="font-bold pl-2">LogIn</a>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
