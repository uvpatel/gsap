import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)


function Gsap_scrolltrigger() {
    const scrollRef = useRef()

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children)

        boxes.forEach((box) => {
            gsap.to(box,{
                x: 150 *(boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: "100%",
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom, bottom',
                    end: 'top 10%',
                    scrub: true,
                },
                ease: 'power1.inOut'
            }, {scope: scrollRef})
        })
    }, [])
    return (
        <main>
            <div className="mt-20 w-full  h-screen" ref={scrollRef}>
                <div id="scroll-pink" className="scroll-box w-20 h-20 rounded-lg bg-pink-500" />
                <div id="scroll-pink" className="scroll-box w-20 h-20 rounded-lg bg-orange-500" />
            </div>
        </main>
    )
}

export default Gsap_scrolltrigger