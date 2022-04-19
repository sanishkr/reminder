import Head from 'next/head'

export default () => {
  return <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
    <div className="flex justify-center mt-64 text-3xl text-green-700 font-pacifico">Hello World!!</div>
    {/* <img src="/pic.jpeg" alt="me" width="64" height="64" /> */}
  </div>
}