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
      <div className={styles.layout}>
        <div className={styles.header}>Header</div>
        <div className={styles.main}>
          <p>
            Ut unde libero voluptas. Architecto soluta vero tempore dignissimos explicabo magni quae ab quod. Fuga
            aliquam est omnis quis a ut maiores. Praesentium illum qui qui. Reprehenderit nihil maxime dolorem eos
            odio modi. Repellendus doloribus quo laboriosam at nisi consequuntur. Quia quas corporis rerum ducimus
            labore at cum. Dolorem voluptatem ut ut non vitae voluptatem consequatur ut doloribus. Facere voluptatem
            placeat nostrum ea. Vero nostrum ut laboriosam et et sunt magnam. Sunt qui at tempore et animi sit. Magni
            ullam repudiandae iusto deleniti error libero sed adipisci. Doloribus non ipsam ipsa explicabo sunt nobis
            qui. Quia debitis voluptates inventore vitae dolorum ea quod aut. Soluta quam saepe sit quibusdam quia et
            ut magni veritatis. Saepe rerum et non dolores deserunt. Consequatur rerum cum. Qui voluptatum doloribus
            hic sit laudantium.
          </p>
          <p>
            Ut unde libero voluptas. Architecto soluta vero tempore dignissimos explicabo magni quae ab quod. Fuga
            aliquam est omnis quis a ut maiores. Praesentium illum qui qui. Reprehenderit nihil maxime dolorem eos
            odio modi. Repellendus doloribus quo laboriosam at nisi consequuntur. Quia quas corporis rerum ducimus
            labore at cum. Dolorem voluptatem ut ut non vitae voluptatem consequatur ut doloribus. Facere voluptatem
            placeat nostrum ea. Vero nostrum ut laboriosam et et sunt magnam. Sunt qui at tempore et animi sit. Magni
            ullam repudiandae iusto deleniti error libero sed adipisci. Doloribus non ipsam ipsa explicabo sunt nobis
            qui. Quia debitis voluptates inventore vitae dolorum ea quod aut. Soluta quam saepe sit quibusdam quia et
            ut magni veritatis. Saepe rerum et non dolores deserunt. Consequatur rerum cum. Qui voluptatum doloribus
            hic sit laudantium.
          </p>
        </div>
        <Footer layoutClassName={styles.footer} />
      </div>
    </>
  )
}
