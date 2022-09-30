import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Progress } from "antd";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import baseConfig from "../../../store/services/base.config";
import { useSelector } from "react-redux";

function CourseAction(item) {
  const { user } = useSelector((state) => state.auth);
  const [InProgress, setInProgress] = useState(true);
  const [Completed, setCompleted] = useState(false);
  const [week, setWeek] = useState([]);
  const [CompletedWeek, setCompletedWeek] = useState([]);

  useEffect(() => {
    if (item.status == "In Progress") {
      setInProgress(true);
      setCompleted(false);
    } else if (item.status == "Completed") {
      setInProgress(false);
      setCompleted(true);
    }
    if (item.id) {
      axios
        .get(
          `${baseConfig.baseURL}weekProgress/${item.userCourseId}/${item.id}`
        )
        .then((res) => res.data)
        .then((data) => {
          setCompletedWeek(data);
        })
        .catch((err) => console.log(err));
      axios
        .get(`${baseConfig.baseURL}getWeek/${item.id}`)
        .then((res) => res.data)
        .then((data) => {
          setWeek(data.weeks);
        })
        .catch((err) => console.log(err));
    }
  }, [item.status, item.id, user._id, item.userCourseId]);

  const ForTest = () => (
    <h1 className="text-white">
      {CompletedWeek} of {week?.length} Completed
    </h1>
  );

  return (
    <div className="flex flex-col justify-center items-center dark:text-white">
      <div>
        {InProgress && (
          <Progress
            type="circle"
            strokeColor={"#ED3276"}
            trailColor={"#4c819b"}
            percent={(CompletedWeek / week?.length) * 100}
            format={() => ForTest()}
            className="course-progress dark:text-white"
          />
        )}
        {Completed && (
          <Progress
            type="circle"
            strokeColor={"#ED3276"}
            trailColor={"#4c819b"}
            percent={(CompletedWeek / week?.length) * 100}
            format={() => ForTest()}
            className="course-progress dark:text-white"
          />
        )}
      </div>
      {InProgress && (
        <button className="flex justify-center items-center font-bold text-xl dark:bg-[#0897DD] bg-[#0D567A] w-56 h-14 mt-4 rounded-lg">
          <Link
            href={`/my-learnings/${item.id}?userCourseId=${item.userCourseId}`}
            passHref
          >
            <p>
              <FormattedMessage id="myLearningsGotoCourse" />
            </p>
          </Link>
        </button>
      )}
    </div>
  );
}

export default CourseAction;
