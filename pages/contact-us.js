import Head from "next/head";
import { Layout } from "antd";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactUsPage from "../components/ContactUs";

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContactUsPage />
      <Footer />
    </Layout>
  );
}
