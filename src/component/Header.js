import React, {useEffect, useRef, useState} from 'react'
import gsap from 'gsap'
import { NavLink, withRouter } from 'react-router-dom'
import { ReactComponent as UpArrow } from '../assets/img/up-arrow-circle.svg'
import {useGlobalContext} from '../context'

let tl = gsap.timeline()

// const Header = ({dimensions}) => {
const Header = ({history}) => {

    const [menuState, setMenuState] = useState({ menuOpened: false });

    const {openMenu, closeMenu} = useGlobalContext()
    
    useEffect(() => {
        //Listening for page changes.
        history.listen(() => {
            setMenuState({ menuOpened: false })
        })       

        if (menuState.menuOpened === true) {

            // Run open menu animation
            // gsap.to("nav", 0, { css: { display: "block" } })
            // gsap.to("body", 0, { css: { overflow: "hidden" } })

            // tl.to(".App", 1, {
            //     // y: width <= 654 ? "70vh" : window.innerHeight / 2,
            //     // y: window.innerWidth <= 654 ? "70vh" : window.innerHeight / 2,
            //     // y: "70vh",
            //     y: "62vh",
            //     ease: "expo.inOut"
            // })
            // .to(".hamburger-menu span", 0.6, {
            //     delay: -1,
            //     scaleX: 0,
            //     transformOrigin: "50% 0%",
            //     ease: "expo.inOut"
            // })
            // .to("#Path_1", 0.4, {
            //     delay: -0.6,
            //     css: {
            //         strokeDashoffset: 10,
            //         strokeDasharray: 5
            //     }
            // })
            // .to("#Path_2", 0.4, {
            //     delay: -0.6,
            //     css: {
            //         strokeDashoffset: 10,
            //         strokeDasharray: 20
            //     }
            // })
            // .to("#Line_1", 0.4, {
            //     delay: -0.6,
            //     css: {
            //         strokeDashoffset: 40,
            //         strokeDasharray: 18
            //     }
            // })
            // .to("#circle", 0.6, {
            //     delay: -0.8,
            //     css: {
            //         strokeDashoffset: 0
            //     },
            //     ease: "expo.inOut"
            // })
            // .to(".hamburger-menu-close", 0.6, {
            //     delay: -0.8,
            //     css: { display: "block" }
            // })
            openMenu()
        } else {
            // Run close menu animation
            // tl.to(".App", 1, {
            //     y: 0,
            //     ease: "expo.inOut"
            // })
            // .to("#circle", 0.6, {
            //     delay: -0.6,
            //     css: {
            //         strokeDashoffset: -193,
            //         strokeDasharray: 227
            //     }
            // })
            // .to("#Path_1", 0.4, {
            //     delay: -0.6,
            //     css: {
            //         strokeDashoffset: 10,
            //         strokeDasharray: 10
            //     }
            // })
            // .to("#Path_2", 0.4, {
            //     delay: -0.6,
            //     css: {
            //         strokeDashoffset: 10,
            //         strokeDasharray: 10
            //     }
            // })
            // .to("#Line_1", 0.4, {
            //     delay: -0.6,
            //     css: {
            //         strokeDashoffset: 40,
            //         strokeDasharray: 40
            //     }
            // })
            // .to(".hamburger-menu span", 0.6, {
            //     delay: -0.6,
            //     scaleX: 1,
            //     transformOrigin: "50% 0%",
            //     ease: "expo.inOut"
            // })
            // .to(".hamburger-menu-close", 0, {
            //     delay: -0.1,
            //     css: { display: "none" }
            // })
            // .to("body", 0, { css: { overflow: "auto" } })
            // .to("nav", 0, {
            //     css: { display: "none" }
            // })
            closeMenu()
        }
    }, [menuState.menuOpened])

    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <NavLink to="/">AGENCY</NavLink>
                    </div>
                    {/* <div className="nav">
                        <span></span>
                        <span></span>
                    </div> */}
                    <div className="nav-toggle">
                        <div
                            onClick={() => setMenuState({ menuOpened: true })}
                            className="hamburger-menu"
                        >
                            <span></span>
                            <span></span>
                        </div>
                        <div
                            onClick={() => setMenuState({ menuOpened: false })}
                            className="hamburger-menu-close"
                        >
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)
