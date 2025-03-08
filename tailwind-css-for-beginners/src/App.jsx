import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/analytics' 
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </>
  )
}
// breakpoint prefix sm 
export default App
