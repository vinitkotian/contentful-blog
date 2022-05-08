import "../styles/blog.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/layout/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
