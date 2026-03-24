import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    // ✅ تهيئة الحركات عند التشغيل
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className='main-wrapper'>
      <Toaster position="top-center" reverseOrder={false} />
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

export default App;