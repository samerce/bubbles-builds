import { HSnapStack, HSnapItem } from './Stack'
import { PageTitle, Image, Link, Button, Header, Body } from './Basics'
import useNav from '../model/useNav'

import eyy from '../public/images/eyy-site.jpg'
import flitandland from '../public/images/flitandland.jpg'
import rickyforhouse from '../public/images/rickyforhouse.jpg'
import dqitwh from '../public/images/dqitwh.jpg'
import eymCircle from '../public/images/eym-circle.png'

export default () => {
  const {setNavLeft, setNavRight} = useNav()

  return (
    <div className='snap-start snap-always h-full w-full relative'>
      <iframe className='pointer-events-none absolute brightness-90' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/NlKSzc?gui=false&paused=false&muted=true" allowFullScreen>
      </iframe>

      <HSnapStack className='flex-100 h-full relative snap-start snap-always'>
       
        {StackItems.map(({id, Content, className, left, right}, index) => (
          <HSnapItem id={id} key={id}
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

            window.location = '#' + id
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
    id: 'portfolio-expressyouryes',
    title: 'express your yes',
    Content: () => (
      <>
        <Header className='text-white'>express your yes</Header>
        <Body className='mb-4'>
          Since 2015, my partner and I have been refining our philosophical ideas into the mold of a non-profit organization. Our name, messaging, and style have changed many times over the years, and below is a selection of some of my favorite incarnations.
        </Body>

        <div className='flex-center'>
          <PortfolioImage src={eyy} className='w-[320px]' />

          <div className='flex-[20px]' />

          <div className='flex-center flex-col'>
            <Body className='mb-4'>
              Our latest manifestation is a full technicolor wonderland creative studio in Ann Arbor, Michigan called NOW Studios.
            </Body>
            <PortfolioLink href='https://www.expressyouryes.com' newTab>
              Check It Out
            </PortfolioLink>
          </div>
        </div>
        
        <div className='flex-center'>
          <PortfolioImage src={eymCircle} className='w-[205px]' frameClass='rounded-full p-[6px]' />
        </div>
      </>
    ),
  },
  {
    id: 'portfolio-rickyforhouse',
    title: 'Ricky for House',
    Content: () => (
      <>
        <Header className='text-white'>Ricky for House</Header>
        <Body className='mb-4'>
          My partner Ricky ran a last-minute campaign for U.S. House in Michigan's district 12 in 2020. This site was whipped up in a week's time to get the message out!
        </Body>

        <PortfolioImage src={rickyforhouse} className='w-[640px]' />

        <div className='flex-center flex-wrap'>
          <PortfolioLink href='https://ricky301.wixsite.com/rickyforhouse' newTab>
            Go There
          </PortfolioLink>
        </div>
      </>
    ),
  },
  {
    id: 'portfolio-dqitwh',
    title: 'DQITWH',
    Content: () => (
      <>
        <Header className='text-white'>Drag Queen in the White House</Header>
        <PortfolioImage src={dqitwh} className='w-[640px]' />
        <div className='flex-center'>
          <PortfolioLink href='https://dragqueeninthewhitehouse.com' newTab>
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
  <div className={'p-2 rounded-2xl border-sexy glass ' + p.frameClass}> 
    <Image {...p} imgClass={'rounded-lg ' + p.imgClass}
      className={'overflow-hidden max-h-full ' + p.className}
    />
  </div>
)

var PortfolioLink = (p) => (
  <Link {...p} className={'h-16 px-7 m-4 text-3xl flex-center pt-[3px] ' + p.className} />
)

var PortfolioButton = (p) => (
  <Button {...p} className={'h-16 px-7 m-4 text-3xl flex-center pt-[3px] ' + p.className} />
)