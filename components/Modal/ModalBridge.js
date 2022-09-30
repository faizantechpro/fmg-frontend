import { useSelector } from "react-redux";
import Modal from "./modal";
import { MODAL_ACTIONS } from "../../store/utils/app.actions";

const ModalBridge = ({ api, modalId: modalIdLocal, ...props }) => {
  const { modalId, data, isOpen, action } = useSelector((state) => state.modal);

  if (modalIdLocal !== modalId) {
    return null;
  }
  const themes = localStorage.getItem("theme") == "dark";

  return (
    <Modal
      {...props}
      visible={isOpen}
      bodyStyle={themes ? { background: "#0d567a" } : { background: "white" }}
      data={action === MODAL_ACTIONS.ADD_NEW ? {} : data}
      action={action}
    />
  );
};

export default ModalBridge;
