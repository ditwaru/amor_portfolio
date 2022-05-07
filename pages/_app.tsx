import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo
      title="Amor Nuñez Portfolio"
      description='My contritubtions as stage manager to the production of Damn Yankees at South Mecklenburg High School, 2022.'
      openGraph={{
        type: 'website',
            locale: 'en_IE',
            url: 'https://res.cloudinary.com/dtqsyhh8u/image/upload/v1651932108/IMG_2950_jybwsr.jpg',
            site_name: 'SiteName',
      }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
