import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>
          <meta name="description" content="Store Wars - E-commerce UI inspirado em Star Wars"/>
          
          <link
            rel="preload"
            href="/fonts/Mandalore/mandalore.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Mandalore/mandaloretitle.ttf"
            as="font"
            crossOrigin=""
          />
          {/* <link
            rel="preload"
            href="/fonts/DistantGalaxy/SF Distant Galaxy.ttf"
            as="font"
            crossOrigin=""
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}