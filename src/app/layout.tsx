import React from "react"
import "@/app/globals.css"
import '@/assets/css/material.css'
import { Nunito, Work_Sans, EB_Garamond, Kaushan_Script, Alex_Brush } from 'next/font/google'
import HeaderComponent from "@/components/commons/HeaderComponent"
import FooterComponent from "@/components/commons/FooterComponent"
import { DataContextProvider } from "@/context/data-context/DataContext"


const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300','400','500','600', '700'],
  display: 'swap',
})
const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['300','400','500','600', '700'],
  display: 'swap',
})
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  weight: ['400'],
  display: 'swap',
})


const kaushan = Kaushan_Script({
  subsets: ['latin'],
  variable: '--font-kaushan',
  weight: ['400'],
  display: 'swap',
})


const alex = Alex_Brush({
  subsets: ['latin'],
  variable: '--font-alex',
  weight: ['400'],
  display: 'swap',
})


export const metadata = {
  title: {
    default: 'DSN | Microsite',
    template: '%s | DSN'
  },
  description: 'Microsite template for DSN microsites',
  keywords: 'Microsite, DSN, NextJS, ReactJS, TailwindCSS, Typescript, SEO, Microsite template, Microsite template for DSN',
  themeColor: 'white',
  icon:{
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'icon',
      url: '/favicon.ico'
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode  }) {
  return (
    <html lang="es" dir="LTR">
      <body className={`${nunito.variable} ${work_sans.variable} ${eb_garamond.variable} ${kaushan.variable} ${alex.variable} font-nunito text-base text-black dark:text-white dark:bg-slate-900`}>
      <DataContextProvider>
        <HeaderComponent />
          {children}
        <FooterComponent />
      </DataContextProvider>
      </body>
    </html>
  )
}
