import { Provider } from "@/components/ui/provider";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ChakraProvider >
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
