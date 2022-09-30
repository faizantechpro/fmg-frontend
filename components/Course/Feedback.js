import { Rate, Pagination } from "antd";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedBackCard from "./FeedBackCard";
import { getCourseRate } from "./rating.action";

const Feedback = ({ id }) => {
  const dispatch = useDispatch();
  const { CourseFeedBack } = useSelector((state) => state.feedBack);

  const [current, setCurrent] = useState(1);
  const [review, setReview] = useState([]);

  const onChange = (page) => {
    setCurrent(page);
    setReview(CourseFeedBack);
  };

  const IndexOfLastReview = current * 5;
  const IndexOfFirstReview = IndexOfLastReview - 5;
  const feed = review.slice(IndexOfFirstReview, IndexOfLastReview);

  useEffect(() => {
    dispatch(getCourseRate({ courseId: id }));
  }, [dispatch, id]);

  const currentTheme = localStorage.getItem("theme") == "dark";

  return (
    <div className="pb-10">
      {feed.length > 0 ? (
        <FeedBackCard feedBack={feed} />
      ) : (
        <FeedBackCard feedBack={CourseFeedBack.slice(0, 5)} />
      )}
      <div className="flex items-center justify-center pt-2">
        <Pagination
          pageSize={5}
          current={current}
          onChange={onChange}
          total={CourseFeedBack.length}
        />
      </div>
    </div>
  );
};

export default Feedback;
