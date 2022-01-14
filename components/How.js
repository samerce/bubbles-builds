import useNav from "../model/useNav"
import { PopupRoot, Subheader, Section, SectionTitle, SectionButton, Button, Link } from "./Basics"
import React, { useLayoutEffect, useState } from "react"
import useResizeAware from 'react-resize-aware'
import useScreenSize from "../hooks/useScreenSize"

const Highlighted = ' bg-accentLite border-sexy text-accent text-shadow-tpWhite '
const Dim = ' text-accentLite text-opacity-60 '

export default function How(p) {
  const {page} = useNav()
  const [expanded, setExpanded] = useState({})

  function toggle(id) {
    setExpanded({
      [id]: !expanded[id],
    })
  }
  
  return pug`
    PopupRoot(...p)
      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | The Nuts & Bolts of #{page.title}
      
      div.w-full.grow.flex.flex-col.overflow-y-scroll.bg-accentDark(class='max-w-[777px]')

        p.py-7.px-8.text-center
          | Highlighted below are the technologies and experience used to create ${page.title}.

        Section
          SectionHeader.rotate-3(
            onClick=() => toggle('languages')
            expanded=expanded.languages
          ) Languages
          each lang in Languages
            Item(...lang expanded=expanded.languages)

        Section
          SectionHeader.-rotate-2(
            onClick=() => toggle('frameworks')
            expanded=expanded.frameworks
          ) Frameworks
          each framework in Frameworks
            Item(...framework expanded=expanded.frameworks)

        Section
          SectionHeader.rotate-2(
            onClick=() => toggle('tools')
            expanded=expanded.tools
          ) Tools
          each tool in Tools
            Item(...tool expanded=expanded.tools)

        Section
          SectionHeader.-rotate-1(
            onClick=() => toggle('platforms')
            expanded=expanded.platforms
          ) Platforms
          each platform in Platforms
            Item(...platform expanded=expanded.platforms)

        Section
          SectionHeader.rotate-3(
            onClick=() => toggle('jobs')
            expanded=expanded.jobs
          ) Jobs
          each job in Jobs
            Item(...job expanded=expanded.jobs)

        Section.border-none
          SectionHeader.-rotate-2(noButton expanded=true) Education
          Item(name='B.S.E. Computer Science, University of Michigan')

      Subheader.bg-accent.border-t.border-tpWhite.rounded-b-2xl.p-0
        Link.h-54.w-full.font-button.flex-center.pt-1(
          href='https://github.com/samerce/bubbles-builds' newTab
        ) See the code
  `
}

var SectionHeader = p => pug`
  Button.w-full.justify-between.items-center.px-3.py-2.glass.rounded-4xl.bg-accent.mb-2(
    onClick=p.onClick
  )
    SectionTitle.bg-white.px-2.py-1.rounded-xl(className=p.className) #{p.children}
    SectionButton.bg-white(
      style={display: p.noButton? 'none' : 'inherit'}
      expanded=p.expanded
    )
`

var Name = p => {
  const {page} = useNav()
  const classes = p.className + (page.how?.includes(p.children) ? Highlighted : Dim)

  return pug`
    div.inline-block.px-3.py-2.m-2.text-xl.font-body.rounded-2xl.leading-tight(className=classes)
      | #{p.children}
  `
}

var ExperienceBar = p => {
  return (
    <div className='grow h-[18px] px-4 overflow-hidden relative'>
      <div className='h-full rounded-3xl bg-gradient-to-r from-accentDark to-accent' style={{
        width: `${p.experience}%`,
      }} />
    </div>
  )
}

var Item = p => {
  const [expanded, setExpanded] = useState(false)
  const {screenWidth} = useScreenSize()

  useLayoutEffect(() => {
    if (!p.expanded) setExpanded(false)
  }, [p.expanded])

  if (p.expanded) return pug`
    div.flex-center.flex-col.text-xl.font-body.rounded-2xl.leading-tight.w-full.px-1.relative
      
      div.flex-center.w-full.overflow-hidden.relative
        div(class='w-[150px]')
          Name #{p.name}
        ExperienceBar(...p)
        div.pl-3.pr-4(
          style={display: screenWidth < [600]? 'none' : 'inherit'}
        ) #{p.time}
        SectionButton.overflow-hidden.mr-2(
          onClick=() => setExpanded(!expanded)
          expanded=expanded
        )

      p.p-7(style={
        display: expanded? 'block' : 'none',
      }) #{p.description}
  ` 
  else return pug`
    Name.flex-center #{p.name}
  `
}

var Languages = [
  {
    name: 'Javascript',
    experience: 100,
    color: '#f7df1e',
    time: '12 years',
    description: `
      I have been developing with Javascript for well over a decade and have reached 10,000-hour expert status.
    `,
  },
  {
    name: 'HTML / JSX / Pug',
    experience: 100,
    color: '#e34f26',
    time: '12 years',
    description: `
      I have been subjected to HTML for just as long as its sister, Javascript. Inevitably, as an avid React user, I am very familiar with JSX. Recently, I discovered Pug and used it throughout this website instead of JSX because I find its syntax easier to read than XML-based languages.
    `,
  },
  {
    name: 'CSS',
    experience: 100,
    color: '#3d5a80',
    time: '12 years',
    description: `
      CSS and I have been working together, obviously, for over a decade. The web triplets are never separated!
    `,
  },
  {
    name: 'Coffeescript',
    experience: 90,
    color: '#244776',
    time: '8 years',
    description: `
      I've used CoffeeScript on many personal projects but never in a professional setting—its syntax is quite controversial.
    `,
  },
  {
    name: 'Objective-C',
    experience: 80,
    color: '#8a8a8a',
    time: '2 years',
    description: `
      At Amazon.com, I worked on the Amazon app for iPhone in Objective-C for just under 2 years. I've also built several prototypes in the language.
    `,
  },
  {
    name: 'Java',
    experience: 50,
    color: '#b07219',
    time: '1 year',
    description: `
      At Amazon.com, I worked on the Store Picker for Kindle Fire, built in Android OS. I also built an Android game, Blackjack Genius, which was a top 20 game in the Play Store for over a year.
    `,
  },
  {
    name: 'Swift',
    experience: 40,
    color: '#ffac45',
    time: '6 months',
    description: `
      In early 2021, I built Psymail, a prototype email app in Swift.
    `,
  },
  {
    name: 'Ruby',
    experience: 20,
    color: '#701516',
    time: '1 year',
    description: `
      In 2014, I spent a year building an advanced dress-builder web-app using Ruby on Rails.
    `,
    },
  {
    name: 'PHP',
    experience: 20,
    color: '#4F5D95',
    time: '2 years',
    description: `
      At Amazon.com, and afterward in freelance work, I used PHP for a variety of projects.
    `,
  },
  {
    name: 'C/C++',
    experience: 10,
    color: '#6e6e6e',
    time: '3 years',
    description: `
      I used these low-level languages in college and have avoided them at all costs since. While I understand the concepts deeply and appreciate that knowledge, I am very grateful to work with more human-readable langauges like Javascript, CoffeeScript, and Swift.
    `,
  },
]

var Frameworks = [
  {
    name: 'React',
    experience: 100,
    color: '#61dafb',
    time: '12 years',
    description: `
      React is my favorite framework. I started to like coding for the web once I started using it, and I probably wouldn't be a web-dev today without it. Its easy-to-debug, highly readable functional approach has now spread to most popular platforms, including Swift, via SwiftUI. Though it is created by a company I loathe, Facebook, its clarity of focus is undeniable and its evolution continues to impress me. For example, hooks have made code way more reliable and easy to understand.
      `,
  },
  {
    name: 'TailwindCSS',
    experience: 90,
    color: '#3a6186',
    time: '1 month',
    description: `
      Although I only just started using TailwindCSS, it has already helped me build this website much faster than with other CSS frameworks. I write almost zero CSS, which is probably my favorite thing ever because CSS sucks. It's very easy to learn and, like the website says, seems like a terrible idea at first, but they were right, it's incredible.
      `,
  },
  {
    name: 'Styled Components',
    experience: 90,
    color: '#e34f26',
    time: '5 years',
    description: `
      Before TailwindCSS, I used Styled Components for all my web projects. It is the best way to use all the power of Javascript to write CSS. It has a bit of a learning curve and I haven't used it in over a year, so I might be a little rusty, but I wouldn't mind picking it up again. Though, I would recommend TailwindCSS for to anyone.
    `,
  },
  {
    name: 'Redux',
    experience: 90,
    color: '#701516',
    time: '4 years',
    description: `
      Redux makes sharing data between components very reliable. Its boilerplate is not my favorite. Using it requires builder functions to make scaling reasonable. It's got a spidery structure which can make it hard to keep in your head. With a few wrapping functions, though, it can be quite a pleasure to use and makes finding bugs much easier.
    `,
  },
  {
    name: 'Next.js',
    experience: 80,
    color: '#e34f26',
    time: '1 month',
    description: `
      I've only just started using Next.js—on this website—but I can tell that it will be my framework of choice. It does a fantastic job of eliminating all of the boilerplate and offering sensible systems that make building a website from scratch super fast, easy to optimize, and effortless to publish.
    `,
  },
  {
    name: 'SwiftUI',
    experience: 80,
    color: '#8a8a8a',
    time: '6 months',
    description: `
      I started exploring SwiftUI at the beginning of 2021 and loved it. I wrote a prototype email app entirely in SwiftUI and it allowed me to create very readable, easy-to-debug code. It's so powerful, it feels as though the framework is doing most of the work for me.
    `,
  },
  {
    name: 'React Native',
    experience: 50,
    color: '#244776',
    time: '1 year',
    description: `
      I used React Native at the last tech company I worked for, Iodine, a health-tech startup that primarily offered a mobile app to track your mood while taking anti-depressants. Using React's functional structure on mobile platforms that hadn't embraced it yet was a dream. Thought it was sometimes difficult to make components that looked and acted like native ones, writing, testing, and deploying the apps far outweighed those occasional problems.
    `,
  },
  {
    name: 'SASS',
    experience: 50,
    color: '#b07219',
    time: '5 years',
    description: `
      Before Styled Components blew mind, SASS was my go-to CSS framework. Obvious and super powerful additions like nesting and mixins were the main draws. I haven't used it in a while, but wouldn't mind using it again.
    `,
  },
  {
    name: 'Node.js',
    experience: 50,
    color: '#8a8a8a',
    time: '12 years',
    description: `
      Even though I've been using Node.js for over a decade, I have never written large systems on the server side. I am much happier as a front-end developer. That said, I have no trouble building server APIs.
    `,
  },
  {
    name: 'Apple Core Data',
    experience: 40,
    color: '#701516',
    time: '6 months',
    description: `
      I introduced myself to Core Data While building a prototype email app for iOS. It is somewhat complicated but extremely powerful. Though it took a minute to learn, it made data management a breeze once I got comfortable with it.
    `,
  },
  {
    name: 'Express',
    experience: 40,
    color: '#3d5a80',
    time: '12 years',
    description: `
      Express and Node.js go hand-in-hand. Again, I haven't used the full depth of Express, but am familiar with it at a basic level. I have used middleware and built simple APIs with it.
    `,
  },
  {
    name: 'AngularJS',
    experience: 20,
    color: '#e34f26',
    time: '2 years',
    description: `
      Before I fell in love with React, I used AngularJS. It was my first experience with front-end frameworks and it was a dream. I haven't used it in a very long time and haven't followed its progress. Is it still cool?
    `,
  },
  {
    name: 'Ruby on Rails',
    experience: 20,
    color: '#701516',
    time: '1 year',
    description: `
      I used Ruby on Rails to build a custom bridal gown-builder web-app. It's been many years since then, and I am not very familiar with it anymore, but I remember liking it!
    `,
  },
  {
    name: 'Square Payments',
    experience: 10,
    color: '#3a6186',
    time: '3 months',
    description: `
      I used Square Payments for the checkout flow on dragqueeninthewhitehouse.com.
    `,
  },
]

var Tools = [
  {
    name: 'Git',
    experience: 100,
    time: '12 years',
    description: `
      I love git.
    `,
  },
  {
    name: 'Atom',
    experience: 100,
    time: '12 years',
    description: `
      I love Atom.
    `,
  },
  {
    name: 'Xcode',
    experience: 100,
    time: '12 years',
    description: `
      I love Xcode.
    `,
  },
  {
    name: 'Webpack',
    experience: 100,
    time: '12 years',
    description: `
      I love Webpack.
    `,
  },
  {
    name: 'VSCode',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
]

var Platforms = [
  {
    name: 'AWS S3',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
  {
    name: 'AWS Lambda',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
  {
    name: 'iOS',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
  {
    name: 'Android',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
  {
    name: 'Next.js',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
]

var Jobs = [
  {
    name: 'Express Your Yes Foundation',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
  {
    name: 'Iodine',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
  {
    name: 'Clover Labs',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
  {
    name: 'Third & Loom',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
  {
    name: 'Amazon.com',
    experience: 100,
    time: '12 years',
    description: `
      I love VSCode.
    `,
  },
]
