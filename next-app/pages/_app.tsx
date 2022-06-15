import '../styles/globals.css'
import "../styles/LandingPage.css"
import "../styles/Profile.css"
import Head from 'next/Head'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	</Head>
  	<Component {...pageProps} />
  </>
  )
}

export default MyApp
