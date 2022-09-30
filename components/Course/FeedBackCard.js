import Image from "next/image";
import React, { useCallback } from "react";
import { Button, Popconfirm, Rate, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteTwoTone,
  EditTwoTone,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import EditForm from "./EditForm";
import ModalBridge from "../Modal/ModalBridge";
import { deleteFeedback } from "./rating.action";
import { MODAL_ACTIONS, MODAL_IDS } from "../../store/utils/app.actions";
import { closeModal, openModal } from "../../store/actions/modal.actions";

const FeedBackCard = ({ feedBack }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal({ modalId: MODAL_IDS.FEEDBACK }));
  }, [dispatch]);
  const handleUpdate = useCallback(
    (item) => {
      dispatch(
        openModal({
          data: item,
          modalId: MODAL_IDS.FEEDBACK,
          action: MODAL_ACTIONS.UPDATE,
        })
      );
    },
    [dispatch]
  );
  const handleDelete = useCallback(
    (item) => {
      dispatch(
        deleteFeedback({
          id: item._id,
        })
      );
    },
    [dispatch]
  );
  return (
    <div>
      {feedBack?.map((item) => (
        <div className=" flex p-2" key={item._id}>
          <Image
            alt=""
            src={item?.image}
            width="110"
            height="110"
            layout="fixed"
          />
          <div className="pl-4 w-9/12">
            <Rate value={item.rate} disabled />
            <h1 className="dark:text-white text-sm">by {item?.name}</h1>
            <h1 className="dark:text-white text-sm">{item.email}</h1>
            <p className="dark:text-white font-bold text-base ">
              {item.comment}
            </p>
          </div>
          {item.email === user.email && (
            <Space>
              <Button
                className=""
                type="button"
                size="large"
                onClick={() => handleUpdate(item)}
                icon={<EditTwoTone />}
              ></Button>
              <Popconfirm
                title="Are you sure？"
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                onConfirm={() => handleDelete(item)}
                okType="danger"
                okText="Yes"
                cancelText="No"
              >
                <Button icon={<DeleteTwoTone />} size="large"></Button>
              </Popconfirm>
            </Space>
          )}
        </div>
      ))}

      <ModalBridge
        modalId={MODAL_IDS.FEEDBACK}
        handleCloseModal={handleCloseModal}
      >
        <EditForm setIsModalVisible={handleCloseModal} />
      </ModalBridge>
    </div>
  );
};

export default FeedBackCard;
