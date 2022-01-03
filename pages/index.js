import Head from 'next/head'

import { VSnapStack } from '../components/Stack'
import BioStack from '../components/BioStack'
import PortfolioStack from '../components/PortfolioStack'
import Nav from '../components/Nav'

export default () => {
  return (
  <VSnapStack className='w-screen h-screen' id='root-stack'>
    <Head>
      <title>bubbles builds</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
      <link href="https://fonts.googleapis.com/css2?family=Bentham&family=Bungee+Shade&family=Bayon&display=swap" rel="stylesheet" />
    </Head>

    <BioStack />
    <PortfolioStack />

    <Nav />
  </VSnapStack>
  )
}
