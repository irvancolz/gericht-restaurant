import { ReactElement, ReactNode, useState, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { globalStyles } from "../stitches.config";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    setLoad(false);
    globalStyles();
  }, []);

  // make sure the page is completely load then show content
  if (load) {
    return;
  }
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
