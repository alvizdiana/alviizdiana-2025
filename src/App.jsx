import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import SkillCarousel from './components/SkillCarousel.jsx'

const App = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <SkillCarousel/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
