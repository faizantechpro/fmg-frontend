import Head from "next/head";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CourseDetail from "../../components/Course/CourseDetail";

const Detail = () => {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CourseDetail />
      <Footer />
    </Layout>
  );
};
export default Detail;
