/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import { useRouter } from "next/router";
import CourseIcons from "./CourseIcons";
import Watch from "../../../icons/Watch";
import CourseAction from "./CourseAction";
import Infinity from "../../../icons/Infinity";
import Certificate from "../../../icons/Certificate";
import baseConfig from "../../../store/services/base.config";
import CourseImage from "../../../public/images/wishlist-item.png";
import axios from "axios";
import { FormattedMessage, useIntl } from "react-intl";

function MyLearningsCourses(item) {
  const router = useRouter();
  const intl = useIntl();
  const [week, setWeek] = useState([]);
  const language = router.locale;

  useEffect(() => {
    if (item.id) {
      axios
        .get(`${baseConfig.baseURL}getWeek/${item.id}`)
        .then((res) => res.data)
        .then((data) => {
          setWeek(data.weeks);
        })
        .catch((err) => console.log(err));
    }
  }, [item.id]);

  const str = item?.courseImage?.fileName.split("/");

  return (
    <div>
      <div className="dark:bg-[#0D567A] bg-[#0897DD] rounded-2xl mb-5 mt-9 mx-14 p-12">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full">
          <div className="md:w-3/12">
            {!item?.courseImage ? (
              <Image src="/card.png" alt="card" width="280" height="230" />
            ) : (
              <img
                src={`${baseConfig.baseURL}course-thumbnail/${str[0]}/${str[1]}`}
                alt=""
                className="rounded-2xl md:w-9/12 h-[200px]"
              />
            )}
          </div>
          {language == "ar" ? (
            <div className="flex flex-col items-center text-center lg:items-start md:w-7/12">
              <div className="text-xl font-bold mt-2">
                {item.courseTitleArabic}
              </div>
              <div className="text-base text-center lg:text-justify font-normal my-5 w-auto lg:w-72 xl:w-128">
                {item.courseDescriptionArabic}
              </div>
              <div className="flex mb-5 lg:mb-0">
                {item.certificate && (
                  <Tooltip title={<FormattedMessage id="certificate" />}>
                    <div className="bg-[#3d7895] mr-5 flex justify-center items-center w-10 h-10 rounded-full">
                      <Certificate />
                    </div>
                  </Tooltip>
                )}
                {item.courseMode && (
                  <Tooltip title={<FormattedMessage id="onlineCourse" />}>
                    <div className="bg-[#3d7895] mr-5 flex justify-center items-center w-10 h-10 rounded-full">
                      <Infinity />
                    </div>
                  </Tooltip>
                )}
                <Tooltip
                  title={`${week.length} ${intl.formatMessage({ id: "week" })}`}
                >
                  <div className="bg-[#3d7895] mr-5 flex justify-center items-center w-10 h-10 rounded-full">
                    <Watch />
                  </div>
                </Tooltip>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center lg:items-start md:w-7/12">
              <div className="text-xl font-bold mt-2">{item.courseTitle}</div>
              <div className="text-base text-center lg:text-justify font-normal my-5 w-auto lg:w-72 xl:w-128">
                {item.courseDescription}
              </div>
              <div className="flex mb-5 lg:mb-0">
                {item.certificate && (
                  <Tooltip title={<FormattedMessage id="certificate" />}>
                    <div className="bg-[#3d7895] mr-5 flex justify-center items-center w-10 h-10 rounded-full">
                      <Certificate />
                    </div>
                  </Tooltip>
                )}
                {item.courseMode && (
                  <Tooltip title={<FormattedMessage id="onlineCourse" />}>
                    <div className="bg-[#3d7895] mr-5 flex justify-center items-center w-10 h-10 rounded-full">
                      <Infinity />
                    </div>
                  </Tooltip>
                )}
                <Tooltip
                  title={`${week.length} ${intl.formatMessage({ id: "week" })}`}
                >
                  <div className="bg-[#3d7895] mr-5 flex justify-center items-center w-10 h-10 rounded-full">
                    <Watch />
                  </div>
                </Tooltip>
              </div>
            </div>
          )}
          <div className="md:w-2/12">
            <div>
              <CourseAction
                status={item.status}
                id={item.id}
                userCourseId={item.userCourseId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLearningsCourses;
