import { Col } from "antd";
import Link from "next/link";
import React from "react";
import CourseCard from "./CourseCard";

const FilterCourse = ({ result }) => {
  return (
    <>
      {result?.map((item, index) => {
        return (
          // <Link href={"/courses/" + item._id} passHref key={item._id}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} key={index}>
            <CourseCard
              courseId={item._id}
              title={item.title}
              titleArabic={item.titleArabic}
              description={item.description}
              descriptionArabic={item.descriptionArabic}
              price={item.price}
              duration={item.duration}
              rate={item.rate}
              type={item.type}
              courseMode={item.courseMode}
              certificate={item.certificate}
              courseImage={item.courseImage}
            />
          </Col>
          // </Link>
        );
      })}
    </>
  );
};

export default FilterCourse;
