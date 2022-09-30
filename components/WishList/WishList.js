import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../Course/CourseCard";
import { getWishListUser } from "./wishList.action";

function WishList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { wishListCard } = useSelector((state) => state.wishList);
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    dispatch(getWishListUser(user?._id));
  }, [dispatch, user?._id, token, router]);

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] dark:text-white">
      <div className="md:text-3xl text-xl font-bold md:mt-20 mt-4 ml-5 sm:ml-24">
        <div>
          <div className="mb-1">
            <FormattedMessage id="wishListTitle" />
          </div>
          <div className="bg-[#ED3276] h-2 w-24"></div>
        </div>
      </div>
      <div className="font-normal w-72 text-xl dark:text-[#FFFFFF] ml-5 sm:ml-24 mt-8">
        {wishListCard.length > 0 ? (
          <p>
            <FormattedMessage id="wishListDesc" />
          </p>
        ) : (
          <p className="py-6">
            <FormattedMessage id="noItemFound" />
          </p>
        )}
      </div>
      <div className="px-4 md:px-16 xl:px-20 py-6">
        <Row gutter={[40, 32]}>
          {wishListCard?.map((item) => (
            <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8} key={item._id}>
              <CourseCard
                wishList={true}
                wishListId={item._id}
                title={item.title}
                titleArabic={item.titleArabic}
                description={item.description}
                descriptionArabic={item.descriptionArabic}
                price={item.price}
                rate={item.rate}
                type={item.type}
                discount={item.discount}
                courseId={item.courseId}
                certificate={item.certificate}
                courseMode={item.courseMode}
                courseImage={item.courseImage}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default WishList;
