import React from "react";
import MyLearningsCourses from "./MyLearningsCourses";
import CourseImage from "../../../public/images/wishlist-item.png";
import { Pagination } from "antd";
import { FormattedMessage } from "react-intl";

function MoreCourses() {
  const myLearningsCourses = [
    {
      _id: 1,
      src: CourseImage,
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      _id: 2,
      src: CourseImage,
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      _id: 3,
      src: CourseImage,
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] dark:text-white">
      <div className="mb-20">
        <div className="text-3xl font-bold mt-20 ml-5 sm:ml-24">
          <div className="mb-1">
            <FormattedMessage id="myLearningsTitle" />
          </div>
          <div className="bg-[#ED3276] h-2 w-24"></div>
        </div>
        <div>
          {myLearningsCourses.map((item) => (
            <MyLearningsCourses
              key={item._id}
              src={item.src}
              courseDuration={item.courseDuration}
              courseTitle={item.courseTitle}
              courseDescription={item.courseDescription}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Pagination
            defaultCurrent={1}
            total={50}
            className="course-pagination"
          />
        </div>
      </div>
    </div>
  );
}

export default MoreCourses;
