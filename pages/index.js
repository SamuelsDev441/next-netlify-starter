import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to the Free File Editor!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Free File Editor" />
        <p className="description">
          A Free File Editor <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
