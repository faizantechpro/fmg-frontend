import Image from "next/image";
import React from "react";

const ProductDetail = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item._id} className="md:flex p-3">
          <div className="w-72 lg:w-52 ">
            <Image src={item.src} alt="card" width="200" height="150" />
          </div>
          <div className="flex flex-col h-24 md:ml-4 xl:ml-2">
            <h1 className="text-xl text-white font-bold">{item.courseTitle}</h1>
            <p className="text-[16px] text-white">{item.courseDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
