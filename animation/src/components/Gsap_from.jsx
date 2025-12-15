import gsap from "gsap";
import {useGSAP} from "@gsap/react"


function Gsap_from() {
    useGSAP(() => {
        gsap.from("#green-box",{
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
            <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
        </div>
    </main>
  )
}

export default Gsap_from