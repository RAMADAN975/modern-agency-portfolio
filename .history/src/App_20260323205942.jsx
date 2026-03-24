import React, { useState } from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
    </div>
  )
}

export default App
