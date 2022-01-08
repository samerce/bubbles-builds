import useNav from "../model/useNav"
import { PopupRoot, Subheader, Section, SectionTitle, SectionButton, Button } from "./Basics"
import React from "react"

const Highlighted = 'bg-accentLite border-sexy text-accent text-shadow-tpWhite'
const Dim = 'text-accentLite text-opacity-60'

export default p => {
  const {page} = useNav()
  
  return pug`
    PopupRoot
      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | The Nuts & Bolts of #{page.title}
      
      .w-full.grow.flex.flex-col.overflow-y-scroll
        Section
          SectionTitle.rotate-3 Languages
          each lang in Languages
            Item #{lang}

        Section
          SectionTitle.-rotate-6 Frameworks
          each framework in Frameworks
            Item #{framework}

        Section
          SectionTitle.rotate-2 Tools
          each tool in Tools
            Item #{tool}

        Section
          SectionTitle.-rotate-1 Platforms
          each platform in Platforms
            Item #{platform}

        Section
          SectionTitle.rotate-3 Experience
          each experience in Experience
            Item #{experience}

        Section.border-none
          SectionTitle.-rotate-2 Education
          Item B.S.E. Computer Science, University of Michigan

      Subheader.border-t.border-tpWhite.bg-accent.rounded-b-2xl.flex-center.p-4
        Button.h-54.flex-center.p-6(glass=false) See the code
  `
}

var Item = p => {
  const {page} = useNav()
  const classes = page.how?.includes(p.children) ? Highlighted : Dim

  return pug`
    span.flex-center.px-3.h-10.m-2.text-xl.font-body.rounded-2xl.leading-tight(
      ...p 
      className=${p.className + ' ' + classes}
    )
  `
}

var Languages = [
  'Javascript', 'HTML', 'CSS', 'Pug', 'CoffeeScript', 'Swift', 'Objective-C', 'Java', 'C/C++', 'Ruby', 'PHP',
]

var Frameworks = [
  'React', 'TailwindCSS', 'Styled Components', 'SASS', 'Redux', 'Node.js', 'Express', 'AngularJS', 'SwiftUI', 'Apple Core Data', 'Ruby on Rails', 'Square Payments',
]

var Tools = [
  'Git', 'VSCode', 'Xcode', 'Atom', 'Webpack',
]

var Platforms = [
  'AWS S3', 'AWS Lambda', 'iOS', 'Android', 'Next.js',
]

var Experience = [
  'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com',
]
