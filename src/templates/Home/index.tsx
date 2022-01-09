import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Explore CV"
        description="A simple project to show in a map the places in Cape Verde and show more information and photos when clicked."
        canonical=""
        openGraph={{
          url: '',
          title: 'Explore CV',
          description: 'A simple project to show spots in the CV',
          images: [
            {
              url: '',
              width: 10,
              height: 10,
              alt: 'Explore CV'
            }
          ],
          site_name: 'Explore CV'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
