import Head from "next/head";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PublicProfile from "../../components/Profile/PublicProfile";

export default function Settings() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PublicProfile />
      <Footer />
    </Layout>
  );
}
