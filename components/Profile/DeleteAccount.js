import React from "react";
import { Button, Card } from "antd";
import { deleteAccount } from "./profile.action";
import { useDispatch, useSelector } from "react-redux";
import { prevPage } from "../MultiStepForm/StepForm.actions";

const DeleteAccount = ({ setCurrent }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const HandleBack = () => {
    setCurrent("1");
  };

  function confirm() {
    dispatch(deleteAccount(user._id));
    dispatch(prevPage(0))
  }
  return (
    <Card className="bg-[#0D567A] md:w-3/4 border-0 md:ml-4 rounded-md mt-8 md:mt-0 flex flex-col">
      <div className="text-white text-lg font-bold ">Close Account</div>
      <div className="px-10 ">
        <h1 className="text-white text-lg font-bold text-center">
          Are you sure to Close this Account ?
        </h1>
        <div className="flex justify-center items-center h-28">
          <div className="w-20 mr-4">
            <Button type="primary" size="large" block onClick={HandleBack}>
              No
            </Button>
          </div>
          <div className="w-20 ml-4">
            <Button type="primary" size="large" block onClick={confirm}>
              Yes
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DeleteAccount;
