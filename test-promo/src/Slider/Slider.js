import React, {useEffect, useRef, useState} from 'react'
import classes from './Slider.module.css'
import Page1 from "../Pages/Page1/Page1";
import Page2 from "../Pages/Page2/Page2";
import Page3 from "../Pages/Page3/Page3";
import Layout from "../hoc/Layout";
import Page4 from "../Pages/Page4/Page4";

const Slider = () => {

    const posX1 = useRef(0)
    const posInit = useRef(0)
    const posX2 = useRef(0)
    const posFinal = useRef(0)
    const slideWidth = 1024   //ширина слайда
    const posThreshold = slideWidth * 0.2
    const slideIndex = useRef(0)
    let transformation = 0
    let sliderTrack = useRef()
    const stylesTrack = {
        transform: 'translate3d(-0px, 0px, 0px)',
        transition: ''
    }


    const trfRegExp = /[-0-9.]+(?=px)/

    const slide = () => {


        if (!sliderTrack.current.style.transition) {
            sliderTrack.current.style.transition = 'transform 1s'
        }

        sliderTrack.current.style.transform = `translate3d(-${slideIndex.current * slideWidth}px, 0px, 0px)`


    }
    const BeginHandler = () => {
        slideIndex.current = 0
        slide()
    }
    const nextHandler = () => {
        slideIndex.current++
        slide()
    }

    const swipeStart = (event) => {
        posInit.current = event.touches[0].clientX
        posX1.current = event.touches[0].clientX
        sliderTrack.current.style.transition = ''
        document.addEventListener('touchmove', event => swipeAction(event))
        document.addEventListener('touchend', swipeEnd)
    }

    const swipeAction = (event) => {
        let styleCurrent = sliderTrack.current.style.transform
        transformation = Number(styleCurrent.match(trfRegExp)[0])
        posX2.current = posX1.current - event.touches[0].clientX
        posX1.current = event.touches[0].clientX
        sliderTrack.current.style.transform = `translate3d(${transformation - posX2.current}px, 0px, 0px)`

    }

    const swipeEnd = () => {

        posFinal.current = posInit.current - posX1.current
        if (Math.abs(posFinal.current) > posThreshold) {
            if (posInit.current < posX1.current) {
                slideIndex.current--
            } else if (posInit.current > posX1.current) {
                slideIndex.current++
            }
        }
        if (posInit.current !== posX1.current) {
            slide();
        }
        document.removeEventListener('touchmove', swipeAction);
        document.removeEventListener('touchend', swipeEnd);
    }

    const addition = useRef(false)
    const onAddition = () => {
        console.log(addition.current)
        addition.current= !addition.current
    }


    useEffect(() => {
        document.addEventListener("touchstart", event => swipeStart(event))
    })

    return (
        <div className={classes.slider}>
            <div className={classes.sliderList}>
                <div ref={sliderTrack}
                     className={classes.sliderTrack}
                     style={sliderTrack.current ? sliderTrack.current.style : stylesTrack}>
                    <div className={classes.sliderItem}>
                        <Page1
                            onBegin={BeginHandler}
                            onNext={nextHandler}
                        />
                    </div>
                    <div className={classes.sliderItem}>
                        <Page2
                            onBegin={BeginHandler}
                        />
                    </div>
                    <div className={classes.sliderItem}>
                        {addition ?
                            <Page3 onBegin={BeginHandler}
                                   onAddition={onAddition}
                            /> :
                            <Page4/>
                        }


                    </div>
                    {/*<div className={classes.sliderItem}>*/}
                    {/*    4*/}
                    {/*</div>*/}
                </div>
            </div>
            {/*<div className={classes.sliderArrow}>*/}
            {/*    <button type="button" className={classes.prev} onClick={BeginHandler}>&larr;</button>*/}
            {/*    <button type="button" className={classes.next} onClick={nextHandler}>&rarr;</button>*/}
            {/*</div>*/}
        </div>
    )
}
export default Slider