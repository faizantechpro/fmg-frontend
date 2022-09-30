import React from 'react';
import { Input } from 'antd';
import { useField } from 'formik';

const TextArea = ({ className, label, ...props }) => {
  const [field, meta] = useField(props);
  const { TextArea } = Input;
  return (
    <>
      <TextArea {...field} {...props} className={className} />
      {meta.touched && meta.error ? <div className="text-red-400">{meta.error}</div> : null}
    </>
  );
};

export default TextArea;
