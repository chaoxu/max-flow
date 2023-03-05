import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Max Flow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <p className="description">
          Stealth retail arbitrage startup. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
