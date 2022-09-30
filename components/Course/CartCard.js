/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Card, Modal, notification } from "antd";
import cart from "../../icons/Cart.png";
import styles from "./course.module.css";
import { useState, useEffect, useCallback } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import { addItems } from "../Cart/API/CartAPI";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { addWishListUser } from "../WishList/wishList.action";
import baseConfig from "../../store/services/base.config";
import axios from "axios";

const CartCard = ({
  img,
  price,
  description,
  title,
  courseId,
  discount,
  titleArabic,
  descriptionArabic,
  courseImage,
}) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setItem] = useState([]);
  const { token, user } = useSelector((state) => state.auth);
  const str = courseImage?.fileName?.split("/");

  const router = useRouter();
  const { id } = router.query;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${baseConfig.baseURL}allCourse/${id}`);
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const trimString = function (string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const data = {
    course: id,
    user: user._id,
  };
  const showModal = () => {
    if (!token) {
      // console.log('saas')
      // notification.error({
      //   message: "Please Login to your account first",
      //   duration: 3
      // });
      router.push("/login");
    } else {
      setIsModalVisible(true);
      addItems(data);
    }
  };

  const addWishList = useCallback(() => {
    if (!token) {
      router.push("/login");
    } else {
      dispatch(addWishListUser({ userId: user._id, courseId: courseId }));
    }
  }, [dispatch, user._id, courseId, router, token]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const themes = localStorage.getItem("theme") == "dark";
  return (
    <Card className="dark:bg-[#0D567A] bg-white rounded-3xl  border-0">
      <div className="m-auto md:w-9/12 mt-8">
        <div className="relative lg:w-full md:w-3/5 m-auto w-full">
          {!courseImage ? (
            <Image src="/card.png" alt="card" width="307" height="242" />
          ) : (
            <img
              src={`${baseConfig.baseURL}course-thumbnail/${str[0]}/${str[1]}`}
              className="rounded-2xl w-96 h-[200px]"
              alt="card"
            />
          )}
        </div>
        <div className="h-20 flex flex-col justify-center">
          <h1 className="text-xl font-bold dark:text-white">${price}</h1>
          <p className="line-through text-gray-400 text-base ">${discount}</p>
        </div>

        <button
          className="w-11/12 h-10 bg-[#0897DD] dark:text-white rounded-lg font-bold text-base m-auto block"
          onClick={showModal}
        >
          <FormattedMessage id="courseCartAddToCart" />
        </button>
        <Modal
          centered
          visible={isModalVisible}
          onCancel={handleCancel}
          width={800}
          bodyStyle={
            themes
              ? { background: "#0d567a", borderRadius: "20px" }
              : { background: "white", borderRadius: "20px" }
          }
        >
          <div className="flex justify-between ">
            <h1 className="text-lg font-bold dark:text-white">
              <FormattedMessage id="courseCartAddedToCart" />
            </h1>
            <Link href={"/cart"} passHref>
              <button className=" h-12 bg-[#0897DD] dark:text-white rounded-lg font-bold text-base w-32">
                <FormattedMessage id="courseCartGoToCart" />
              </button>
            </Link>
          </div>
          <div className="flex  items-center">
            <div className="bg-[#0897DD] h-10 w-12 rounded-full flex items-center justify-center">
              <CheckOutlined style={{ fontSize: "22px", color: "white" }} />
            </div>
            <div className="mx-4">
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
                  src={`${baseConfig.baseURL}course-thumbnail/${str[0]}/${str[1]}`}
                  className="rounded-2xl w-[200px] h-[170px]"
                  alt="card"
                />
              )}
            </div>
            {router.locale == "en" ? (
              <div className="self-start">
                <h1 className="text-lg font-bold dark:text-white mb-3">
                  {title}
                </h1>
                <p className="text-sm dark:text-white">
                  {trimString(description || "", 120)}
                </p>
              </div>
            ) : (
              <div className="self-start">
                <h1 className="text-lg font-bold dark:text-white mb-3">
                  {titleArabic}
                </h1>
                <p className="text-sm dark:text-white">
                  {trimString(descriptionArabic || "", 120)}
                </p>
              </div>
            )}
          </div>
        </Modal>
        <div className="text-center flex flex-col items-center justify-evenly h-20">
          <a
            className="text-[#0897DD] underline md:text-[18px]"
            onClick={addWishList}
          >
            <FormattedMessage id="courseCartAddWishlist" />
          </a>
          <h1 className="dark:text-white  font-bold lg:text-sm">
            <FormattedMessage id="courseCartMoneyBack" />
          </h1>
        </div>
        <p className="dark:text-white lg:text-sm">
          <FormattedMessage id="courseCartIncludeTitle" />
        </p>
        <div className={styles.ul}>
          <ul className="dark:text-white lg:text-sm">
            <li>
              <FormattedMessage id="courseCartIncludeVid" />
            </li>
            <li>
              <FormattedMessage id="courseCartIncludeLifeAccess" />
            </li>
            <li>
              <FormattedMessage id="courseCartIncludeMobile" />
            </li>
            <li>
              <FormattedMessage id="courseCartIncludeCertif" />
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};
export default CartCard;
