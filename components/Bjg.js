import Page from './Page'
import { Image, Header, PrimaryLink } from './Basics'
import { HSnapStack } from './Stack'
import bjgBetting from '../public/images/bjg-betting.jpg'
import bjgFullTable from '../public/images/bjg-full-table.jpg'
import bjgSuggestion from '../public/images/bjg-suggestion.jpg'

export default function Glyphite(p) { return pug`
  Page(...p
    id='bjg' index=p.index title='Blackjack Genius' shaderId='ssXczN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Blackjack Genius
    HSnapStack(items=Items)
`}

var Items = [
  {
    id: 'bjg-full-table',
    Content: p => pug`
      div.w-full.h-full.flex-center(class='p-[18px]')
        Image(src=bjgFullTable width=1280 height=720 framed)
    `,
  },
  {
    id: 'bjg-suggestion',
    Content: p => pug`
      div.w-full.h-full.flex-center(class='p-[18px]')
        Image(src=bjgSuggestion width=1280 height=720 framed)
    `,
  },
  {
    id: 'bjg-betting',
    Content: p => pug`
      div.w-full.h-full.flex-center(class='p-[18px]')
        Image(src=bjgBetting width=1280 height=720 framed)
    `,
  },
]

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}