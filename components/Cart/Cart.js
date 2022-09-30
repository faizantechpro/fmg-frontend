import React, { useEffect, useState } from "react";
import Image from "next/image";
import CartItems from "./CartItems";
import Back from "../../public/images/cart-back.png";
import cart from "../../public/images/cart-item.png";
import Link from "next/link";
import { getItems } from "./API/CartAPI";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import baseConfig from "../../store/services/base.config";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Tooltip } from "antd";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { user, token } = useSelector((state) => state.auth);
  const router = useRouter();
  console.log(cartItems);
  const totalArray = [];
  cartItems.map((d) => totalArray.push(d.course?.price));
  const total = totalArray.reduce((prev, crunt) => prev + crunt, 0);
  const handleDelete = async (itemId) => {
    console.log(itemId);
    axios
      .delete(`${baseConfig.baseURL}deleteOneCartItem/${itemId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    const data = await getItems(user._id);
    setCartItems(data);
  };
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    const fetchItems = async function (id) {
      const data = await getItems(id);
      setCartItems(data);
    };
    fetchItems(user._id);
  }, [user._id, router, token]);

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] dark:text-white">
      <div className="md:text-3xl text-xl font-bold md:mt-20 mt-4 ml-5 sm:ml-24">
        <div>
          <div className="mb-1">
            <FormattedMessage id="cartTitle" />
          </div>
          <div className="bg-[#ED3276] h-2 w-24"></div>
        </div>
      </div>
      <div className="md:flex justify-around">
        <div className="dark:bg-[#0D567A] bg-white h-[681px] w-11/12  sm:w-[550px] rounded-2xl mb-5 m-auto mt-9 px-11 md:w-[600px] lg:w-[650px] xl:w-[838px] py-8 overflow-hidden	 relative">
          <div className="flex flex-row justify-between  dark:text-[#FFFFFF] ">
            <div className="font-bold text-xl">
              <FormattedMessage id="cartItems" />
            </div>
            {/* <div className="font-normal text-base"><FormattedMessage id="cartCourses" /></div> */}
            <div>
              {cartItems.length} <FormattedMessage id="homePageCourses" />
            </div>
          </div>
          <div className="w-full border border-solid dark:border-[#FFFFFF] my-6" />
          {!cartItems.length == 0 && (
            <div className="flex flex-row justify-between  dark:text-[#FFFFFF] md:pr-12">
              <div className="font-bold text-base">
                <FormattedMessage id="cartProductDet" />
              </div>
              <div className="font-normal text-base">
                <FormattedMessage id="cartProdPrice" />
              </div>
            </div>
          )}
          {cartItems.length == 0 && (
            <h1 className="dark:text-white font-bold text-lg text-center">
              <FormattedMessage id="noItemFound" />
            </h1>
          )}
          <div className="h-[500px] overflow-y-scroll">
            {cartItems.map((item) => (
              <div key={item.course?._id}>
                <CartItems
                  src={cart}
                  id={item._id}
                  courseImage={item.course?.courseImage}
                  coursePrice={item.course?.price}
                  courseTitle={item.course?.title}
                  courseTitleArabic={item.course?.titleArabic}
                  courseDescription={item.course?.description}
                  courseDescriptionArabic={item.course?.descriptionArabic}
                  handleDelete={handleDelete}
                />
              </div>
            ))}
          </div>
          <div className=" absolute bottom-4">
            <Link className="mt-10 " href={"/courses"} passHref>
              <div className="mt-10  flex flex-row items-center cursor-pointer ">
                <Image alt="" src={Back} />
                <div className="text-[#0897DD] font-bold text-base ml-3">
                  <FormattedMessage id="cartBuyCourses" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="dark:bg-[#0D567A] bg-white h-[681px] w-11/12 sm:w-[427px] rounded-2xl mb-5 m-auto mt-9 px-11 py-8 dark:text-[#FFFFFF]  lg:w-[300px] xl:w-[427px] cartSummary">
          <div className="font-bold text-xl">
            <FormattedMessage id="cartSummary" />
          </div>
          <div className="font-bold text-base mt-14">
            <FormattedMessage id="cartItems" />
          </div>
          <div className="flex justify-between font-normal text-base mt-6">
            {/* <div>{cartItems.length} <FormattedMessage id="cartTotalCourses" /></div> */}
            <div>
              {cartItems.length} <FormattedMessage id="homePageCourses" />
            </div>
            <div>${total}</div>
          </div>
          <div className="w-full border border-solid dark:border-[#FFFFFF] my-7" />
          <div className="flex justify-between font-normal text-base mt-6 mb-2">
            <div>
              <FormattedMessage id="cartTotal" />
            </div>
            <div>${total}</div>
          </div>
          <Link href={"/cart/payment"} passHref>
            {cartItems.length == 0 ? (
              <Tooltip title={<FormattedMessage id="noItemFound" />}>
                <button
                  disabled={cartItems.length == 0}
                  className="bg-[#0897DD] rounded-lg h-14 w-full text-2xl mt-16 justify-center items-center flex"
                  type="submit"
                  style={{ display: "flex" }}
                >
                  <FormattedMessage id="cartCheckout" />
                </button>
              </Tooltip>
            ) : (
              <button
                className="bg-[#0897DD] rounded-lg h-14 w-full text-2xl font-bold mt-16"
                type="submit"
              >
                <FormattedMessage id="cartCheckout" />
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
