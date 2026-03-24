import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import ContactUs from './Components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className='dark:bg-black relative transition-colors duration-300'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  )
}

export default App