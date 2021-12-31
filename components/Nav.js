import Icon from 'supercons'
import { Button } from "./Basics"

export default (p) => (
  <div {...p} className={'fixed flex bottom-0 left-0 px-4 py-4 justify-between items-center w-full z-20 ' + p.className}>
    <div className='flex-1'>
      <Button className='h-54 pl-3 pr-6' onClick={() => { scrollStack('left') }}>
        <Icon glyph='back' size='42' className='inline text-black' style={{marginTop: -2}} />
        Home
      </Button>
    </div>

    <div className='flex-1 flex justify-center'>
      <Button className='px-3 h-54 justify-self-center flex items-center justify-center' onClick={() => {
        // document.getElementById('root-stack').scroll({top: window.innerHeight, behavior: 'smooth'})
      }}>
        <Icon glyph='menu' size='36' />
      </Button>
    </div>

    <div className='flex-1 flex justify-end'>
      <Button className='h-54 pr-3 pl-6' onClick={() => { scrollStack('right') }}>
        Who is Bubbles?
        <Icon glyph='enter' size='42' className='inline text-black' style={{marginTop: -2}} />
      </Button>
    </div>
  </div>
)

var Directions = {
  left: -1,
  right: 1,
}
var scrollStack = (direction) => {
  document.getElementById('bio-hstack').scroll({
    left: Directions[direction] * window.innerWidth, 
    behavior: 'smooth'
  })
}