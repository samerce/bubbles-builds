import { HSnapStack, HSnapItem } from './Stack'
import { PageTitle, Header, Box } from './Basics'
import useNav from '../model/useNav'

export default () => {
  const {setNavLeft, setNavRight} = useNav()

  return (
    <div className='snap-start snap-always h-full w-full relative'>
      <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0"   src="https://www.shadertoy.com/embed/XdyXD3?gui=false&t=10&paused=false&muted=true" allowFullScreen>
      </iframe>

      <HSnapStack className='h-full snap-start snap-always relative'>

      {StackItems.map(({id, Content, left, right}, index) => (
        <HSnapItem id={id} key={id}
        className='flex-100 h-full flex-col justify-center relative pb-nav'
        onAppear={() => {
          const itemLeft = (index > 0)? StackItems[index - 1] : null
          setNavLeft(left || {
            text: itemLeft.title,
            target: itemLeft.id,
          })

          const itemRight = (index < StackItems.length - 1)? StackItems[index + 1] : null
          setNavRight(right || {
            text: itemRight?.title,
            target: itemRight?.id,
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
    id: 'home',
    title: 'Home',
    Content: () => (
      <PageTitle className='rotate-6 leading-none'>Bubbles<br/>Builds</PageTitle>
    ),
    left: {
      text: 'Magic',
      target: 'egg',
      icon: 'rep'
    },
  },
  // {
  //   id: 'bubbles-bio',
  //   title: 'Bio',
  //   Content: () => (
  //     <>
  //       <HeaderBio>Who is Bubbles?</HeaderBio>

  //       <div className='grow mx-auto flex items-center'>
  //         <Box>
  //           Bubbles (they/them) is a former software engineer for corporate giants. After leaving the inhumane conditions of corporate life, they traveled the world and began developing new skills. Now, Bubbles produces music, writes, and is developing their skills in graphic design.
  //         </Box>
  //       </div>
  //     </>
  //   ),
  // },
  // {
  //   id: 'bubbles-goals',
  //   title: 'Goals & Philosophy',
  //   Content: () => (
  //     <>
  //       <HeaderBio>Goals & Philosophy</HeaderBio>

  //       <div className='grow mx-auto flex items-center'>
  //         <Box>
  //           aRt. Love. Community. Growth. Diversity.
  //         </Box>
  //       </div>
  //     </>
  //   ),
  //   right: {
  //     text: 'Magic',
  //     target: 'egg',
  //     icon: 'rep'
  //   },
  // }
]

var HeaderBio = (p) => (
  <Header {...p} className={'text-white mb-0 ' + p.className} />
)
