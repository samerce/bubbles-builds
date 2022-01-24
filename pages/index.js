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
import LetsBuild from '../components/LetsBuild'

import useNav from '../model/useNav'

export default function Index(p) { 
  const {page} = useNav()
  
  return pug`
    VSnapStack.absolute.top-0.left-0.right-0.bottom-0.bg-accent
      Head
        title bubbles builds
        link(rel="preconnect" href="https://fonts.googleapis.com")
        link(rel="preconnect" href="https://fonts.gstatic.com" crossOrigin)
        link(href="https://fonts.googleapis.com/css2?family=Crimson+Pro&family=Denk+One&family=Bayon&display=swap" rel="stylesheet")
        link(rel="icon" href="/favicon.ico")

        meta(name='theme-color' content='#92017a')
        meta(name='description' content='portfolio website for bubbles sandcastle, aka samer chahine, a former corporate software engineer who now works with creatives, healers, nonprofits, and other socially & environmentally conscious agents.')

      each Page, index in [Bio, ExpressYourYes, RickyForHouse, Acupuncture, Dqitwh, FlitAndLand, Psymail, Glyphite, Bjg, LetsBuild]
        Page(index=index key=index willAppear=${index === page.index + 1})

      Popup
      Nav
  `
}
