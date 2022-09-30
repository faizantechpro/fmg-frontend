/* eslint-disable @next/next/no-img-element */
import { Carousel } from "antd";
import { useEffect } from "react";
import Image from "next/image";
import firstImage from "../../public/images/sliderImage-small.png";
import lastImage from "../../public/images/sliderImage-large.png";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";

const Slider = ({ slider }) => {
  const intl = useIntl();
  const router = useRouter();
  const language = router.locale;
  const slides = [
    {
      key: "1",
      title: intl.formatMessage({ id: "sliderTitle" }),

      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s,",
      firstImage: firstImage,
      lastImage: lastImage,
    },
    {
      key: "2",
      title: intl.formatMessage({ id: "sliderTitle" }),
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s,",
      firstImage: firstImage,
      lastImage: lastImage,
    },
    {
      key: "2",
      title: intl.formatMessage({ id: "sliderTitle" }),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s,",
      firstImage: firstImage,
      lastImage: lastImage,
    },
  ];
  return (
    <div className="carousel-container dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2]">
      <Carousel dotPosition="right" autoplay autoplaySpeed={5000}>
        {slider?.map((item) => (
          <div key={item._id}>
            <div className="carousel">
              {language == "ar" ? (
                <div className="sm:mr-48 xl:-ml-14">
                  <h1 className="carousel-h1 dark:text-white">
                    {item.titleArabic}
                  </h1>
                  <p className="carousel-p text-justify dark:text-white">
                    {item.descriptionArabic}
                  </p>
                </div>
              ) : (
                <div className="sm:mr-48 xl:-ml-14">
                  <h1 className="carousel-h1 dark:text-white">{item.title}</h1>
                  <p className="carousel-p text-justify dark:text-white">
                    {item.description}
                  </p>
                </div>
              )}
              <div className="carousel-img-small">
                {/* <div className="carousel-image-small"> */}
                {/* <Image alt="" src={firstImage} /> */}
                {/* </div> */}
              </div>
              <div className="carousel-img-large">
                <div className="carousel-image-large">
                  {/* <Image src={lastImage} alt="" /> */}
                  <img alt="" src={item.image} className="rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
