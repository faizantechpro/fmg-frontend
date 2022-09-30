import * as Yup from "yup";
import { Formik, Form } from "formik";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import TextArea from "./Input/TextArea";
import TextInput from "./Input/TextInput";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { addContact } from "../store/actions/home.action";
import { FormattedMessage, useIntl } from "react-intl";

function ContactUsForm() {
  const dispatch = useDispatch();
  const intl = useIntl();
  const recaptchaRef = React.createRef();
  const [token, setToken] = useState("");
  const validateContact = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  function onChange(value) {
    setToken(value);
  }
  const onFinish = async (values) => {
    if (token) {
      dispatch(addContact({ ...values, token: token }));
    } else {
      notification.error({
        message: "please check the recaptcha",
      });
    }
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            message: "",
            subject: "",
          }}
          validationSchema={validateContact}
          onSubmit={(values, { resetForm }) => {
            onFinish(values), resetForm();
          }}
        >
          <Form>
            <div className="flex justify-center flex-row">
              <div className="mr-2 w-full">
                <TextInput
                  name="firstName"
                  className="dark:bg-[#0D567A] h-12 border-2 dark:border-[#FFFFFF80]  rounded mr-2 text-base dark:text-[#FFFFFFBF]"
                  placeholder={intl.formatMessage({ id: "contactUsFname" })}
                />
              </div>
              <div className="ml-2 w-full">
                <TextInput
                  name="lastName"
                  className="dark:bg-[#0D567A] h-12 border-2 dark:border-[#FFFFFF80]  rounded text-base dark:text-[#FFFFFFBF]"
                  placeholder={intl.formatMessage({ id: "contactUsLname" })}
                />
              </div>
            </div>
            <div className="py-1">
              <TextInput
                name="email"
                className="dark:bg-[#0D567A] h-12 border-2 dark:border-[#FFFFFF80] rounded text-base dark:text-[#FFFFFFBF]"
                placeholder={intl.formatMessage({ id: "contactUsEmail" })}
              />
            </div>
            <div className="py-1">
              <TextInput
                name="subject"
                className="dark:bg-[#0D567A] h-12 border-2 dark:border-[#FFFFFF80]  rounded text-base dark:text-[#FFFFFFBF]"
                placeholder={intl.formatMessage({ id: "contactUsSubject" })}
              />
            </div>
            <div className="py-4">
              <TextArea
                name="message"
                className="dark:bg-[#0D567A] p-2 border-2 dark:border-[#FFFFFF80]  rounded text-base dark:text-[#FFFFFFBF]"
                placeholder={intl.formatMessage({ id: "contactUsMessage" })}
                rows={5}
              />
            </div>
            <div className="md:w-1/2 m-auto pb-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                onChange={onChange}
                sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
              />
            </div>
            <button
              className="bg-[#0897DD] rounded-lg h-16 w-full text-lg font-bold"
              type="submit"
            >
              <FormattedMessage id="contactSendMessage" />
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default ContactUsForm;
