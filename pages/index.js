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
import Bjg from '../components/Bjg'

export default function Index(p) { return pug`
  VSnapStack.absolute.top-0.left-0.right-0.bottom-0.bg-accent
    Head
      title bubbles builds
      link(rel="icon" href="/favicon.ico")
      link(rel="preconnect" href="https://fonts.googleapis.com")
      link(rel="preconnect" href="https://fonts.gstatic.com" crossOrigin)
      link(href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&family=Bungee+Shade&family=Bayon&display=swap" rel="stylesheet")

    each Page, index in [Bio, ExpressYourYes, RickyForHouse, Acupuncture, Dqitwh, FlitAndLand, Psymail, Glyphite, Bjg]
      Page(index=index key=index)

    Popup
    Nav
`}
