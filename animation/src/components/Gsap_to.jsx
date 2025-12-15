import gsap from "gsap";
import {useGSAP} from "@gsap/react"


function Gsap_to() {
    useGSAP(() => {
        gsap.to("#blue-box",{
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease:  "bounce.in"
        })
    }, [])
    
  return (
    <main>
        <div className="mt-20">
            <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
        </div>
    </main>
  )
}

export default Gsap_to