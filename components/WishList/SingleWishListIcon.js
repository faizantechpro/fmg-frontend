import Image from "next/image";
import React from "react";

function SingleWishListIcon(icons) {
  return (
    <div>
      <div className={icons.activeClassName} key={icons._id}>
        <Image src={icons.src} alt="" />
      </div>
    </div>
  );
}

export default SingleWishListIcon;
