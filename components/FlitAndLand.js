import Page from './Page'
import { Header, Image, PortfolioLink } from './Basics'
import flitandland from '../public/images/flitandland.jpg'

export default function FlitAndLand(p) { return pug`
  Page(...p
    id='flitandland' index=p.index title='Flit & Land' shaderId='7sfyzN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Prototype: Flit & Land
    Image(
      src=flitandland width=1280 height=799 framed
      alt='portfolio screenshot of the Flit & Land website'
    )
    PortfolioLink(href='https://flitandland-static.onrender.com' newTab)
      | See It
`}

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML / JSX / Pug', 'CSS', 'Styled Components', 'Coffeescript', 'AWS S3', 'AWS CloudFront', 'Node.js', 'Git', 'Atom', 'Webpack', 'Express Your Yes Foundation', 'Iodine.com', 'Crendo Creations', 'Third & Loom', 'Amazon.com', 'BSE Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Flit & Land is a prototype of a program from Drag Queen in the White House. In keeping with the book’s vibe, the site is a technicolor wonderland painting a world where the drudgery of 9-to-5 has been eradicated. A long gradient sets the mood and short blurbs are sprinkled among playful flourishes, making the ideas digestible and the journey light.',
  
  love: 'The prototype is a blueprint of an experiment with the hypothesis that if more of us were doing work that we loved everyday, then love, not profit, would become the driving force in our lives.',

  play: 'At the core of the blueprint is the idea that ease and lightheartedness lead us most quickly to our passions. When we play, we naturally move towards what interests us, what keeps us curious and growing. Flit & Land is a lifestyle experiment in which you are guaranteed a basic living—housing, food, transportation, internet—to explore your play, in exchange for offering your best self back to the network.',
}