import React,{useEffect, useState} from 'react'
import gsap from 'gsap'
import Banner from '../component/Banner'
import Cases from '../component/Cases'
import IntroOverlay from '../component/IntroOverlay'
import {useGlobalContext} from '../context'

const tl = gsap.timeline()

// const homeAnimation = (completeAnimation) => {

//   tl.from(".line span", 1.8, {
//     y: 100,
//     ease: "power4.out",
//     delay: 1,
//     skewY: 7,
//     stagger: {
//         amount: 0.3
//     }
//   })
//   .to(".overlay-top", 1.6, {
//     height: 0,
//     ease: "expo.inOut",
//     stagger: 0.4
//   })
//   .to(".overlay-bottom", 1.6, {
//     width: 0,
//     ease: "expo.inOut",
//     delay: -0.8,
//     stagger: {
//       amount: 0.4
//     }
//   })
//   .to(".intro-overlay", 0, { css: { display: "none" } })
//   .from(".case-image img", 1.6, {
//     scale: 1.4,
//     ease: "expo.inOut",
//     delay: -2,
//     stagger: {
//       amount: 0.4
//     },
//     onComplete: completeAnimation
//   })
// }

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const {preventFlashing, homeAnimate} = useGlobalContext()

  useEffect(() => {
    // let vh = window.innerHeight * .01
    // document.documentElement.style.setProperty("--vh", `${vh}px`)

    // const completeAnimation = () => {
    //   setAnimationComplete(true)
    // }

    // Animation
    // prevents flashing
    // gsap.to("body", 0, { css: { visibility: "visible" } })
    preventFlashing()
      
    // gsap timeline
    const tl = gsap.timeline()

    // tl.from(".line span", 1.8, {
    //   y: 100,
    //   ease: "power4.out",
    //   delay: 1,
    //   skewY: 7,
    //   stagger: {
    //       amount: 0.3
    //   }
    // })
    // .to(".overlay-top", 1.6, {
    //   height: 0,
    //   ease: "expo.inOut",
    //   stagger: 0.4
    // })
    // .to(".overlay-bottom", 1.6, {
    //   width: 0,
    //   ease: "expo.inOut",
    //   delay: -0.8,
    //   stagger: {
    //     amount: 0.4
    //   }
    // })
    // .to(".intro-overlay", 0, { css: { display: "none" } })
    // .from(".case-image img", 1.6, {
    //   scale: 1.4,
    //   ease: "expo.inOut",
    //   delay: -2,
    //   stagger: {
    //     amount: 0.4
    //   }
    // })

    homeAnimate()

    // homeAnimation(completeAnimation)

  }, [])

  return (
    <>
      {/* {animationComplete === false ? <IntroOverlay />  : ""} */}
      <IntroOverlay /> 
      <Banner />
      <Cases />
    </>
  )
}

export default Home
