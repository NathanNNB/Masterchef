import '../styles/global.scss';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Gama</title>
        </Head>
        <Component {...pageProps} />
      
    </>
  )
}
