import React from "react";
import ForgotPassword from "./ForgotForm";
import ResetPassword from "./ResetPassword";
const Steps = [
  {
    title: "OTP",
    key: "1",
    content: <ForgotPassword />,
  },
  {
    title: "Confirm Password",
    key: "2",
    content: <ResetPassword />,
  },
];
export default Steps;
