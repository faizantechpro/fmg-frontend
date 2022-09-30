import Head from "next/head";
import { Layout } from "antd";
import SignInPage from "../components/LogIn/SignIn";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function SignUp() {
  return (
    <Layout>
      <Head>
        <title>FMG</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SignInPage />
      <Footer />
    </Layout>
  );
}
