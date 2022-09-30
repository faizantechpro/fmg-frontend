/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import remove from "../../public/images/cart-remove.png";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import baseConfig from "../../store/services/base.config";
import { useRouter } from "next/router";

function CartItems({
  src,
  id,
  handleDelete,
  courseTitle,
  courseTitleArabic,
  courseDescription,
  courseDescriptionArabic,

  coursePrice,
  courseImage,
}) {
  const router = useRouter();
  const language = router.locale;

  const str = courseImage?.fileName?.split("/");
  // console.log("courseImage", courseImage);
  const trimString = function (string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

  return (
    <div className="flex flex-row justify-between mt-8 w-full">
      <div className="w-3/12">
        {!courseImage ? (
          <Image
            src="/card.png"
            alt="card"
            width="200"
            height="150"
            layout="fixed"
          />
        ) : (
          <img
            alt=""
            src={`${baseConfig.baseURL}course-thumbnail/${str[0]}/${str[1]}`}
            className="rounded-2xl w-32 h-[100px]"
          />
        )}
      </div>
      <div className="flex flex-col mt-2 ml-1 md:ml-3 lg:ml-10 xl:-ml-10 w-8/12">
        {language == "en" ? (
          <div className="font-bold text-base"> {courseTitle}</div>
        ) : (
          <div className="font-bold text-base"> {courseTitleArabic}</div>
        )}
        {language == "en" ? (
          <div className="font-normal text-xs w-3/4 my-2">
            {trimString(courseDescription || "", 70)}
          </div>
        ) : (
          <div className="font-normal text-xs w-3/4 my-2">
            {trimString(courseDescriptionArabic || "", 70)}
          </div>
        )}
        <button onClick={() => handleDelete(id)}>
          <div className="flex flex-row items-center">
            <Image alt="" src={remove} />
            <div className="text-[#ED3276] font-bold text-base ml-2">
              <u>
                <FormattedMessage id="cartItemRemove" />
              </u>
            </div>
          </div>
        </button>
      </div>
      <div className="font-normal text-base mt-2 w-1/12">$ {coursePrice}</div>
    </div>
  );
}

export default CartItems;
