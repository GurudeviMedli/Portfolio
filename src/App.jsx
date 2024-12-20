import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navebar from './components/Navebar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navebar/>
        <div className='container'>
          <Home/>
          <Experience/>
          <Skills/>
          <Projects/>
          <Contact/>
        </div>
    </>
  )
}

export default App
