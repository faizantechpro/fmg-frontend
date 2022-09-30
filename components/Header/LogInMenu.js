import { Tooltip } from "antd";
import React from "react";
import ActiveLink from "./ActiveLink";

const LogInMenu = ({ UserItems }) => {
  return (
    <div>
      <div className="flex space-x-6">
        {UserItems.map((item) => (
          <ActiveLink
            activeClassName={"bg-[#002652]"}
            href={item.href}
            key={item._id}
          >
            <Tooltip placement="bottom" title={item.text}>
              <a className="text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {item.svg}
              </a>
            </Tooltip>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default LogInMenu;
