/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import baseConfig from "../../../../store/services/base.config";
import { addStep } from "./week.action";
import { FormattedMessage } from "react-intl";

function CourseVideo() {
  const dispatch = useDispatch();
  const { week, step } = useSelector((state) => state.week);
  const router = useRouter();
  const language = router.locale;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleNext = () => {
    dispatch(addStep(step + 1));
  };

  var str = week.weekLessons[step]?.material?.fileName?.split("/");
  const handleDownload = () => {
    const linkSource = `${baseConfig.baseURL}lesson-material/${str[0]}/${str[1]}/${str[2]}`;
    const downloadLink = document.createElement("a");
    const fileName = `${week.weekLessons[step]?.material?.fileName}`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] dark:text-white">
      <div className="md:text-3xl  text-lg font-bold md:mt-20 mt-4 ml-5 mb-20 sm:ml-24">
        <div>
          <div className="mb-1">
            <FormattedMessage id="myLearningsTitle" />
          </div>
          <div className="bg-[#ED3276] h-2 w-24"></div>
        </div>
      </div>
      <div className="dark:bg-[#0D567A] bg-white md:my-20 my-8 md:mx-16 mx-8 rounded-2xl w-auto">
        <div className="flex justify-between px-5 md:px-20">
          {language == "ar" ? (
            <div className="font-bold md:text-3xl text-base md:mt-24 mt-6">
              {week.weekLessons[step]?.lactureTitleArabic}
            </div>
          ) : (
            <div className="font-bold md:text-3xl text-base md:mt-24 mt-6">
              {week.weekLessons[step]?.lactureTitle}
            </div>
          )}
          {week.weekLessons.length > step + 1 && (
            <button className="mt-12" onClick={handleNext}>
              <div className="flex flex-row items-center">
                <div className="text-[#ED3276] font-bold text-xl ml-6">
                  <u>Next</u>
                </div>
              </div>
            </button>
          )}
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-2xl mt-12 relative">
            {week.weekLessons[step]?.material?.mimeType == "video/mp4" && (
              <video
                src={`${baseConfig.baseURL}lesson-material/${str[0]}/${str[1]}/${str[2]}`}
                width="850"
                height="500"
                controls
              ></video>
            )}
            {week.weekLessons[step]?.material?.mimeType == "image/png" && (
              <img
                src={`${baseConfig.baseURL}lesson-material/${str[0]}/${str[1]}/${str[2]}`}
                alt=""
                className="w-9/12 h-96 m-auto"
              />
            )}
            {week.weekLessons[step]?.material?.mimeType == "image/jpg" && (
              <img
                src={`${baseConfig.baseURL}lesson-material/${str[0]}/${str[1]}/${str[2]}`}
                alt=""
                className="w-9/12 h-96 m-auto"
              />
            )}
            {week.weekLessons[step]?.material?.mimeType == "image/jpeg" && (
              <img
                src={`${baseConfig.baseURL}lesson-material/${str[0]}/${str[1]}/${str[2]}`}
                alt=""
                className="w-9/12 h-96 m-auto"
              />
            )}
          </div>
          {week.weekLessons[step]?.material?.mimeType == "application/pdf" && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
              <Viewer
                fileUrl={`${baseConfig.baseURL}lesson-material/${str[0]}/${str[1]}/${str[2]}`}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          )}
          {week.weekLessons[step]?.material?.mimeType == "application/msword" &&
            ""}
        </div>
        {language == "ar" ? (
          <div className=" my-10 text-base text-justify px-5 md:px-20">
            {week.weekLessons[step]?.lactureDescriptionArabic}
          </div>
        ) : (
          <div className=" my-10 text-base text-justify px-5 md:px-20">
            {week.weekLessons[step]?.lactureDescription}
          </div>
        )}
        <div className="flex justify-end mb-10 pb-10 px-20">
          {week.weekLessons[step]?.material?.mimeType == "image/png" && (
            <button
              className="bg-[#0897DD] w-56 font-bold text-xl rounded-lg py-4"
              onClick={handleDownload}
            >
              Download
            </button>
          )}
          {week.weekLessons[step]?.material?.mimeType == "image/jpg" && (
            <button
              className="bg-[#0897DD] w-56 font-bold text-xl rounded-lg py-4"
              onClick={handleDownload}
            >
              Download
            </button>
          )}
          {week.weekLessons[step]?.material?.mimeType == "image/jpeg" && (
            <button
              className="bg-[#0897DD] w-56 font-bold text-xl rounded-lg py-4"
              onClick={handleDownload}
            >
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseVideo;
