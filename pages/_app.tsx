import { ReactElement, ReactNode, useEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app';
import { globalStyles } from '../stitches.config';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  useEffect(()=>{
    globalStyles();
  })
  return getLayout(<Component {...pageProps} />)
}
