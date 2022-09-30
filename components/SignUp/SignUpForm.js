import { useEffect, useState } from "react";
import { Button, Input, notification, Tooltip } from "antd";
import * as Yup from "yup";
import Link from "next/link";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { saveEmail, generateOTP } from "./user.action";
import TextInput from "../Input/TextInput";
import PhoneInput from "react-phone-number-input";
import { nextPage } from "../MultiStepForm/StepForm.actions";
import { FormattedMessage, useIntl } from "react-intl";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [PhoneTab, setPhoneTab] = useState(false);
  const [activeEmail, setActiveEmail] = useState(true);
  const { isVerified, disable } = useSelector((state) => state.auth);
  const intl = useIntl();

  const handleEmail = () => {
    setActiveEmail(true);
    setPhoneTab(false);
  };

  const validateUser = Yup.object({
    email: Yup.string().email("invalid email").required("required"),
  });

  const phoneUser = Yup.object({
    phoneNumber: Yup.number()
      .min(5, "Must be 5 characters or more")
      .required("required"),
  });

  const handlePhone = () => {
    setPhoneTab(true);
    setActiveEmail(false);
  };
  const handleOtp = () => {
    let elements = document.getElementsByName("email")[0].value;
    if (elements.length > 10) {
      dispatch(generateOTP({ email: elements }));
    } else {
      notification.error({
        message: "Please add your Email",
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
  }, [isVerified, dispatch]);

  return (
    <div>
      <div>
        <div className="flex justify-center h-16 items-center">
          <button
            className={`${
              activeEmail
                ? "w-28 h-8 outline-none ring ring-[#ED3276] bg-[#0D567A] text-white font-bold mr-1 rounded"
                : "w-28 bg-[#002652] h-8 text-[#FFFFFF80] rounded"
            }`}
            onClick={handleEmail}
          >
            <FormattedMessage id="signUpEmail" />
          </button>
          <Tooltip title="Coming Soon">
            <button
              className={`${
                PhoneTab
                  ? "w-28 h-8 outline-none ring ring-[#ED3276] bg-[#0D567A] text-white font-bold px-2 rounded items-center"
                  : "w-28 h-8 bg-[#002652] text-[#FFFFFF80] px-2 rounded cursor-not-allowed"
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
            code: "",
          }}
          validationSchema={activeEmail ? validateUser : phoneUser}
          onSubmit={(values) => onFinish(values)}
        >
          <Form className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {activeEmail && (
                <TextInput
                  name="email"
                  type="email"
                  className="border rounded-lg dark:bg-[#E5E5E51A] dark:text-white text-base h-10"
                  placeholder={intl.formatMessage({ id: "signUpEmail" })}
                />
              )}
              {PhoneTab && (
                <div className="flex w-full">
                  <PhoneInput
                    country={"us"}
                    international
                    placeholder="1425652"
                    onChange={(phone) => console.log({ phone })}
                  />
                </div>
              )}
              <div className="flex text-center">
                <TextInput
                  name="code"
                  className="w-full border rounded-lg dark:bg-[#E5E5E51A] dark:text-white text-base h-10"
                  placeholder={intl.formatMessage({ id: "signUpOTP" })}
                />
                <a
                  className="w-1/2 items-center dark:text-white flex justify-center underline"
                  onClick={handleOtp}
                >
                  <FormattedMessage id="signUpGenerateOTP" />
                </a>
              </div>
            </div>
            <Button
              className="bg-[#0897DD] w-full text-lg h-10 text-white rounded-lg"
              size="large"
              htmlType="submit"
              disabled={disable}
            >
              <FormattedMessage id="signUpCont" />
            </Button>
          </Form>
        </Formik>
      </div>
      <div className="dark:text-white  h-10 items-center flex justify-center">
        <FormattedMessage id="signUpAlreadyAcct" />
        <Link href="/login">
          <a className="font-bold pl-2">
            <FormattedMessage id="signUpLogin" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
