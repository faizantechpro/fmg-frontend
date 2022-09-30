import React from 'react';
import SignUpForm from './SignUpForm.js';
import PasswordForm from './PasswordForm.js';
const Steps = [
  {
    title: 'SignUp',
    key: '1',
    content: <SignUpForm />,
  },
  {
    title: 'Password',
    key: '2',
    content: <PasswordForm />,
  },
];
export default Steps;
