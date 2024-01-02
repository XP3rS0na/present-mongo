import type { Metadata } from 'next'
import Head from 'next/head'
import Header  from './header/page'
import Section from './section/page'
import Contact from './contact/page'
import Projet from './projet/page'
import { Manrope } from 'next/font/google'
import { Call, Insert } from './api/email/route'
 
const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Présentation',
  description: 'Page d\'accueil de la présentation ce Quentin Balloy',
}



 
export default function Home() {
  //makeRequest();
Call();

  return (
    <main className={manrope.className}>
      <Head>
        <title>Présentation</title>
  
      </Head>
      <Header />
      <Section />
      <Projet />
      <Contact />
    </main>
    
  )
}



