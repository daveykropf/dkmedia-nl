import Head from 'next/head'
import Footer from '../components/Footer'

import './base.css'
import styles from './index.css'

export default function Index() {
  const siteTitle = 'DKMedia.nl - Photography'
  const metaDescription = 'test'
  const ogImage = 'static/ogImage.jpg'
  const url = 'https://dkmedia.nl/'

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:image" content={url + ogImage} />
        <meta property="og:image:secure_url" content={url + ogImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="en" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={url + ogImage} />
      </Head>
      <div className={styles.main}>
        <div>Header</div>
        <div>Content</div>
        <Footer />
      </div>
    </>
  )
}
