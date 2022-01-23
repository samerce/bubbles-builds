import Page from './Page'
import { Image, Header, PortfolioLink } from './Basics'
import { HSnapStack } from './Stack'
import bjgBetting from '../public/images/bjg-betting.jpg'
import bjgFullTable from '../public/images/bjg-full-table.jpg'
import bjgSuggestion from '../public/images/bjg-suggestion.jpg'

export default function Bjg(p) { return pug`
  Page(...p
    id='bjg' index=p.index title='Blackjack Genius' shaderId='7dfyzN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Blackjack Genius
    HSnapStack(items=Items itemProps=p)
`}

var Items = [
  {
    id: 'bjg-full-table',
    Content: p => pug`
      div.w-full.h-full.flex-center(class='p-[18px]')
        Image(
          src=bjgFullTable width=1280 height=720 framed priority=p.willAppear
          alt='portfolio screenshot of the casino table in Blackjack Genius'
        )
    `,
  },
  {
    id: 'bjg-suggestion',
    Content: p => pug`
      div.w-full.h-full.flex-center(class='p-[18px]')
        Image(
          src=bjgSuggestion width=1280 height=720 framed priority=p.willAppear
          alt='portfolio screenshot of a genius suggestion in Blackjack Genius'
        )
    `,
  },
  {
    id: 'bjg-betting',
    Content: p => pug`
      div.w-full.h-full.flex-center(class='p-[18px]')
        Image(
          src=bjgBetting width=1280 height=720 framed priority=p.willAppear
          alt='portfolio screenshot of the betting interface in Blackjack Genius'
        )
    `,
  },
]

var HowConfig = [
  'Java', 'Git', 'Atom', 'Clover Labs', 'Amazon.com', 'BSE Computer Science, University of Michigan', 'Android', 'Haxe', 'Objective-C',
]

var WhyConfig = {
  art: 'In the last few years of college, I started playing Blackjack with my then-partner Chris. We studied the math and memorized the best strategy to beat the house. The Blackjack training apps available for Android at the time were ugly and hard to use. So we set out to build a beautiful one with a friendly “Genius” to guide you to the best odds.',
  
  love: 'Building this app was a powerful bonding experience for me and my partner. We were newly in love, and the passion and mutual respect & admiration we held for each other shone through in our work. It was the first time I saw the beauty and necessity of a good team.',

  play: 'This was the first app I built that wasn’t for a school assignment or a job. My partner and I were little entrepreneurs, telling everyone at the casino about the app, showing it off every chance we got, playing Blackjack, and improving the app almost every day. We were obsessed. After a year of effort, the app made it into the top-20 on the Play Store and stayed there for over a year!',
}