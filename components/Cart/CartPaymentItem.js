/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import baseConfig from "../../store/services/base.config";

function CartPaymentItem(item) {
  const trimString = function (string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };
  // console.log(item.courseImage, "item");
  const str = item?.courseImage?.fileName?.split("/")
  return (
    <div>
      <div className="md:flex p-3">
        <div className="w-72 lg:w-52 ">
          {!item?.courseImage ? (
            <Image
              src="/card.png"
              alt="card"
              width="200"
              height="150"
              layout="fixed"
            />
          ) : (
            <img
              // src={`${baseConfig.baseURL}images/${item?.courseImage?.fileName}`}
              src={`${baseConfig.baseURL}course-thumbnail/${str[0]}/${str[1]}`}
              alt="card"
              className="rounded-2xl h-[180px]"
            />
          )}
        </div>
        <div className="flex flex-col h-24 md:ml-4 xl:ml-2">
          <h1 className="text-xl dark:text-white font-bold">
            {item.courseTitle}
          </h1>
          <p className="text-[16px] dark:text-white">
            {trimString(item.courseDescription || "", 80)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartPaymentItem;
