/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import CourseIconsCard from "./CourseIconsCard";
import CourseImage from "../../../public/images/wishlist-item.png";
import { FormattedMessage } from "react-intl";

function CourseList(item) {
  const courseListIcons = [
    {
      _id: 1,
      src: "images/wishlist-icons-1.png",
      activeClassName:
        "bg-[#3d7895] rounded-full w-10 h-10 flex flex-row items-center justify-center mt-6 mb-6",
    },
    {
      _id: 2,
      src: "images/wishlist-icons-2.png",
      activeClassName:
        "bg-[#3d7895] rounded-full w-10 h-10 flex flex-row items-center justify-center mb-6",
    },
    {
      _id: 3,
      src: "images/wishlist-icons-3.png",
      activeClassName:
        "bg-[#3d7895] rounded-full w-10 h-10 flex flex-row items-center justify-center mb-6",
    },
  ];

  return (
    <>
      <div className="dark:bg-[#0D567A] bg-white h-[460px] w-96 rounded-2xl mb-5 mt-9 px-7">
        <div className="flex flex-row justify-between mb-5">
          <div>
            <div className="flex flex-col mt-7">
              <CourseIconsCard />
            </div>
          </div>
          <div className="mt-5">
            <Image src={CourseImage} alt="" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm">{item.courseDuration}</p>
          <p className="text-2xl font-bold">{item.coursePrice}</p>
        </div>
        <div className="text-xl font-bold mb-3 mt-2">{item.courseTitle}</div>
        <div className="text-xs text-justify font-normal">
          {item.courseDescription}
        </div>
        <div className="flex flex-row justify-between mt-10">
          <div className="bg-[#ED3276] rounded-2xl dark:text-[#FFFFFF] font-bold text-xs flex flex-row justify-center items-center w-14 h-6 pb-1">
            <FormattedMessage id="coursesCardNew" />
          </div>
          <div className="">
            <img src="images/wishlist-alllevels.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseList;
