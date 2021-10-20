import React, { useState, useContext } from 'react'
import gsap from 'gsap'
const AppContext = React.createContext()

let tl = gsap.timeline()

const AppProvider = ({ children }) => {

    const preventFlashing = () => {
        gsap.to("body", 0, { css: { visibility: "visible" } })
    }

    const homeAnimate = () => {
        tl.from(".line span", 1.8, {
            y: 100,
            ease: "power4.out",
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3
            }
          })
          .to(".overlay-top", 1.6, {
            height: 0,
            ease: "expo.inOut",
            stagger: 0.4
          })
          .to(".overlay-bottom", 1.6, {
            width: 0,
            ease: "expo.inOut",
            delay: -0.8,
            stagger: {
              amount: 0.4
            }
          })
          .to(".intro-overlay", 0, { css: { display: "none" } })
          .from(".case-image img", 1.6, {
            scale: 1.4,
            ease: "expo.inOut",
            delay: -2,
            stagger: {
              amount: 0.4
            }
          })
    }

    const openMenu = () => {
        tl.to("nav", 0, {
            css: { display: "block" }
        })
        .to("body", 0, { css: { overflow: "hidden" } })
        .to(".App", 1, {
        //   y: width <= 654 ? "70vh" : window.innerHeight / 2,
            y: "62vh",
            ease: "expo.inOut"
        })
        .to(".hamburger-menu span", 0.6, {
            delay: -1,
            scaleX: 0,
            transformOrigin: "50% 0%",
            ease: "expo.inOut"
        })
        .to("#Path_1", 0.4, {
            delay: -0.6,
            css: {
                strokeDashoffset: 10,
                strokeDasharray: 5
            }
        })
        .to("#Path_2", 0.4, {
            delay: -0.6,
            css: {
                strokeDashoffset: 10,
                strokeDasharray: 20
            }
        })
        .to("#Line_1", 0.4, {
            delay: -0.6,
            css: {
                strokeDashoffset: 40,
                strokeDasharray: 18
            }
        })
        .to("#circle", 0.6, {
            delay: -0.8,
            css: {
                strokeDashoffset: 0
            },
            ease: "expo.inOut"
        })
        .to(".hamburger-menu-close", 0.6, {
            delay: -0.8,
            css: { display: "block" }
        })
    }

    const closeMenu = () => {
        tl.to(".App", 1, {
                y: 0,
                ease: "expo.inOut"
        })
        .to("#circle", 0.6, {
            delay: -0.6,
            css: {
                strokeDashoffset: -193,
                strokeDasharray: 227
            }
        })
        .to("#Path_1", 0.4, {
            delay: -0.6,
            css: {
                strokeDashoffset: 10,
                strokeDasharray: 10
            }
        })
        .to("#Path_2", 0.4, {
            delay: -0.6,
            css: {
                strokeDashoffset: 10,
                strokeDasharray: 10
            }
        })
        .to("#Line_1", 0.4, {
            delay: -0.6,
            css: {
                strokeDashoffset: 40,
                strokeDasharray: 40
            }
        })
        .to(".hamburger-menu span", 0.6, {
            delay: -0.6,
            scaleX: 1,
            transformOrigin: "50% 0%",
            ease: "expo.inOut"
        })
        .to(".hamburger-menu-close", 0, {
            delay: -0.1,
            css: { display: "none" }
        })
        .to("body", 0, { css: { overflow: "auto" } })
        .to("nav", 0, {
            css: { display: "none" }
        })
    }


    return (

        <AppContext.Provider
            value={{
                preventFlashing,
                homeAnimate,
                openMenu,
                closeMenu,
            }}
        >
        {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }