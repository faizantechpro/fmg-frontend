import Head from 'next/head';
import { Layout } from 'antd';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import MoreCourses from '../../components/Dashboard/MyLearnings/MoreCourses';


export default function MyLearning() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MoreCourses />
      <Footer />
    </Layout>
  );
}
