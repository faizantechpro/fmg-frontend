import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout, Row, Col, Button, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Slider from "../components/Slider/Slider";
import { getHomeData } from "../store/actions/home.action";
import { getLanguageData } from "../store/actions/app.actions";
import ReviewCarousel from "../components/ReviewCarousel/ReviewCarousel";
import HomeCourse from "../components/Course/HomeCourse";
import baseConfig from "../store/services/base.config";
import { motion } from "framer-motion";
import ViewPortAnimation from "../components/ViewPortAnimation";

export default function Home(props) {
  const { home } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // const { home } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHomeData());
    dispatch(getLanguageData());
    // if (home) {
    //   setLoading(false);
    // }
    /*
    const languageHandler = ()  => {
      if(lang.slug !== "en"){
        translations.setLanguage("ar")
        setLanguage(translations)
      }
      else if(lang.slug !== "ar"){
        translations.setLanguage("en")
        setLanguage(translations)
      }
    }
    languageHandler()
    */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider slider={home?.slider} />
      <div>
        <div className="px-4 xl:px-20 lg:px-16 py-10 dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2]">
          <div className="flex justify-between md:text-4xl text-base dark:text-white font-bold py-4 items-center">
            <div>
              <FormattedMessage id="homePageCourses" />
              <div className="bg-[#ED3276] h-2 md:w-32 w-18"></div>
            </div>

            <Link href="/courses" passHref>
              <Button className="bg-[#0D567A]" type="primary" size="large">
                <FormattedMessage id="myLearningsViewall" />
              </Button>
            </Link>
          </div>
          <ViewPortAnimation>
            {home ? (
              <Row gutter={[32, 32]}>
                <HomeCourse course={home?.course} />
              </Row>
            ) : (
              <Spin />
            )}
          </ViewPortAnimation>
        </div>
      </div>
      <AboutUs about={home?.about} aboutCard={home?.aboutCard} />
      <ReviewCarousel slideshow={home?.review} />
      <ContactUs />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const [languagesRes, homeRes] = await Promise.all([
    fetch(`${baseConfig.baseURL}home`),
    fetch(`${baseConfig.baseURL}language`),
  ]);
  const [home, language] = await Promise.all([
    languagesRes.json(),
    homeRes.json(),
  ]);
  return { props: { home, language } };
}
