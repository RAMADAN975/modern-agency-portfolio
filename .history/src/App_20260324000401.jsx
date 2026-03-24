import { useState } from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import OutWork from './Components/OutWork'
import ContactUs from './Components/ContactUs'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OutWork />
      <ContactUs />
    </div>
  )
}

export default App
