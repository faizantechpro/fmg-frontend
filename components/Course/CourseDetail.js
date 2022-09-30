import { useEffect } from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import CourseDetailCard from "./CourseDetailCard";
import { getCourse } from "./course.action";
import { FormattedMessage } from "react-intl";

const CourseDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { course, rate } = useSelector((state) => state.course);

  useEffect(() => {
    if (id) {
      dispatch(getCourse(id));
    }
  }, [dispatch, id]);

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] xl:px-20 lg:px-16 px-4 py-12">
      <div className="h-16 flex justify-center flex-col pl-6 pb-6">
        <h1 className="text-2xl font-bold dark:text-white ">
          <FormattedMessage id="course" />
        </h1>
        <div className="bg-[#ED3276] h-2 w-20"></div>
      </div>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={24} lg={16}>
          <CourseDetailCard
            title={course?.title}
            description={course?.description}
            titleArabic={course?.titleArabic}
            descriptionArabic={course?.descriptionArabic}
            rate={rate}
            student={course?.student}
            id={course?._id}
            createdBy={course?.createdBy}
            objective={course?.objective}
            objectiveArabic={course?.objectiveArabic}
          ></CourseDetailCard>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <CartCard
            courseId={course?._id}
            price={course?.price}
            discount={course?.discount}
            courseImage={course?.courseImage}
            img={course?.img}
            title={course?.title}
            description={course?.description}
            titleArabic={course?.titleArabic}
            descriptionArabic={course?.descriptionArabic}
          ></CartCard>
        </Col>
      </Row>
    </div>
  );
};
export default CourseDetail;
