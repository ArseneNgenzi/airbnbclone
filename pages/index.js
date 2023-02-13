import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header.jsx'
import Banner from '@/components/Banner.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData }) {
  // console.log(exploreData)
  return (
    <>
      <Head>
        <title>AirBnb Clone By Arsene</title>
        <meta name="description" content="Created by Arsene Ngenzi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='md:text-4xl font-semibold pb-5 '>Explore More Places</h2>
          {/* Pulling data  */}
          {/* <p>{getStaticProps()}</p> */}
          {exploreData?.map((item,id) => (
            <p key={id}>{item.location}</p>
          ))}
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
  .then(
    res => res.json()
  )
  return {
    props: {
      exploreData
    }
  }
}
// getStaticProps()