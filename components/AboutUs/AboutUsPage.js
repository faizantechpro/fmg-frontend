/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import Ceo from "../../public/images/AboutUsCEO.png";
import Service from "../../public/images/AboutUsService.png";
import Mission from "../../public/images/AboutUsMission.png";
import vision from "../../public/images/AboutUsVision.png";
import ViewPortAnimation from "../ViewPortAnimation";

function AboutUsPage() {
  const router = useRouter();
  const language = router.locale;

  const intl = useIntl();

  const AboutUsCards = [
    {
      _id: 1,
      src: Ceo,
      aboutUsTitle: intl.formatMessage({ id: "aboutUsCEO" }),
      aboutUsDescription: intl.formatMessage({ id: "aboutUsCEOD" }),
    },
    {
      _id: 2,
      src: Service,
      aboutUsTitle: intl.formatMessage({ id: "aboutUsService" }),
      aboutUsDescription: intl.formatMessage({ id: "aboutUsServiceD" }),
    },
    {
      _id: 3,
      src: Mission,
      aboutUsTitle: intl.formatMessage({ id: "aboutUsMission" }),
      aboutUsDescription: intl.formatMessage({ id: "aboutUsMissionD" }),
    },
    {
      _id: 4,
      src: vision,
      aboutUsTitle: intl.formatMessage({ id: "aboutUsVision" }),
      aboutUsDescription: intl.formatMessage({ id: "aboutUsVisionD" }),
    },
  ];

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] dark:text-white xl:px-20 lg:px-16 px-4">
      <div className="md:text-3xl text-xl font-bold md:mt-20 mt-4 ml-2 md:ml-5 sm:ml-24">
        <div>
          <div className="mb-1">
            <FormattedMessage id="homePageAboutTitle" />
          </div>

          <div className="bg-[#ED3276] h-2 w-24"></div>
        </div>
      </div>
      <div className="flex flex-col md:mt-28 mt-8">
        {AboutUsCards.map((item) => (
          <div
            className={
              language == "en"
                ? "flex flex-col justify-center items-center mb-56 sm:mb-20 lg:mb-40 xl:mb-20 lg:items-start lg:flex-row"
                : "flex flex-col justify-center items-center mb-56 sm:mb-20 lg:mb-40 xl:mb-20 lg:items-start lg:flex-row-reverse"
            }
            key={item._id}
          >
            <ViewPortAnimation>
              <div className="bg-[#0897DD] h-44 w-44 rounded-full flex flex-row items-center justify-center">
                <Image src={item.src} alt="" />
              </div>
            </ViewPortAnimation>
            <ViewPortAnimation>
              <div
                className={
                  language == "en"
                    ? "px-10 text-center lg:ml-14 lg:text-left lg:px-0"
                    : "px-10 text-center lg:mr-14 lg:text-right lg:px-0"
                }
              >
                <p className="h-8 font-bold text-2xl mb-2 mt-5 lg:mt-0">
                  {item.aboutUsTitle}
                </p>
                <p
                  className={
                    language == "en"
                      ? "md:w-96 md:h-48 sm:w-128 lg:w-[500px] xl:w-[760px] 2xl:w-[760px]  font-normal text-[19px] text-justify"
                      : "md:w-96 md:h-48 sm:w-128 lg:w-[500px] xl:w-[760px] 2xl:w-[760px]  font-normal text-[19px] text-right"
                  }
                >
                  {item.aboutUsDescription}
                </p>
              </div>
            </ViewPortAnimation>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;
