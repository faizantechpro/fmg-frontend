import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Rate, Modal } from "antd";
import { useRouter } from "next/router";
import Feedback from "./Feedback";
import RatingForm from "./RatingForm";
import useDarkMode from "../../useDarkMode";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import baseConfig from "../../store/services/base.config";

const CourseDetailCard = ({
  title,
  titleArabic,
  student,
  createdBy,
  description,
  descriptionArabic,
  objective,
  objectiveArabic,
  rate,
  id,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const [, , themes] = useDarkMode();
  const language = router.locale;
  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  useEffect(() => {
    if (user?._id) {
      axios
        .get(`${baseConfig.baseURL}getAllUserCourses/${user?._id}`)
        .then((res) => res.data)
        .then((data) => {
          setItems(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user?._id]);
  const progress = items
    ?.filter(
      (item) => item.status === "IN_PROGRESS" || item.status === "COMPLETED"
    )
    .map((item) => item.cartItems);

  const currentTheme = localStorage.getItem("theme") == "dark";
  return (
    <Card className="dark:bg-[#0D567A] bg-white rounded-3xl dark:text-white  border-0 ">
      <div className="md:w-11/12 m-auto dark:text-white">
        <h1 className="h-12 dark:text-white text-lg font-bold flex items-center">
          <FormattedMessage id="courseTitle" />
        </h1>
        {language == "ar" ? (
          <p className="max-w-[537px] h-20 overflow-hidden ">{titleArabic}</p>
        ) : (
          <p className="max-w-[537px] h-20 overflow-hidden ">{title}</p>
        )}
        {/* <h1 className="h-10 text-[#ED3276] lg:text-lg text-base font-bold leading-5">
          {student} Students
        </h1>
        <h1 className="h-10 dark:text-white lg:text-lg text-base font-bold">
          Created By :
          <span className="dark:text-white lg:text-lg font-bold underline leading-5">
            {createdBy}
          </span>
        </h1> */}
        {/* <h1 className="h-10 dark:text-white text-lg font-bold leading-5">
          Overview
        </h1> */}
        <h2 className="h-10 dark:text-white text-lg font-bold leading-5">
          <FormattedMessage id="courseDescription" />
        </h2>
        {language == "ar" ? (
          <>
            <p className="max-w-[676px] h-28 overflow-hidden ">
              {descriptionArabic}
            </p>
          </>
        ) : (
          <p className="max-w-[676px] h-28 overflow-hidden ">{description}</p>
        )}
        <h1 className="h-10 dark:text-white text-lg font-bold">
          <FormattedMessage id="courseObjective" />
        </h1>
        {language == "ar" ? (
          <p className="max-w-[676px] h-24 overflow-hidden ">
            {objectiveArabic}
          </p>
        ) : (
          <p className="max-w-[676px] h-24 overflow-hidden ">{objective}</p>
        )}
        <div className="md:flex justify-between md:h-16">
          <div className="flex items-center">
            <h1 className=" dark:text-white text-xl font-bold mr-4">
              <FormattedMessage id="feedBack" />
            </h1>
            <Rate value={rate} allowHalf disabled className="pb-1" />
            <h1 className="ant-rate-text text-xl dark:text-white">
              ({rate?.toFixed(1)})
            </h1>
          </div>

          {progress.flat(progress.length).includes(id) && (
            <button
              className="bg-[#0897DD] rounded-lg h-10 w-36 md:text-base font-bold text-white"
              type="button"
              onClick={showModal}
            >
              <FormattedMessage id="addFeedBack" />
            </button>
          )}
        </div>
      </div>
      <Modal
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        width={800}
        bodyStyle={
          currentTheme
            ? { background: "#0d567a", borderRadius: "20px" }
            : { background: "#fff", borderRadius: "20px" }
        }
      >
        <RatingForm id={id} setIsModalVisible={setIsModalVisible} />
      </Modal>
      <Feedback id={id} />
    </Card>
  );
};
export default CourseDetailCard;
