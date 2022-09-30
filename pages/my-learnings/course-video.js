import Head from 'next/head';
import { Layout } from 'antd';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import CourseVideo from '../../components/Dashboard/MyLearnings/GoToCourse/CourseVideo';


export default function MyLearning() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CourseVideo />
      <Footer />
    </Layout>
  );
}
