import "../styles/blog.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
