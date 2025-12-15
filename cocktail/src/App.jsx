import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';


gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      
    </main>
  )
}

export default App