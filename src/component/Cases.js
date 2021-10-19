import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ReactComponent as CasesNext } from '../assets/img/arrow-left.svg'
import { ReactComponent as CasesPrev } from '../assets/img/arrow-right.svg'
import img1 from '../assets/img/curology-min.png'
import img2 from '../assets/img/yourspace-min.png'
import img3 from '../assets/img/lumin-min.png'

const data = [
    {
        id:1,
        subtitle: "Curology",
        title: "A custom formula for your skin’s unique needs",
        img: img1,
    },
    {
        id: 2,
        subtitle: "Yourspace",
        title: "Open space floor plans for you next venture",
        img: img2,
    },
    {
        id: 3,
        subtitle: "Lumin",
        title: "For your best look ever",
        img: img3,
    }
]

const Cases = () => {

    useEffect(() => {

        // Not recommended this method because it only animate individually 
        // Please refer the animation to "App.js"
        // Animtion should start FROM ".line span"(the title) => ".overlay-top"(overlay top) => ".overlay-bottom"(overlay bottom) => ".intro-overlay"(overlay container) => ".case-image img"(the image)
        // const tl = gsap.timeline()

        // tl.from(".case-image img", 1.6, {
        //     scale: 1.4,
        //     ease: "expo.inOut",
        //     delay: -2,
        //     stagger: {
        //         amount: 0.4
        //     }
        // })

    }, [])

    return (
        <div className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <CasesNext />
                    </div>
                    <div className="cases-arrow next">
                        <CasesPrev />
                    </div>
                </div>
                <div className="row">
                    {data.map((item) => {
                        const {id, subtitle, title, img} = item

                        return (
                            <div className="case" key={id}>
                                <div className="case-details">
                                    <span>{subtitle}</span>
                                    <h2>{title}</h2>
                                </div>
                                <div className="case-image">
                                    <img src={img} alt={title} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cases
