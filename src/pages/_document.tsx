import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-100">
        <Navbar />
        <div className="container mx-auto px-4">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
