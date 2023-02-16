import React from 'react'
import Head from 'next/head'

const Heads = ({pageTitle}) => {
  return (
    <Head>
    <title>{pageTitle || 'Airbnb Clone'}</title>
    <meta name="description" content="Created by Arsene Ngenzi" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="icon" href="/logo.png" />
  </Head>

  )
}

export default Heads