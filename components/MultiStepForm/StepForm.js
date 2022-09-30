import React from "react";
import { Steps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "./StepForm.actions";

const { Step } = Steps;

const StepForm = ({ steps }) => {
  const dispatch = useDispatch();
  const { currentPageNo } = useSelector((state) => state.auth);
  const handleBack = () => {
    dispatch(prevPage(0));
  };
  return (
    <div className="parent">
      <div className=" h-12 pt-4 flex flex-row dark:text-white text-black">
        <Steps current={currentPageNo} responsive={false} onChange={handleBack}>
          {steps.map((item) => (
            <Step
              key={item.key}
              title={item.title}
              className="bg-transparent text-white"
            />
          ))}
        </Steps>
      </div>
      <div className={` min-h-96 pt-6`}>
        {steps[currentPageNo]?.content || ""}
      </div>
    </div>
  );
};

export default StepForm;
