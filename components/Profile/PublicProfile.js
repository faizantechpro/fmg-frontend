import React, { useState } from "react";
import { Avatar, Popconfirm } from "antd";
import Profile from "./Profile";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { deleteAccount } from "./profile.action";
import AccountSetting from "./AccountSetting";
import { useDispatch, useSelector } from "react-redux";

const PublicProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  function confirm() {
    dispatch(deleteAccount(user._id));
  }
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2]">
      <div className="md:py-12 py-4 w-11/12 m-auto text-xl font-bold dark:text-white">
        Public Profile
      </div>
      <div className="w-11/12 m-auto pb-10 md:flex">
        <div className="dark:bg-[#0D567A] bg-white md:w-1/4 border-0 rounded-md px-0 py-6 h-[412px]">
          <div className="flex flex-col items-center h-40 justify-evenly">
            <Avatar
              src={user?.image ?? "https://joeschmoe.io/api/v1/random"}
              size={{ xs: 100, sm: 100, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
            <h1 className="text-base font-bold dark:text-white">
              {user?.firstName ?? "UserName"}
              {user?.lastName}
            </h1>
          </div>
          <ul>
            <li
              className={`${
                activeTab === "tab1"
                  ? "pl-8 bg-[#00153F80] font-normal h-8 bg-[#00153F80] dark:text-white justify-center flex flex-col border-l-[#ED3276] border-l-4 text-sm"
                  : "h-8 pl-8 dark:text-white justify-center flex flex-col  cursor-pointer border-l-4 border-l-transparent text-sm"
              }`}
              onClick={handleTab1}
            >
              Profile
            </li>
            <li
              className={`${
                activeTab === "tab2"
                  ? "pl-8 bg-[#00153F80] font-normal h-8 bg-[#00153F80] dark:text-white justify-center flex flex-col border-l-[#ED3276] border-l-4 text-sm "
                  : "h-8 pl-8 dark:text-white justify-center flex flex-col  cursor-pointer border-l-4 border-l-transparent text-sm"
              }`}
              onClick={handleTab2}
            >
              Account Settings
            </li>
            <li className="h-8 pl-8 dark:text-white justify-center flex flex-col  cursor-pointer border-l-4 border-l-transparent text-sm">
              <Popconfirm
                placement="topLeft"
                title="Are you sure to delete this Account ?"
                icon={<QuestionCircleOutlined />}
                style={{ color: "red" }}
                onConfirm={confirm}
                okType="danger"
                okText="Yes"
                cancelText="No"
              >
                Close Account
              </Popconfirm>
            </li>
          </ul>
        </div>
        {activeTab === "tab1" && <Profile />}
        {activeTab === "tab2" && <AccountSetting />}
      </div>
    </div>
  );
};

export default PublicProfile;
