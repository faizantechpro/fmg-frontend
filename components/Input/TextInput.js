import { Input } from 'antd';
import { useField } from 'formik';

const TextInput = ({ className, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-2 w-full">
      <Input {...field} {...props} className={className} />
      {meta.touched && meta.error ? <div className="text-red-400">{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
