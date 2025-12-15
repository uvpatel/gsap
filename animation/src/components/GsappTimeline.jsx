// GSAPTimeline

import gsap from "gsap";
import {useGSAP} from "@gsap/react"


function Gsap_timeline() {
    const timeline = gsap.timeline({
        repeat: -1, repeatDelay: 1, yoyo: true
    })
    useGSAP(() => {
        timeline.to('#yellow-box',{
            x: 250,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        })

        timeline.to('#yellow-box',{
            y: 250,
            scale: 2,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        })

        
        timeline.to('#yellow-box',{
            x: 500,
            scale: 1,
            rotation: 360,
            borderRadius: '8px',
            duration: 2,
            ease: 'back.inOut'
        })


    }, [])


    
  return (
    <main>
        <div className="mt-20 space-y-10">
            <button onClick={() => {
                if(timeline.paused()){
                    timeline.play()
                } else{
                    timeline.pause()
                }
            }}>Play/Pause</button>
        </div>
        <div className="mt-20">
            <div id="yellow-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
        </div>
    </main>
  )
}

export default Gsap_timeline