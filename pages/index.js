import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header.jsx'
import Banner from '@/components/Banner.jsx'
import SmallCard from '@/components/SmallCard'
import SlidingCard from '@/components/SlidingCard'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData, slidingCardsData }) {
  // console.log(exploreData)
  return (
    <>
      <Head>
        <title>AirBnb Clone By Arsene</title>
        <meta name="description" content="Created by Arsene Ngenzi" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='md:text-4xl font-semibold pb-5 '>Explore More Places</h2>
          {/* Pulling data  */}
          {/* <p>{getStaticProps()}</p> */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item,id) => (
              <SmallCard key={id} item={item}/>
            ))}
          </div>
        </section>

        <section className='py-6'>
          <h2 className='md:text-4xl font-semibold py-8 '>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-x-scroll h-auto scrollbar-hide py-3 pl-2'>
            {slidingCardsData?.map((item,id) => (
              <SlidingCard key={id} item={item}/>
            ))}
          </div>
        </section>
        <LargeCard
          img='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>

      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
  .then(
    res => res.json()
  )

  const slidingCardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  .then(res => res.json())

  return {
    props: {
      exploreData,
      slidingCardsData
    }
  }
}
// getStaticProps()