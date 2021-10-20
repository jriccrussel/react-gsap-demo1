import React,{useEffect, useRef} from 'react'
import gsap from 'gsap'

const IntroOverlay = () => {

    useEffect(() => {
        
        // Not recommended this method because it only animate individually 
        // Please refer the animation to "App.js"
        // Animtion should start FROM ".line span"(the title) => ".overlay-top"(overlay top) => ".overlay-bottom"(overlay bottom) => ".intro-overlay"(overlay container) => ".case-image img"(the image)
        // const tl = gsap.timeline()

        // tl.to(".overlay-top", 1.6, {
        //     height: 0,
        //     ease: "expo.inOut",
        //     stagger: 0.4
        // })
        // .to(".overlay-bottom", 1.6, {
        //     width: 0,
        //     ease: "expo.inOut",
        //     delay: -0.8,
        //     stagger: {
        //         amount: 0.4
        //     }
        // })
        // .to(".intro-overlay", 0, { css: { display: "none" } })

    }, [])

    return (
        <>
            <div className='intro-overlay'>
                <div className='top'>
                    <div className='overlay-top'></div>
                    <div className='overlay-top'></div>
                    <div className='overlay-top'></div>
                </div>
                <div className='bottom'>
                    <div className='overlay-bottom'></div>
                    <div className='overlay-bottom'></div>
                    <div className='overlay-bottom'></div>
                </div>
            </div>
        </>
    )
}

export default IntroOverlay
