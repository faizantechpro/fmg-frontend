import { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import { Button, Tooltip } from "antd";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { doSignIn } from "./logIn.action";
import TextInput from "../Input/TextInput";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import { FormattedMessage, useIntl } from "react-intl";

const LogInForm = () => {
  const dispatch = useDispatch();
  const [activeEmail, setActiveEmail] = useState(true);
  const [PhoneTab, setPhoneTab] = useState(false);
  const intl = useIntl();

  const validateUser = Yup.object({
    email: Yup.string().email("invalid email").required("required"),
    password: Yup.string()
      .min(5, "Must be 5 characters or more")
      .required("required"),
  });

  const phoneUser = Yup.object({
    phoneNumber: Yup.number()
      .min(5, "Must be 5 characters or more")
      .required("required"),
    password: Yup.string()
      .min(5, "Must be 5 characters or more")
      .required("required"),
  });

  const handleEmail = () => {
    setActiveEmail(true);
    setPhoneTab(false);
  };

  const handlePhone = () => {
    setPhoneTab(true);
    setActiveEmail(false);
  };

  const handleSignIn = (values) => {
    if (activeEmail) {
      dispatch(
        doSignIn({
          password: values.password,
          email: values.email,
          role: "USER",
        })
      );
    } else {
      dispatch(
        doSignIn({
          phoneNumber: values.phoneNumber,
          password: values.password,
          role: "USER",
        })
      );
    }
  };

  return (
    <div className="w-10/12 m-auto">
      <div className="flex justify-center h-16 items-center">
        <button
          className={`${
            activeEmail
              ? "w-28 h-8 ring ring-[#ED3276] bg-[#0D567A] text-white font-bold mr-1 rounded px-2"
              : "w-28 bg-[#002652] h-8 text-[#FFFFFF80] rounded mr-1 ring ring-[#002652] px-2"
          }`}
          onClick={handleEmail}
        >
          <FormattedMessage id="signUpEmail" />
        </button>
        <Tooltip title="Coming Soon">
          <button
            className={`${
              PhoneTab
                ? "w-24 h-8 ring ring-[#ED3276] bg-[#0D567A] text-white px-2 rounded font-bold"
                : "w-24 h-8 bg-[#002652] text-[#FFFFFF80] px-2 rounded  ring ring-[#002652] cursor-not-allowed"
            }`}
            // onClick={handlePhone}
          >
            <FormattedMessage id="signUpPhone" />
          </button>
        </Tooltip>
      </div>
      <Formik
        initialValues={{
          email: "",
          // phoneNumber: "",
          password: "",
        }}
        validationSchema={activeEmail ? validateUser : phoneUser}
        onSubmit={(values) => handleSignIn(values)}
      >
        <Form>
          {activeEmail && (
            <div className=" my-2 w-full">
              <TextInput
                name="email"
                type="email"
                className="border rounded-lg dark:bg-[#E5E5E51A] dark:text-white bg-white text-base w-full h-10"
                placeholder={intl.formatMessage({ id: "signUpEmail" })}
              />
            </div>
          )}
          {PhoneTab && (
            <div className="flex  my-2 w-full">
              <PhoneInput
                country={"us"}
                international
                placeholder="1425652"
                onChange={(phone) => console.log({ phone })}
              />
            </div>
          )}
          <TextInput
            name="password"
            type="password"
            className="border rounded-lg dark:bg-[#E5E5E51A] dark:text-white bg-white text-base w-full h-10 mt-2"
            placeholder={intl.formatMessage({ id: "signUpPass" })}
          />
          <Link href="/forgot-password">
            <a className="font-bold block text-right dark:text-white ">
              <FormattedMessage id="signUpForgotPass" />
            </a>
          </Link>
          <Button
            className="bg-[#0897DD] w-full text-lg h-10 dark:text-white rounded-lg mt-4 hover:bg-[#0897DD]"
            size="large"
            htmlType="submit"
          >
            <FormattedMessage id="signUpLogin" />
          </Button>
        </Form>
      </Formik>
      <div className="dark:text-white  h-10 items-center flex justify-center">
        <FormattedMessage id="signUpDontAcct" />
        <Link href="/sign-up">
          <a className="font-bold pl-2">
            <FormattedMessage id="signUpSign" />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default LogInForm;
