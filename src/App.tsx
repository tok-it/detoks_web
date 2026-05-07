import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import WhyNeed from './components/WhyNeed'
import HowItWorks from './components/HowItWorks'
import QuickStart from './components/QuickStart'
import UsageExample from './components/UsageExample'
import TargetUsers from './components/TargetUsers'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <WhyNeed />
        <HowItWorks />
        <QuickStart />
        <UsageExample />
        <TargetUsers />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
