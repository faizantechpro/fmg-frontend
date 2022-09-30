import Head from "next/head";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GoToCourse from "../../components/Dashboard/MyLearnings/GoToCourse/GoToCourse";

export default function MyLearning() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GoToCourse />
      <Footer />
    </Layout>
  );
}
