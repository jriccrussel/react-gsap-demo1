import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'

import { ReactComponent as RightArrow } from '../assets/img/arrow-right.svg'

const Banner = () => {
    const overlayTop = useRef(null)
    const overlayBottom = useRef(null)

    useEffect(() => {

        // Not recommended this method because it only animate individually 
        // Please refer the animation to "App.js"
        // Animtion should start FROM ".line span"(the title) => ".overlay-top"(overlay top) => ".overlay-bottom"(overlay bottom) => ".intro-overlay"(overlay container) => ".case-image img"(the image)
        // const tl = gsap.timeline()

        // tl.from(".line span", 0.8, {
        //     y: 100,
        //     ease: "power4.out",
        //     delay: 1,
        //     skewY: 7,
        //     stagger: {
        //         amount: 0.3
        //     }
        // })

    }, [])

    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating unique brand is</span>
                        </div>
                        <div className="line">
                            <span>what we do.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">
                            More about us <RightArrow />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
