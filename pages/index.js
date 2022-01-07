import Head from 'next/head'
import { VSnapStack } from '../components/Stack'
import Bio from '../components/Bio'
import ExpressYourYes from '../components/ExpressYourYes'
import Nav from '../components/Nav'
import Popup from '../components/Popup'

export default () => pug`
  VSnapStack.w-screen.h-screen(id='root-stack')
    Head
      title bubbles builds
      link(rel="icon" href="/favicon.ico")
      link(rel="preconnect" href="https://fonts.googleapis.com")
      link(rel="preconnect" href="https://fonts.gstatic.com" crossOrigin)
      link(href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&family=Bungee+Shade&family=Bayon&display=swap" rel="stylesheet")

    Bio
    ExpressYourYes
    Popup
    Nav
`