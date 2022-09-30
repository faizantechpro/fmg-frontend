import Head from 'next/head';
import { Layout } from 'antd';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import MyLearnings from '../../components/Dashboard/MyLearnings/MyLearnings';


export default function MyLearning() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MyLearnings />
      <Footer />
    </Layout>
  );
}
