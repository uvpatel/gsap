import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'


gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
  return (
    <div className='flex-center h-screen'>
      <h1 className='text-3xl '></h1>
    </div>
  )
}

export default App