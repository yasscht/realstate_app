import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
