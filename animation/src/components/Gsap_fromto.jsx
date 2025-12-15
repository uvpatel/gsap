import gsap from "gsap";
import {useGSAP} from "@gsap/react"


function Gsap_fromto() {
    useGSAP(() => {
        gsap.fromTo("#red-box",
        {
            x: 0,
            rotation: 0,
            borderRadius: "0%"
        },
        {
            x: 250,
            repeat: -1,
            yoyo: true,
            borderRadius: "100%",
            rotation: 360,
            duration: 2,
            ease:  "bounce.in"
        })
    }, [])
    
  return (
    <main>
        <div className="mt-20">
            <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
        </div>
    </main>
  )
}

export default Gsap_fromto