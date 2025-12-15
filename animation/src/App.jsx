import React from 'react'
import Gsap_to from './components/Gsap_to'
import Gsap_from from './components/Gsap_from'
import Gsap_fromto from './components/Gsap_fromto'
import Gsap_timeline from './components/GsappTimeline'
import Gsap_Stagger from './components/GsapStagger'
import Gsap_scrolltrigger from './components/Gsap_scrolltrigger'
import Gsap_Text from './components/Gsap_Text'

function App() {
  return (
    <>
    <Gsap_to />
    <Gsap_from />
    <Gsap_fromto />
    <Gsap_timeline />
    <Gsap_Stagger />
    <Gsap_scrolltrigger />
    <Gsap_Text />
    </>
  )
}

export default App