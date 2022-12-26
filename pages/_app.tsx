import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthCodeProvider } from '../context/authCodeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta/>
      </Head>
      <AuthCodeProvider>
        <Component {...pageProps} />
      </AuthCodeProvider>
    </>
  )
}
