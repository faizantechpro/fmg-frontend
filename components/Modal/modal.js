import React from "react";
import { Modal as AntModal } from "antd";

const Modal = ({
  visible,
  handleCloseModal,
  children,
  title,
  data,
  action,
}) => {
  const themes = localStorage.getItem("theme") == "dark";
  return (
    <AntModal
      title={title}
      width={800}
      visible={visible}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      bodyStyle={
        themes
          ? { background: "#0d567a", borderRadius: "20px" }
          : { background: "white", borderRadius: "20px" }
      }
      footer={false}
    >
      {React.cloneElement(children, { data, action })}
    </AntModal>
  );
};

export default Modal;
