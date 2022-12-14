import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Cabecalho } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cabecalho />
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
