import Link from "next/link";
import { Col } from "antd";
import CourseCard from "./CourseCard";
const HomeCourse = ({ course }) => {
  return (
    <>
      {course?.map((item) => (
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} key={item._id}>
          <CourseCard
            courseId={item._id}
            title={item.title}
            description={item.description}
            titleArabic={item.titleArabic}
            descriptionArabic={item.descriptionArabic}
            price={item.price}
            duration={item.duration}
            discount={item.discount}
            rate={item.rate}
            type={item.type}
            courseMode={item.courseMode}
            certificate={item.certificate}
            courseImage={item.courseImage}
          />
        </Col>
      ))}
    </>
  );
};
export default HomeCourse;
