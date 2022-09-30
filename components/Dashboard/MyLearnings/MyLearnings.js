import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Pagination, Row } from "antd";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import baseConfig from "../../../store/services/base.config";
import Slider from "../../Slider/Slider";
import PendingCourses from "./PendingCourses";
import HomeCourse from "../../Course/HomeCourse";
import MyLearningsCourses from "./MyLearningsCourses";
import { getHomeData } from "../../../store/actions/home.action";

function MyLearnings() {
  const dispatch = useDispatch();
  const router = useRouter();
  const language = router.locale;
  const { home } = useSelector((state) => state.home);
  const [InProgress, setInProgress] = useState(true);
  const [Completed, setCompleted] = useState(false);
  const [Pending, setPending] = useState(false);
  const [items, setItems] = useState([]);
  const [result, setResult] = useState([]);
  const [resultPending, setResultPending] = useState([]);
  const [resultProgress, setResultProgress] = useState([]);
  const [current, setCurrent] = useState(1);
  const [currentPending, setCurrentPending] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(1);
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    axios
      .get(`${baseConfig.baseURL}getAllUserCourses/${user._id}`)
      .then((res) => res.data)
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log(err));
  }, [user._id, router, token]);

  const fetchItems = () => {
    axios
      .get(`${baseConfig.baseURL}getAllUserCourses/${user._id}`)
      .then((res) => res.data)
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log(err));
  };

  const handleInProgress = () => {
    setInProgress(true);
    setCompleted(false);
    setPending(false);
    fetchItems();
  };
  const handleCompleted = () => {
    setCompleted(true);
    setInProgress(false);
    setPending(false);
    fetchItems();
  };
  const handlePending = () => {
    setPending(true);
    setCompleted(false);
    setInProgress(false);
    fetchItems();
  };
  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);
  const myLearningsCourses = [
    {
      _id: 1,
      src: "images/wishlist-item.png",
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      _id: 2,
      src: "images/wishlist-item.png",
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      _id: 3,
      src: "images/wishlist-item.png",
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const myLearningsCoursesCarousel = [
    {
      _id: 1,
      src: "images/wishlist-item.png",
      courseDuration: "1 hr 30 min",
      coursePrice: "$45",
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      _id: 2,
      src: "images/wishlist-item.png",
      courseDuration: "1 hr 30 min",
      coursePrice: "$45",
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      _id: 3,
      src: "images/wishlist-item.png",
      courseDuration: "1 hr 30 min",
      coursePrice: "$45",
      courseTitle: "Course Title",
      courseDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  const AllInPending = items.filter((data) => data.status === "PENDING");
  const AllInProgressed = items.filter((data) => data.status === "IN_PROGRESS");
  const AllInCompleted = items.filter((data) => data.status === "COMPLETED");

  const onChange = (page) => {
    setCurrentPending(page);
    setResultPending(AllInPending);
  };
  const onChangeProgress = (page) => {
    setCurrentProgress(page);
    setResultProgress(AllInProgressed);
  };
  const onChangeComplete = (page) => {
    setCurrent(page);
    setResult(AllInCompleted);
  };

  const IndexOfLastReview = currentPending * 3;
  const IndexOfFirstReview = IndexOfLastReview - 3;
  const allPending = resultPending.slice(IndexOfFirstReview, IndexOfLastReview);
  const IndexOfLastProgress = currentProgress * 3;
  const IndexOfFirstProgress = IndexOfLastProgress - 3;
  const allInProgress = resultProgress.slice(
    IndexOfFirstProgress,
    IndexOfLastProgress
  );
  const IndexOfLastComplete = current * 3;
  const IndexOfFirstComplete = IndexOfLastComplete - 3;
  const allInComplete = result.slice(IndexOfFirstComplete, IndexOfLastComplete);

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] dark:text-white">
      <Slider slider={home?.slider} />
      <div className="md:text-3xl text-xl font-bold md:mt-20 mt-4 ml-5 sm:ml-24">
        <div className="mb-1">
          <FormattedMessage id="myLearningsTitle" />
        </div>
        <div className="bg-[#ED3276] h-2 w-24"></div>
      </div>
      <div
        className={
          language == "en"
            ? "flex justify-center h-16 items-center md:mt-20 mt-6"
            : "flex flex-row-reverse justify-center h-16 items-center md:mt-20 mt-6"
        }
      >
        <button
          className={`${
            Pending
              ? "md:w-40 w-20 h-14 outline-none ring ring-[#ED3276] dark:bg-[#0D567A] bg-[#0897DD] text-white font-bold md:text-xl mr-1 rounded"
              : "md:w-52 w-24 h-14 bg-[#002652] text-[#FFFFFF80] md:text-lg px-2 rounded-lg"
          }`}
          onClick={handlePending}
        >
          <FormattedMessage id="buttonPending" />
        </button>
        <button
          className={`${
            InProgress
              ? "md:w-40 w-24 h-14 outline-none ring ring-[#ED3276] dark:bg-[#0D567A] bg-[#0897DD] text-white font-bold md:text-xl mr-1 rounded"
              : "md:w-52 w-28 h-14 bg-[#002652] text-[#FFFFFF80] md:text-lg px-2 rounded-lg"
          }`}
          onClick={handleInProgress}
        >
          <FormattedMessage id="myLearningsInProgress" />
        </button>
        <button
          className={`${
            Completed
              ? "md:w-40 w-24 h-14 outline-none ring ring-[#ED3276] dark:bg-[#0D567A] bg-[#0897DD] text-white font-bold md:text-xl rounded"
              : "md:w-52 w-28 h-14 bg-[#002652] text-[#FFFFFF80] md:text-lg px-2 rounded-lg"
          }`}
          onClick={handleCompleted}
        >
          <FormattedMessage id="myLearningsCompleted" />
        </button>
      </div>

      {Pending && (
        <div>
          <div>
            {allPending.length > 0
              ? allPending?.map((item) => (
                  <>
                    <PendingCourses
                      key={item[0]?.course?._id}
                      id={item[0]?.course?._id}
                      src={"images/wishlist-item.png"}
                      courseDuration={item[0]?.course?.duration}
                      courseImage={item[0]?.course?.courseImage}
                      courseTitle={item[0]?.course?.title}
                      courseDescription={item[0]?.course?.description}
                      courseTitleArabic={item[0]?.course?.titleArabic}
                      courseDescriptionArabic={
                        item[0]?.course?.descriptionArabic
                      }
                    />
                  </>
                ))
              : items
                  .filter((data) => data.status === "PENDING")
                  .slice(0, 3)
                  ?.map((item) => (
                    <>
                      <PendingCourses
                        key={item[0]?.course?._id}
                        id={item[0]?.course?._id}
                        src={"images/wishlist-item.png"}
                        courseImage={item[0]?.course?.courseImage}
                        courseDuration={item[0]?.course?.duration}
                        courseTitle={item[0]?.course?.title}
                        courseDescription={item[0]?.course?.description}
                        courseTitleArabic={item[0]?.course?.titleArabic}
                        courseMode={item[0]?.course?.courseMode}
                        certificate={item[0]?.course?.certificate}
                        courseDescriptionArabic={
                          item[0]?.course?.descriptionArabic
                        }
                      />
                    </>
                  ))}
            {AllInPending.length == 0 && (
              <h1 className="dark:text-white font-bold text-center text-lg py-4">
                <FormattedMessage id="noItemFound" />
              </h1>
            )}
            <div className="flex justify-end w-10/12 py-2">
              <Pagination
                pageSize={3}
                current={currentPending}
                onChange={onChange}
                total={AllInPending.length}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-20 mx-5 sm:mx-24">
            <div className="md:text-3xl text-lg font-bold">
              <div className="mb-1">
                <FormattedMessage id="myLearningsRelatedCourses" />
              </div>
              <div className="bg-[#ED3276] h-2 w-24"></div>
            </div>
            <div>
              <Link href={"/courses"} passHref>
                <button className="border bg-[#0D567A] border-solid border-white text-sm font-bold py-2 px-5">
                  <FormattedMessage id="myLearningsViewall" />
                </button>
              </Link>
            </div>
          </div>
          <div className="px-4 xl:px-20 lg:px-16 py-10">
            <Row gutter={[32, 32]}>
              <HomeCourse course={home?.course} />
            </Row>
            {/* {myLearningsCoursesCarousel.map((item) => (
              <CourseList
                key={item._id}
                src={item.src}
                courseDuration={item.courseDuration}
                coursePrice={item.coursePrice}
                courseTitle={item.courseTitle}
                courseDescription={item.courseDescription}
              />
            ))} */}
          </div>
        </div>
      )}
      {InProgress && (
        <div>
          <div>
            {allInProgress.length > 0
              ? allInProgress?.map((item) => (
                  <MyLearningsCourses
                    key={item[0]?._id}
                    id={item[0]?.course?._id}
                    userCourseId={item?._id}
                    src={"images/wishlist-item.png"}
                    courseDuration={item[0]?.course?.duration}
                    courseImage={item[0]?.course?.courseImage}
                    courseTitle={item[0]?.course?.title}
                    courseDescription={item[0]?.course?.description}
                    courseTitleArabic={item[0]?.course?.titleArabic}
                    courseMode={item[0]?.course?.courseMode}
                    certificate={item[0]?.course?.certificate}
                    courseDescriptionArabic={item[0]?.course?.descriptionArabic}
                    status="In Progress"
                  />
                ))
              : items
                  .filter((data) => data.status === "IN_PROGRESS")
                  .slice(0, 3)
                  .map((item) => (
                    <MyLearningsCourses
                      key={item[0]?._id}
                      id={item[0]?.course?._id}
                      userCourseId={item?._id}
                      src={"images/wishlist-item.png"}
                      courseImage={item[0]?.course?.courseImage}
                      courseDuration={item[0]?.course?.duration}
                      courseTitle={item[0]?.course?.title}
                      courseTitleArabic={item[0]?.course?.titleArabic}
                      courseDescriptionArabic={
                        item[0]?.course?.descriptionArabic
                      }
                      courseMode={item[0]?.course?.courseMode}
                      certificate={item[0]?.course?.certificate}
                      courseDescription={item[0]?.course?.description}
                      status="In Progress"
                    />
                  ))}
            {AllInProgressed.length == 0 && (
              <h1 className="dark:text-white font-bold text-center text-lg py-4">
                <FormattedMessage id="noItemFound" />
              </h1>
            )}
          </div>
          <div className="flex justify-end w-10/12">
            <Pagination
              pageSize={3}
              current={currentProgress}
              onChange={onChangeProgress}
              total={AllInProgressed.length}
            />
          </div>
          <div className="flex justify-between items-center mt-20 mx-5 sm:mx-24">
            <div className="md:text-3xl text-lg font-bold">
              <div className="mb-1">
                <FormattedMessage id="myLearningsRelatedCourses" />
              </div>
              <div className="bg-[#ED3276] h-2 w-32"></div>
            </div>
            <div>
              <Link href={"/courses"} passHref>
                <button className="border border-solid bg-[#0D567A] border-white text-sm font-bold py-2 px-5">
                  <FormattedMessage id="myLearningsViewall" />
                </button>
              </Link>
            </div>
          </div>
          <div className="px-4 xl:px-20 lg:px-16 py-10">
            <Row gutter={[32, 32]}>
              <HomeCourse course={home?.course} />
            </Row>
          </div>
        </div>
      )}
      {Completed && (
        <div>
          <div>
            {allInComplete.length > 0
              ? allInComplete?.map((item) => (
                  <MyLearningsCourses
                    key={item[0]?._id}
                    id={item[0]?.course?._id}
                    userCourseId={item?._id}
                    courseImage={item[0]?.course?.courseImage}
                    src={"images/wishlist-item.png"}
                    courseDuration={item[0]?.course?.duration}
                    courseTitle={item[0]?.course?.title}
                    courseDescription={item[0]?.course?.description}
                    courseMode={item[0]?.course?.courseMode}
                    certificate={item[0]?.course?.certificate}
                    courseTitleArabic={item[0]?.course?.titleArabic}
                    courseDescriptionArabic={item[0]?.course?.descriptionArabic}
                    status="Completed"
                  />
                ))
              : items
                  .filter((data) => data.status === "COMPLETED")
                  .slice(0, 3)
                  .map((item) => (
                    <MyLearningsCourses
                      key={item[0]?._id}
                      id={item[0]?.course?._id}
                      userCourseId={item?._id}
                      src={"images/wishlist-item.png"}
                      courseDuration={item[0]?.course?.duration}
                      courseImage={item[0]?.course?.courseImage}
                      courseTitle={item[0]?.course?.title}
                      courseDescription={item[0]?.course?.description}
                      courseTitleArabic={item[0]?.course?.titleArabic}
                      courseMode={item[0]?.course?.courseMode}
                      certificate={item[0]?.course?.certificate}
                      courseDescriptionArabic={
                        item[0]?.course?.descriptionArabic
                      }
                      status="Completed"
                    />
                  ))}
            {AllInCompleted.length == 0 && (
              <h1 className="dark:text-white font-bold text-center text-lg py-4">
                <FormattedMessage id="noItemFound" />
              </h1>
            )}
          </div>
          <div className="flex justify-end w-10/12 py-3">
            <Pagination
              pageSize={3}
              current={current}
              onChange={onChangeComplete}
              total={AllInCompleted.length}
            />
          </div>
          <div className="flex justify-between items-center mt-20 mx-5 sm:mx-24">
            <div className="md:text-3xl text-lg font-bold">
              <div className="mb-1">
                <FormattedMessage id="myLearningsRelatedCourses" />
              </div>
              <div className="bg-[#ED3276] h-2 w-24"></div>
            </div>
            <div>
              <Link href={"/courses"} passHref>
                <button className="border border-solid bg-[#0D567A] border-white text-sm font-bold py-2 px-5">
                  <FormattedMessage id="myLearningsViewall" />
                </button>
              </Link>
            </div>
          </div>
          <div className="px-4 xl:px-20 lg:px-16 py-10">
            <Row gutter={[40, 40]}>
              <HomeCourse course={home?.course} />
            </Row>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyLearnings;
