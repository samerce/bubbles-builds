import useNav from "../model/useNav"
import { Box, Subheader, Section, SectionTitle, SectionButton } from "./Basics"
import React from "react"

const Highlighted = 'glass border-sexy text-accent text-shadow-tpWhite'
const Dim = 'text-accentLite text-opacity-60'

export default p => {
  const {nav} = useNav()
  const Item = p => {
    const classes = nav.how?.includes(p.children) ? Highlighted : Dim
    return pug`
      span.flex-center.px-3.h-10.m-2.text-xl.font-body.rounded-2xl.leading-tight(
        ...p 
        className = ${p.className + ' ' + classes}
      )
    `
  }
  
  return pug`
    Box.h-full.flex.flex-col.overflow-hidden(class='max-w-[777px]')
      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | The Nuts & Bolts of #{nav.pageTitle}
      
      .w-full.grow.flex.flex-col.overflow-y-scroll
        Section
          SectionTitle.rotate-3 Languages
          Item Javascript
          Item HTML
          Item CSS
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
          Item SASS
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
          Item Next.js

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
  `
}
