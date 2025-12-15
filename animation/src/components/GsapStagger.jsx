// GSAPTimeline

import gsap from "gsap";
import { useGSAP } from "@gsap/react"


function Gsap_Stagger() {
    useGSAP(() => {
        gsap.to('.stagger-box',{
            y: 250,
            rotation: 360,
            borderRadius: "100%",
            repeat:-1,
            yoyo: true,
            // stagger: 0.5
            stagger: {
                amount: 1.5,
                grid: [2,1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center'
            }
        })
    },[])



    return (
        <main>
            <div className="mt-20">
                <div className="flex gap-5">
                    <div className="stagger-box w-20 h-20 bg-blue-500 rounded-lg" />
                    <div className="stagger-box w-20 h-20 bg-indigo-600 rounded-lg" />
                    <div className="stagger-box w-20 h-20 bg-blue-300 rounded-lg" />
                    <div className="stagger-box w-20 h-20 bg-blue-400 rounded-lg" />
                    <div className="stagger-box w-20 h-20 bg-blue-800 rounded-lg" />
                    <div className="stagger-box w-20 h-20 bg-blue-700 rounded-lg" />
                </div>
            </div>
        </main>
    )
}

export default Gsap_Stagger