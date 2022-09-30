import React, { useEffect, useState } from "react";
import { Button, Steps, notification, Popconfirm } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import PlayButton from "../../../../public/images/course-detail-video.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import baseConfig from "../../../../store/services/base.config";
import { saveWeek, addStep } from "./week.action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
const { Step } = Steps;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function GoToCourse() {
  const stepsData = [
    {
      _id: "1",
      title: "Lorem Ipsum is simply dummy text.",
      description: "Video . 15 min",
      className:
        "course-steps-description course-steps-icon dark:text-white text-[#000]",
    },
    {
      _id: "2",
      title: "Lorem Ipsum is simply dummy text.",
      description: "Video . 15 min",
      className:
        "course-steps-description course-steps-icon dark:text-white text-[#000]",
    },
    {
      _id: "3",
      title: "Lorem Ipsum is simply dummy text.",
      description: "Video . 15 min",
      className:
        "course-steps-description course-steps-icon dark:text-white text-[#000]",
    },
    {
      _id: "4",
      title: "Lorem Ipsum is simply dummy text.",
      description: "Video . 15 min",
      className:
        "course-steps-description course-steps-icon dark:text-white text-[#000]",
    },
  ];
  const dispatch = useDispatch();
  const router = useRouter();
  const language = router.locale;
  const { id, userCourseId } = router.query;
  const [current, setCurrent] = useState("0");

  const [item, setItem] = useState([]);
  const [course, setCourse] = useState({});

  const { user, token } = useSelector((state) => state.auth);

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const passData = (index) => {
    dispatch(saveWeek(item[current]));
    dispatch(addStep(index));
    router.push("/my-learnings/course-video");
  };

  const items = [
    getItem("Week 1", "1"),
    getItem("Week 2", "2"),
    getItem("Week 3", "3"),
    getItem("Week 4", "4"),
  ];
  const handleMark = () => {
    let data = {
      weekId: current,
      courseId: id,
    };
    axios
      .patch(`${baseConfig.baseURL}getAllUserCourses/${userCourseId}`, data)
      .then((res) => res.data)
      .then((data) => {
        notification.success({
          message: "Week Completed",
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    if (id) {
      axios
        .get(`${baseConfig.baseURL}allCourse/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setCourse(data.result);
        })
        .catch((err) => console.log(err));
      axios
        .get(`${baseConfig.baseURL}getTotal/${userCourseId}`)
        .then((res) => res.data)
        .then((data) => {
          // notification.success({
          //   message: " data course ",
          // });
        })
        .catch((err) => console.log(err));
      axios
        .get(`${baseConfig.baseURL}getWeek/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setItem(data.weeks);
          // notification.success({
          //   message: " get Week ",
          // });
        })
        .catch((err) => console.log(err));
    }
  }, [router, token, id, userCourseId]);

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] dark:text-white">
      <div className="text-3xl font-bold md:mt-20 mt-4 ml-5 md:mb-20 mb-4 sm:ml-24">
        <div>
          <div className="mb-1">
            <FormattedMessage id="myLearningsTitle" />
          </div>
          <div className="bg-[#ED3276] h-2 w-24"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-10 items-center lg:flex-row lg:items-start lg:justify-around lg:px-16">
        <div className="dark:bg-[#0D567A] bg-white w-80  rounded-2xl">
          <div className="text-xl font-bold px-10 py-9">Course Detail</div>
          <Menu
            onClick={onClick}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[current]}
            mode="vertical"
            className="course-timeline text-[#000] dark:text-white "
          >
            {item.map((item, i) => (
              <Menu.Item key={i}>{item.weekName}</Menu.Item>
            ))}
          </Menu>
        </div>
        <div className="dark:bg-[#0D567A] bg-white py-9 w-fit rounded-2xl mb-20 mt-10  lg:w-[849px] lg:mt-0">
          {language == "ar" ? (
            <div className="px-5 sm:px-10">
              <div className="text-2xl font-bold">{course.titleArabic}</div>
              <div className="text-lg my-6">{course.descriptionArabic}</div>
            </div>
          ) : (
            <div className="px-5 sm:px-10">
              <div className="text-2xl font-bold">{course.title}</div>
              <div className="text-lg my-6">{course.description}</div>
            </div>
          )}
          <div className="w-[99%] border border-solid border-[#86aabc] mt-9 m-auto" />
          <div className="px-10 sm:px-24 course-steps mt-10 flex justify-between relative">
            <Steps
              size="small"
              direction="vertical"
              current={0}
              className="course-steps mb-10"
            >
              {item[current]?.weekLessons?.map((item, index) => (
                <>
                  {language == "ar" ? (
                    <Step
                      title={item.lactureTitleArabic}
                      subTitle={
                        item.material.mimeType == "video/mp4" && (
                          <button className="bg-[#0897DD] rounded-lg w-10 h-8 flex flex-col justify-center items-center">
                            <Image src={PlayButton} alt="" />
                          </button>
                        )
                      }
                      description={item.material.mimeType}
                      onClick={() => passData(index)}
                      className="bg-transparent cursor-pointer h-24"
                    />
                  ) : (
                    <Step
                      title={item.lactureTitle}
                      subTitle={
                        item.material.mimeType == "video/mp4" && (
                          <button className="bg-[#0897DD] rounded-lg w-10 h-8 flex flex-col justify-center items-center">
                            <Image src={PlayButton} alt="" />
                          </button>
                        )
                      }
                      description={item.material.mimeType}
                      onClick={() => passData(index)}
                      className="bg-transparent cursor-pointer h-24"
                    />
                  )}
                </>
              ))}
            </Steps>
            <div className="absolute bottom-0 right-16">
              <Popconfirm
                title="Are you sure to Complete this Week?"
                onConfirm={handleMark}
                okType="dashed"
                okText="Yes"
                cancelText="No"
              >
                <Button
                  className="flex items-center dark:text-white hover:text-black hover:bg-blue-400  "
                  icon={<CheckCircleOutlined />}
                >
                  Completed
                </Button>
              </Popconfirm>
            </div>
          </div>
          <div className="w-[99%] border border-solid border-[#86aabc] mt-6 m-auto" />
        </div>
      </div>
    </div>
  );
}

export default GoToCourse;
