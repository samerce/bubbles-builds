import { Box, Header } from "./Basics"

export default () => {
  return (
    <div className='absolute flex flex-col items-center w-full h-full pb-nav'>
      <Header>Why was Bubbles Builds created?</Header>
      <div className='grow flex-center'>
        <Box>
          This website was built to showcase my portfolio, skills, experience, education, and interests—a resumé of sorts.
          <br/><br/>
          After leaving the corporate tech world in 2016, I traveled the world and began developing new skills. Now, I produce music, write, dabble in graphic design, and build websites and apps that help people embrace art, healing, and self-awareness.
        </Box>
      </div>
    </div>
  )
}