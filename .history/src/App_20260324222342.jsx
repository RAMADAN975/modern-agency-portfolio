import { useEffect, useRef, useState } from 'react'
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.x += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px,${mouse.current.y - 6}px,0 )`
        outlineRef.current.style.transform = `translate3d(${mouse.current.x - 20}px,${mouse.current.y - 20}px ,0)`
      }

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }

  }, [])

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
