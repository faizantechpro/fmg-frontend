/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Button, Card, Rate, Popconfirm, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRightOutlined, DeleteTwoTone } from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";
import Watch from "../../icons/Watch";
import Infinity from "../../icons/Infinity";
import Certificate from "../../icons/Certificate";
import LevelAdvance from "../../icons/LevelAdvance";
import LevelBeginner from "../../icons/LevelBeginner";
import LevelIntermediate from "../../icons/LevelIntermediate";
import CourseIcon from "./CourseIcon";
import {
  deleteWishListUser,
  getWishListUser,
} from "../WishList/wishList.action";
import baseConfig from "../../store/services/base.config";
function CourseCard({
  title,
  description,
  descriptionArabic,
  titleArabic,
  duration,
  price,
  type,
  discount,
  rate,
  courseId,
  wishList,
  wishListId,
  courseMode,
  certificate,
  courseImage,
}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [week, setWeek] = useState([]);
  const intl = useIntl();
  const str = courseImage?.fileName?.split("/");

  const trimString = function (string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };
  useEffect(() => {
    if (courseId) {
      axios
        .get(`${baseConfig.baseURL}getWeek/${courseId}`)
        .then((res) => res.data)
        .then((data) => {
          setWeek(data.weeks);
        })
        .catch((err) => console.log(err));
    }
  }, [courseId]);

  const handleDelete = useCallback(() => {
    dispatch(deleteWishListUser(wishListId));
    dispatch(getWishListUser(user?._id));
  }, [wishListId, dispatch, user?._id]);

  const router = useRouter();
  const language = router.locale;
  const handleDetail = (courseId) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <Card className="dark:bg-[#0D567A] bg-white rounded-2xl dark:text-white m-auto  border-0 my-10">
      {wishList && (
        <div className="flex justify-end mb-2">
          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            okType="danger"
            cancelText="No"
            onConfirm={handleDelete}
          >
            <Button icon={<DeleteTwoTone />} />
          </Popconfirm>
        </div>
      )}
      <div className="grid grid-flow-row-dense grid-cols-5 ">
        <div className="flex flex-col h-52">
          {certificate && (
            <Tooltip title={<FormattedMessage id="certificate" />}>
              <div className="bg-[#113B73] lg:my-2 xl:my-4 my-4 md:my-2 flex justify-center items-center w-10 h-10 rounded-full">
                <Certificate />
              </div>
            </Tooltip>
          )}
          {courseMode && (
            <Tooltip title={<FormattedMessage id="onlineCourse" />}>
              <div className="bg-[#113B73] lg:my-2 xl:my-4 my-4 md:my-2 flex justify-center items-center w-10 h-10 rounded-full">
                <Infinity />
              </div>
            </Tooltip>
          )}
          <Tooltip
            title={`${week.length} ${intl.formatMessage({ id: "week" })}`}
          >
            <div className="bg-[#113B73] lg:my-2 xl:my-4 my-4 md:my-2 flex justify-center items-center w-10 h-10 rounded-full">
              <Watch />
            </div>
          </Tooltip>
          {/* <CourseIcon
            iconLinks={iconLinks}
            certificate={certificate}
            courseMode={courseMode}
          /> */}
        </div>
        <div className="col-span-4 w-full">
          {!courseImage ? (
            <Image src="/card.png" alt="card" width="280" height="230" />
          ) : (
            <img
              src={`${baseConfig.baseURL}course-thumbnail/${str[0]}/${str[1]}`}
              className="rounded-2xl w-96 h-[200px]"
              alt="card"
            />
          )}
        </div>
      </div>
      <div className="flex justify-end pt-2 h-14">
        <div>
          <div className="text-3xl font-bold">${price}</div>
          {discount ? (
            <div className="line-through text-gray-400 text-center text-base">
              $ {discount}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {language == "ar" ? (
        <>
          <div className="font-bold text-2xl py-2 h-12 truncate">
            {trimString(titleArabic || "", 30)}
          </div>
          <div className="h-16 overflow-hidden">
            {trimString(descriptionArabic || "", 150)}
          </div>
        </>
      ) : (
        <>
          <div className="font-bold text-2xl py-2 h-12 truncate">{title}</div>
          <div className="h-16 overflow-hidden">
            {trimString(description || "", 150)}
          </div>
        </>
      )}
      <div className="flex justify-between items-center pt-4">
        <Rate disabled defaultValue={rate} />
        <div className="capitalize">
          {type === "beginner" && <LevelBeginner />}
          {type === "intermediate" && <LevelIntermediate />}
          {type === "expert" && <LevelAdvance />}
          {language == "ar" ? (
            <span>
              {type === "beginner" && "مبتدئ"}
              {type === "intermediate" && "متوسط"}
              {type === "expert" && "خبير"}
            </span>
          ) : (
            <span> {type}</span>
          )}
        </div>

        <div className="pt-2 ">
          <Button
            type="link"
            className="flex items-center justify-center  capitalize cursor-pointer dark:text-white"
            onClick={() => handleDetail(courseId)}
          >
            <FormattedMessage id="ViewDetail" />
            <ArrowRightOutlined className="pl-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
export default CourseCard;
