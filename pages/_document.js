import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="We provide Planning Drawing and Submission, Interior & Architectural Design and Supply & Installation"
        />
        <meta content="Interior Design Studio" property="og:title" />
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/b6fff4_f3bbc1cc480145648db2c761fc438350~mv2.png/v1/fill/w_1080,h_1080,al_c/b6fff4_f3bbc1cc480145648db2c761fc438350~mv2.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
