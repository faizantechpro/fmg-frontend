import React, { useEffect, useState } from "react";
import { Button, notification, Rate } from "antd";
import { Formik, Form } from "formik";
import TextArea from "../Input/TextArea";
import { updateFeedback } from "./rating.action";
import { useDispatch, useSelector } from "react-redux";
import { MODAL_ACTIONS } from "../../store/utils/app.actions";

const EditForm = ({ setIsModalVisible, data, action }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("");
  const { user } = useSelector((state) => state.auth);

  const onFinish = () => {
    if (rate.length > 0 || comment.length > 0) {
      dispatch(
        updateFeedback({
          rate,
          comment,
          courseId: data?.courseId,
          id: data?._id,
          name: user.firstName,
          email: user.email,
        })
      );
      setIsModalVisible(false);
      setComment("");
      setRate("");
    } else {
      notification.error({
        message: "Please add Rate and Comment for feedback",
      });
    }
  };

  useEffect(() => {
    if (action === MODAL_ACTIONS.UPDATE) {
      setComment(data?.comment);
      setRate(data?.rate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data)]);
  return (
    <div className="px-4">
      <Formik
        initialValues={{
          rate,
          comment,
        }}
        onSubmit={(values) => {
          onFinish(values);
        }}
      >
        <Form>
          <h1 className="text-xl font-bold dark:text-white">
            Update Your FeedBack
          </h1>
          <div className="flex justify-center flex-col">
            <div className="py-2">
              <Rate
                allowHalf
                value={rate}
                onChange={(value) => setRate(value)}
              />
            </div>
          </div>
          <div className="py-4">
            <TextArea
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="dark:bg-[#0D567A]  p-2 border-2 dark:border-[#FFFFFF80] border-[#000]  rounded text-base dark:text-[#FFFFFFBF]"
              placeholder="Comments"
              rows={3}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-[#0897DD] rounded-lg h-10 w-32 text-lg font-bold text-white"
              type="submit"
            >
              Update
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditForm;
