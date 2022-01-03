import { HSnapStack, HSnapItem } from './Stack'
import { PageTitle, Image, Link, Button, Header } from './Basics'
import useNav from '../model/useNav'

import flitandland from '../public/images/flitandland.jpg'
import rickyforhouse from '../public/images/rickyforhouse.jpg'
import dqitwh from '../public/images/dqitwh.jpg'

export default () => {
  const {setNavLeft, setNavRight} = useNav()

  return (
    <div className='snap-start snap-always h-full w-full relative'>
      <iframe className='pointer-events-none absolute brightness-75' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/NlKSzc?gui=false&paused=false&muted=true" allowFullScreen>
      </iframe>

      <HSnapStack className='flex-100 h-full relative snap-start snap-always'>
       
        {StackItems.map(({id, Content, className, left, right}, index) => (
          <HSnapItem id={id} 
          className={'flex-100 h-full flex-col relative items-center pb-nav ' + className}
          onAppear={() => {
            const itemLeft = (index > 0)? StackItems[index - 1] : null
            setNavLeft(left || {
              text: itemLeft.title,
              target: itemLeft.id,
            })

            const itemRight = (index < StackItems.length - 1)? StackItems[index + 1] : null
            setNavRight(right || {
              text: itemRight.title,
              target: itemRight.id,
            })
          }}>
            <Content />
          </HSnapItem>
        ))}

      </HSnapStack>
    </div>
  )
}

var StackItems = [
  {
    id: 'portfolio-home',
    title: 'Portfolio',
    className: 'pb-0 justify-center',
    Content: () => (
      <PageTitle className='z-10 relative -rotate-3'>Portfolio</PageTitle>  
    ),
    left: {
      text: 'Magic',
      target: 'egg',
      icon: 'rep'
    },
  },
  {
    id: 'portfolio-rickyforhouse',
    title: 'Ricky for House',
    Content: () => (
      <>
        <Header className='text-white'>Ricky for House</Header>
        <PortfolioImage src={rickyforhouse} />
        <div className='flex-center'>
          <PortfolioButton>See The Story</PortfolioButton>
          <PortfolioLink href='https://ricky301.wixsite.com/rickyforhouse' ext>
            Check It Out
          </PortfolioLink>
        </div>
      </>
    ),
  },
  {
    id: 'portfolio-flitandland',
    title: 'Flit & Land',
    Content: () => (
      <>
        <Header className='text-white'>Flit & Land</Header>
        <PortfolioImage src={flitandland} />
        <div className='flex-center'>
          <PortfolioButton>See The Story</PortfolioButton>
          <PortfolioLink href='https://flitandland-beta.herokuapp.com' ext>
            Go There
          </PortfolioLink>
        </div>
      </>
    ),
  },
  {
    id: 'portfolio-dqitwh',
    title: 'Drag Queen in the White House',
    Content: () => (
      <>
        <Header className='text-white'>Drag Queen in the White House</Header>
        <PortfolioImage src={dqitwh} />
        <div className='flex-center'>
          <PortfolioButton>See The Story</PortfolioButton>
          <PortfolioLink href='https://dragqueeninthewhitehouse.com' ext>
            See It
          </PortfolioLink>
        </div>
      </>
    ),
    right: {
      text: 'Magic',
      target: 'egg',
      icon: 'rep'
    }
  },
]

var PortfolioImage = (p) => (
  <Image {...p}
    className={'w-full overflow-hidden max-w-7xl mx-auto rounded-2xl border-8 border-tpWhite glass ' + p.className}
  />
)

var PortfolioLink = (p) => (
  <Link {...p} className={'h-16 px-7 m-4 text-3xl flex-center pt-[3px] ' + p.className} />
)

var PortfolioButton = (p) => (
  <Button {...p} className={'h-16 px-7 m-4 text-3xl flex-center pt-[3px] ' + p.className} />
)