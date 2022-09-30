import Head from "next/head";
import { Layout } from "antd";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import StepsForm from "../components/ForgotPassword/StepsForm";

export default function ForgotPassword() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StepsForm />
      <Footer />
    </Layout>
  );
}
