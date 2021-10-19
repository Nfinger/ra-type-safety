import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apollo-client";
import { StoreProvider } from "easy-peasy";
import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </ApolloProvider>
  );
}
export default MyApp;
