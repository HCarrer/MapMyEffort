import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthenticationProvider } from '../context/authenticationContext'
import { ActivityProvider } from '../context/activityContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta/>
      </Head>
      <AuthenticationProvider>
        <ActivityProvider>
          <Component {...pageProps}/>
        </ActivityProvider>
      </AuthenticationProvider>
    </>
  )
}
