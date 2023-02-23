import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthenticationProvider } from '../context/authenticationContext'
import { ActivityProvider } from '../context/activityContext'
import Navbar from '../components/common/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta/>
      </Head>
      <AuthenticationProvider>
        <ActivityProvider>
          <Navbar/>
          <Component {...pageProps}/>
        </ActivityProvider>
      </AuthenticationProvider>
    </>
  )
}
