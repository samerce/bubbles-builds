import Head from 'next/head'
import { VSnapStack } from '../components/Stack'
import Popup from '../components/Popup'
import Nav from '../components/Nav'
import Bio from '../components/Bio'
import ExpressYourYes from '../components/ExpressYourYes'
import RickyForHouse from '../components/RickyForHouse'
import Dqitwh from '../components/Dqitwh'
import Acupuncture from '../components/Acupuncture'
import FlitAndLand from '../components/FlitAndLand'
import Psymail from '../components/Psymail'
import Glyphite from '../components/Glyphite'

export default p => pug`
  VSnapStack.w-screen.h-screen(id='root-stack')
    Head
      title bubbles builds
      link(rel="icon" href="/favicon.ico")
      link(rel="preconnect" href="https://fonts.googleapis.com")
      link(rel="preconnect" href="https://fonts.gstatic.com" crossOrigin)
      link(href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&family=Bungee+Shade&family=Bayon&display=swap" rel="stylesheet")

    each Page, index in [Bio, ExpressYourYes, RickyForHouse, Acupuncture, Dqitwh, FlitAndLand, Psymail, Glyphite]
      Page(index=index)

    Popup
    Nav
`
