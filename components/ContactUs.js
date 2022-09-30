import React from "react";
import { Row, Col } from "antd";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import ContactUsForm from "./ContactUsForm";
import ViewPortAnimation from "./ViewPortAnimation";

function ContactUsPage() {
  const router = useRouter();

  return (
    <>
      <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] dark:text-white xl:px-20 lg:px-16 px-4">
        <div className="md:text-3xl text-xl font-bold md:mt-[62px] mt-4 md:mb-[42px] mb-4">
          <div>
            <div>
              <FormattedMessage id="contactUsTitle" />
            </div>

            <div className="bg-[#ED3276] h-2 md:w-32 w-20 mt-1"></div>
          </div>
        </div>

        <Row
          className={
            router.locale == "ar" ? "pb-16 flex-row-reverse " : "pb-16"
          }
        >
          <Col xs={24} sm={24} md={11} lg={9}>
            <div>
              <div
                className={
                  router.locale == "en"
                    ? "md:text-2xl text-base py-2 font-bold md:w-[400px] md:leading-[40px]"
                    : "md:text-2xl text-base py-2 font-bold  md:leading-[40px] text-end"
                }
              >
                <FormattedMessage id="contactUsHeading" />
              </div>
              <div
                className={
                  router.locale == "en"
                    ? "md:text-base text-sm py-2 font-normal text-justify"
                    : "md:text-base text-sm py-2 font-normal text-end"
                }
              >
                <FormattedMessage id="contactUsDes" />
              </div>
            </div>
          </Col>
          <Col md={2} lg={4} />
          <Col xs={24} sm={24} md={11} lg={11}>
            <div className="dark:bg-[#0D567A] bg-white px-12 py-10 rounded-3xl">
              <ContactUsForm />
            </div>
          </Col>
        </Row>
      </div>
      <div className="w-full dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] lg:px-16 px-4">
        <iframe
          className="mb-16"
          width="100%"
          height={400}
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
      </div>
    </>
  );
}
export default ContactUsPage;
