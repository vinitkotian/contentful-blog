import "../styles/blog.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
import React from "react";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
