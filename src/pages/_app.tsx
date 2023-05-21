import type { AppProps } from "next/app";
import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import "@/styles/main.sass";
import { client as walletClient } from "../utils/WalletProvider";
import { ApolloProvider } from "@apollo/client";
import client from "@/httpProviders/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={walletClient}>
      <ConnectKitProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
