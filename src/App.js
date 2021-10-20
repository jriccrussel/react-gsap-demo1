import React,{ Component, useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import {gsap} from 'gsap'
import Header from './component/Header'
import Banner from './component/Banner'
import Cases from './component/Cases'
import IntroOverlay from './component/IntroOverlay'

import './styles/App.scss'

// pages
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import Approach from './pages/Approach'
import Services from './pages/Services'
import About from './pages/About'
import Navigation from './component/Navigation'

// routes
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "caseStudies", Component: CaseStudies },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/services", name: "Services", Component: Services },
  { path: "/about-us", name: "About", Component: About },
]

// dimension duratipn
// const debounce = (fn, ms) => {
//   let timer

//   return () => {
//     clearTimeout(timer)

//     timer = setTimeout(() => {
//       timer = null
//       fn.apply(this, arguments)
//     }, ms)
//   }
// }


function App() {
  // dimension initial state
  // const [dimensions, setDimensions] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // })

  useEffect(() => {
    // let vh = window.innerHeight * .01
    // document.documentElement.style.setProperty("--vh", `${vh}px`)

    // Animation
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } })
      
    // gsap timeline
    // const tl = gsap.timeline()

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

    // sets the dimesion when g responsive sa browser(inig inspect from desktop to mobile and from mobile to desktop)
    // const handleResize = () => {
    //   setDimensions({
    //     height: window.innerHeight,
    //     width: window.innerWidth,
    //   })
    // }

    // window.addEventListener("resize", handleResize)

    // return () => {
    //   window.removeEventListener("resize", handleResize)
    // }

    // const debouncedHandleResize = debounce(function handleResize() {
    //   setDimensions({
    //     height: window.innerHeight,
    //     width: window.innerWidth
    //   });
    // }, 1000)

    // window.addEventListener("resize", debouncedHandleResize);
    // return () => {
    //   window.removeEventListener("resize", debouncedHandleResize);
    // }

  }, [])

  return (
    <>
      <Header />
      {/* {console.log(dimensions)} */}
      <div className="App">
        {/* <IntroOverlay /> */}        
        {/* <Banner />
        <Cases /> */}
        {/* <Home /> */}

        {/* {routes.map(({path, Component}) => {
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        })} */}

        {/* {routes.map((item) => {
          return (
            <Route key={item.path} exact path={item.path}>
              <item.Component />
            </Route>
          )
        })} */}

        {routes.map((item) => {
            const { path, Component } = item

            return(
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            )
        })}
        
      </div>
      <Navigation />
    </>
  )
}

export default App
