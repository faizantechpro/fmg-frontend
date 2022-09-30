import { Row, Col } from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import Graduation from "../icons/Graduation";
import Group from "../icons/Group";
import Degree from "../icons/Degree";
import Trusted from "../icons/Trusted";
import ServiceCard from "./ServiceCard";
import { useRouter } from "next/router";
import ViewPortAnimation from "./ViewPortAnimation";

function AboutUs({ about, aboutCard }) {
  const router = useRouter();
  const intl = useIntl();
  const language = router.locale;
  const services = [
    {
      title: intl.formatMessage({ id: "aboutUsCertificates" }),
      icon: Graduation,
      description: intl.formatMessage({ id: "aboutUsCertificatesD" }),
    },
    {
      title: intl.formatMessage({ id: "aboutUsLectures" }),
      icon: Group,
      description: intl.formatMessage({ id: "aboutUsLecturesD" }),
    },
    {
      title: intl.formatMessage({ id: "aboutUsService" }),
      icon: Degree,
      description: intl.formatMessage({ id: "aboutUsServiceD" }),
    },
    {
      title: intl.formatMessage({
        id: "aboutUsTrainedGroups",
      }),
      description: intl.formatMessage({
        id: "aboutUsTrainedGroupsD",
      }),
      icon: Trusted,
    },
  ];
  return (
    <div className="dark:bg-[#113B73] bg-[#F2F2F2] dark:text-white text-black xl:px-20 lg:px-16 px-4">
      <div className="flex justify-center md:text-3xl text-xl font-bold py-12">
        <div>
          <div>
            <FormattedMessage id="homePageAboutTitle" />
          </div>

          <div className="bg-[#ED3276] h-2 w-24"></div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="w-4/5 md:text-lg text-base text-center font-normal">
          <div>
            <FormattedMessage id="aboutUsD" />
          </div>
        </div>
      </div>
      <Row className="my-12">
        {services.map((item, index) => {
          return (
            <Col className="my-8" xs={24} sm={12} md={8} lg={6} key={index}>
              <ViewPortAnimation>
                <ServiceCard
                  Icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </ViewPortAnimation>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
export default AboutUs;
