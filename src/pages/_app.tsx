import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
