import { useRef, useState } from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import OutWork from './Components/OurWork'
import ContactUs from './Components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OutWork />
      <ContactUs />
      <Footer theme={theme} />

      {/* Cust cursor Ring */}
      <div ref={outlineRef} className=''></div>

      {/* Custom cursor Dot */}
      <div ref={dotRef} className=''>      </div>
    </div>
  )
}

export default App
