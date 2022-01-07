import useNav from "../model/useNav"
import { Box, Subheader, Button, Icon } from "./Basics"
import React from "react"

const highlighted = [
  'Javscript',
  'React',
  'Git',
  'CSS',
  'Pug',
  'TailwindCSS',
  'Webpack',
]

export default function How(p) { return pug`
  - const {nav} = useNav()
  Box.h-full.flex.flex-col.overflow-hidden(class='max-w-[777px]')
    Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
      | The Nuts & Bolts of #{nav.pageTitle}
    
    .w-full.grow.flex.flex-col.overflow-y-scroll
      Section
        SectionTitle.rotate-3 Languages
        Item Javascript
        Item HTML
        Item CSS / SASS
        Item Pug
        Item Coffeescript
        Item Swift
        Item Objective-C
        Item Java
        Item C/C++
        Item Ruby
        Item PHP

      Section
        SectionTitle.-rotate-6 Frameworks
        Item React
        Item TailwindCSS
        Item Redux
        Item Node.js
        Item Express
        Item AngularJS
        Item SwiftUI
        Item Apple Core Data
        Item Ruby on Rails

      Section
        SectionTitle.rotate-2 Tools
        Item Git
        Item VSCode
        Item Xcode
        Item Atom
        Item Webpack

      Section
        SectionTitle.-rotate-1 Platforms
        Item AWS S3
        Item AWS Lambda
        Item iOS
        Item Android

      Section
        SectionTitle.rotate-3 Experience
        Item Express Your Yes Foundation
        Item Iodine (now part of GoodRx)
        Item Clover Labs
        Item Third & Loom
        Item Amazon.com

      Section.border-none
        SectionTitle.-rotate-2 Education
        Item B.S.E. Computer Science, University of Michigan
`}

const highlightedStyle = 'glass border-sexy text-accent text-shadow-tpWhite'
var Item = p => (
  <span {...p} className={`flex-center px-3 h-10 m-2 text-xl font-body rounded-2xl leading-tight ${
    highlighted.includes(p.children) ? highlightedStyle : 'text-accentLite text-opacity-60'
  } ` + p.className} />
)
var Line = p => <hr className={'opacity-20 border-accentLite basis-full ' + p.className} />
var Section = p => (
  <div {...p} className={'flex-center flex-wrap px-3 py-6 w-full border-b border-b-tpWhite ' + p.className} />
)
var SectionButton = (p) => pug`
  .flex-center
    Button.h-9.text-xl.rounded-xl.flex-center.px-3.bg-transparent.border-none.text-accentLite(
      style={textShadow: 'none'}
    )
      Icon.inline.text-accentLite(name='down-caret' size='27')
`
var SectionTitle = (p) => (
  <div className='basis-full flex justify-between items-center ml-4'>
    <h3 {...p} className={`font-button text-2xl text-center text-shadow-6 drop-shadow-2xl uppercase text-white leading-tight pointer-events-none ` + p.className} />
    <SectionButton />    
  </div>
)