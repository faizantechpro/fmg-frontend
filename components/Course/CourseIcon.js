import React from "react";
import { Tooltip } from "antd";
const CourseIcon = ({ iconLinks }) => {
  return (
    <div className="flex flex-col justify-between">
      {iconLinks.map((item, index) => {
        return (
          <Tooltip title={item.title} key={index}>
            <div
              className="bg-[#113B73] lg:my-2 xl:my-4 my-4 md:my-2 flex justify-center items-center w-10 h-10 rounded-full"
              key={index}
            >
              <item.icon />
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default CourseIcon;
