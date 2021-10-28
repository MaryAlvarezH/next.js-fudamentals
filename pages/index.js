import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.handingMd}>
        <div>Fronted Developer, Informatics Engineer - IPN UPIICSA <br></br>
          <ul>
            <li>Skater</li>
            <li>Watercoloring</li>
            <li>Kpop/anime fan</li>
          </ul>

          <Link href="/posts/first-post">
            <a>Check my first post</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
