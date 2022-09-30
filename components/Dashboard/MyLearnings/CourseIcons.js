import React from "react";
import Image from "next/image";
import CourseIcon1 from "../../../public/images/wishlist-icons-1.png";
import CourseIcon2 from "../../../public/images/wishlist-icons-2.png";
import CourseIcon3 from "../../../public/images/wishlist-icons-3.png";

function CourseIcons(icons) {
  return (
    <>
      <div className="bg-[#3d7895] rounded-full w-10 h-10 flex items-center justify-center mr-5 ">
        <Image src={CourseIcon1} alt="" />
      </div>
      <div className="bg-[#3d7895] rounded-full w-10 h-10 flex items-center justify-center mr-5">
        <Image src={CourseIcon2} alt="" />
      </div>
      <div className="bg-[#3d7895] rounded-full w-10 h-10 flex items-center justify-center">
        <Image src={CourseIcon3} alt="" />
      </div>
    </>
  );
}

export default CourseIcons;
