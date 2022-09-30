import React from "react";
import SingleWishListIcon from "./SingleWishListIcon";
import icon1 from "../../public/images/wishlist-icons-1.png";
import icon2 from "../../public/images/wishlist-icons-2.png";
import icon3 from "../../public/images/wishlist-icons-3.png";
import alllevels from "../../public/images/wishlist-alllevels.png";
import Image from "next/image";

function SingleWishList(item) {
  const wishListIcons = [
        {_id: 1, src: 'images/wishlist-icons-1.png', activeClassName : 'bg-[#3d7895] rounded-full w-10 h-10 flex flex-row items-center justify-center mt-6 mb-6'},
        {_id: 2, src: 'images/wishlist-icons-2.png', activeClassName : 'bg-[#3d7895] rounded-full w-10 h-10 flex flex-row items-center justify-center mb-6'},
        {_id: 3, src: 'images/wishlist-icons-3.png', activeClassName : 'bg-[#3d7895] rounded-full w-10 h-10 flex flex-row items-center justify-center mb-6'},
  ]
  return (
    <div>
      <div className="bg-[#0D567A] h-[460px] w-96 rounded-2xl mb-5 m-auto mt-9 px-7">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-col">
              {wishListIcons.map((icons) => (
                <SingleWishListIcon
                  key={icons._id}
                  src={icons.src}
                  activeClassName={icons.activeClassName}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <Image src={item.src} alt="" />
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
          <div className="bg-[#ED3276] rounded-2xl text-[#FFFFFF] font-bold text-xs flex flex-row justify-center items-center w-14 h-6 pb-1">
            New
          </div>
          <div className="">
            <Image src={alllevels} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleWishList;
