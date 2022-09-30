/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { Avatar } from "antd";
import Image from "next/image";

export const FileUpload = ({ label, ...props }) => {
  const { field, form } = props;
  const [show, setShow] = useState(false);
  const fileRef = useRef(null);

  const handleUpload = () => {
    setShow(true);
    fileRef.current.click();
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
    <div className="w-full flex flex-col items-center justify-evenly h-64">
      {show && (
        <img
          src={""}
          alt=""
          id={"myImage"}
          className="w-36 h-36 rounded-full "
        />
      )}
      <div className="h-12 w-1/2 flex border items-center justify-around dark:text-white">
        <div>Upload your profile picture</div>
        <input
          ref={fileRef}
          hidden
          type={"file"}
          onChange={(o) => handleChange(o)}
          className={"form-control"}
        />
        <a
          className="dark:bg-[#FFFFFF4D] bg-[#0897DD] text-white text-base text-center w-24 h-10 rounded flex items-center justify-center"
          onClick={handleUpload}
        >
          Upload
        </a>
      </div>
    </div>
  );
};

export default FileUpload;
