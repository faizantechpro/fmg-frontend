/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import { Tabs, Button } from "antd";
import card from "../../public/card.png";
import { UploadOutlined } from "@ant-design/icons";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import CartPayment from "../Cart/CartPayment";
import axios from "axios";
import { getItems } from "../Cart/API/CartAPI";
import baseConfig from "../../store/services/base.config";
import { useRouter } from "next/router";
import { notification } from "antd";

const ProductItems = [
  {
    _id: 1,
    src: card,
    coursePrice: "45",
    courseTitle: "Audio",
    courseDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    _id: 2,
    src: card,
    coursePrice: "45",
    courseTitle: "Video",
    courseDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    _id: 3,
    src: card,
    coursePrice: "45",
    courseTitle: "Course Title",
    courseDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Payment = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchItems = async function (id) {
      const data = await getItems(id);
      setCartItems(data);
    };
    fetchItems(user._id);
  }, [user._id]);

  const ProductItems = [];
  cartItems.map((item) =>
    ProductItems.push({
      _id: item.course?._id,
    })
  );

  const [showPurchase, setShowPurchase] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = React.useRef(null);
  const handleUpload = () => {
    fileRef.current.click();
    setShowPurchase(true);
    setShow(true);
  };
  const { TabPane } = Tabs;

  var formdatta = new FormData();
  const fileHandler = (e) => {
    if (e.target && e.target.files[0]) {
      formdatta.append("receiptImage", e?.target?.files[0]);
      formdatta.append("user", user._id);
      formdatta.append("cart", JSON.stringify(ProductItems));
    }
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    const imgTag = document.getElementById("myImage");
    imgTag.title = file.name;
    reader.onload = function (event) {
      imgTag.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const fileSubmiter = (e) => {
    setLoading(true)
    axios
      .post(`${baseConfig.baseURL}upload`, formdatta)
      .then((res) => {
        console.log(res);
        axios
          .delete(`${baseConfig.baseURL}deleteCart/${user._id}`)
          .then((res) => {
            console.log(res);
            setLoading(false)
            router.push("/my-learnings");
            notification.success({
              message: "Your Receipt Is Uploaded",
              duration: 3,
            });
          })
          .catch((err) => {
            console.log(err)
            setLoading(false)

          });
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
      });
    if (!e.target?.files) {
      return;
    }
    formdatta.append("receiptImage", e?.target?.files[0]);
    formdatta.append("user", user._id);
  };

  // const fileSubmiter = () => {
  //   axios
  //     .post(`${baseConfig.baseURL}upload`, formdatta)
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e));
  // };

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] xl:px-20 lg:px-16 px-4 py-14">
      <div className="h-12 dark:text-white">
        <div className="mb-1 text-2xl font-bold">
          <FormattedMessage id="paymentsTitle" />
        </div>
        <div className="bg-[#ED3276] h-2 w-24"></div>
      </div>
      <p className="mt-1 text-base font-normal dark:text-white">
        <FormattedMessage id="paymentsDesc" />
      </p>
      <div className="flex  md:w-1/2 m-auto my-10">
        <div className="w-full text-lg font-bold">
          <h1 className="dark:text-white my-3">
            <FormattedMessage id="paymentsAccountHolder" /> :
          </h1>
          <h1 className="dark:text-white">
            <FormattedMessage id="paymentsAccountNo" />
          </h1>
          <h1 className="dark:text-white my-3">
            <FormattedMessage id="paymentsBankName" />
          </h1>
        </div>
        <div className="w-full text-lg">
          <h1 className="dark:text-[#FFFFFFBF] my-3">
            {user.accountHolderName ?? "ABCD name"}
          </h1>
          <h1 className="dark:text-[#FFFFFFBF] ">
            {user.accountNumber ?? "1234567891589657"}
          </h1>
          <h1 className="dark:text-[#FFFFFFBF] my-3">
            {user.bank ?? "xyz name"}
          </h1>
        </div>
      </div>
      <Tabs defaultActiveKey="2" centered type="card">
        <TabPane tab="Online Payment" key="1">
          <h1 className="text-lg font-bold test-center dark:text-white">
            Online Payment will be added soon
          </h1>
        </TabPane>
        <TabPane tab="Bank Receipt" key="2">
          <div className="my-10 w-9/12 m-auto">
            <h1 className="text-base font-bold dark:text-white h-10 pl-3">
              <FormattedMessage id="paymentsProductDetail" />
            </h1>
            {/* <AllProducts items={ProductItems} /> */}
            <CartPayment />
          </div>
          {token && cartItems.length !== 0 && (
            <>
              <div className="flex justify-center">
                {show && (
                  <img
                    src={""}
                    alt="Image Preview"
                    id={"myImage"}
                    className="w-1/3 h-40 rounded-lg "
                  />
                )}
              </div>
              <div className="flex justify-center">
                <div className="h-12 w-1/2 flex items-center justify-around dark:text-white">
                  <input
                    ref={fileRef}
                    hidden
                    type={"file"}
                    onChange={(e) => fileHandler(e)}
                    className={"form-control"}
                  />
                  <button
                    className="text-sm font-bold h-10 w-36 flex justify-center items-center dark:text-white bg-[#0897DD] rounded"
                    type="button"
                    onClick={handleUpload}
                  >
                    <UploadOutlined className="mr-2" />{" "}
                    <FormattedMessage id="paymentsReceipt" />
                  </button>
                </div>
              </div>
              <p className="dark:text-white text-center mt-2">
                <FormattedMessage id="paymentsReceiptDesc" />
              </p>
              {showPurchase && (
                <div className="flex justify-end ">
                  <Button
                    onClick={(e) => fileSubmiter(e)}
                    loading={loading}
                    className="text-sm font-bold h-10 w-36 flex justify-center items-center dark:text-white hover:bg-[#0897DD] bg-[#0897DD] rounded"
                  >
                    <FormattedMessage id="paymentsPurchase" />
                  </Button>
                </div>
              )}
            </>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Payment;
