/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

export const ReceiptUpload = ({ label, ...props }) => {
  const { field, form } = props;
  const fileRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleUpload = () => {
    fileRef.current.click();
    setShow(true);
  };

  const handleChange = (e) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    const imgTag = document.getElementById("myImage");
    imgTag.title = file.name;
    reader.onload = function (event) {
      imgTag.src = event.target.result;
      form.setFieldValue(field.name, event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full flex flex-col items-center justify-evenly">
      {show && (
        <img
          src={""}
          alt="sss"
          id={"myImage"}
          className="w-1/3 h-40 rounded-lg "
        />
      )}

      <div className="h-12 w-1/2 flex items-center justify-around text-white">
        <input
          ref={fileRef}
          hidden
          type={"file"}
          onChange={(o) => handleChange(o)}
          className={"form-control"}
        />
        <button
          className="text-sm font-bold h-10 w-36 flex justify-center items-center text-white bg-[#0897DD] rounded"
          type="button"
          onClick={handleUpload}
        >
          <UploadOutlined className="mr-2" /> Upload Receipt
        </button>
      </div>
    </div>
  );
};

export default ReceiptUpload;
