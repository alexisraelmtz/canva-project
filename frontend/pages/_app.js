import "../styles/globals.scss";
import { Provider } from "next-auth/client";
import { ApolloProvider } from "@apollo/client";
import client from "../client";


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
