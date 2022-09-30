import Head from 'next/head';
import { Layout } from 'antd';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import AboutUsPage from '../components/AboutUs/AboutUsPage';


export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutUsPage />
      <Footer />
    </Layout>
  );
}
