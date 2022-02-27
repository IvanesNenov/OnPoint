import React, {useRef, useState} from 'react'
import classes from './Slider.module.css'


const Slider = () => {
    // const [posX1, setPosX1] = useState(0)
    const posX1 = useRef(0)
    // const [posInit, setPosInit] = useState(0)
    const posInit = useRef(0)
    const [posX2, setPosX2] = useState(0)
    // const posX2 = useRef(0)
    const [posFinal, setPosFinal] = useState(0)
    const slideWidth = 200   //ширина слайда
    const posThreshold = slideWidth * 0.3
    const [slideIndex, setSlideIndex] = useState(0)
    let transformation = 0
    let sliderTrack = useRef()
    // const stylesTrack = useRef({
    //     transform: 'translate3d(0px, 0px, 0px)',
    //     transition: 'transform .5s'
    // })
    const stylesTrack = {
        transform: 'translate3d(0px, 0px, 0px)',
        transition: ''
        // transition: 'transform .5s'
    }
    console.log(!!sliderTrack.current)


    const trfRegExp = /[-0-9.]+(?=px)/

    const slide = () => {


        if (sliderTrack.current.style.transition) {
            sliderTrack.current.style.transition = 'transform .5s'
        }

        sliderTrack.current.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`


    }


    const swipeStart = (event) => {
        // setPosInit(event.touches[0].clientX)
        posInit.current=event.touches[0].clientX
        posX1.current = event.touches[0].clientX
        // setPosX1(event.touches[0].clientX)

        document.addEventListener('touchmove', event => swipeAction(event))
        document.addEventListener('touchend', swipeEnd)
    }

    const swipeAction = (event) => {
        // let styleCurrent =sliderTrack.current.style.transform
        let styleCurrent = stylesTrack.transform
        console.log(sliderTrack.current.style.transform)
        transformation = Number(styleCurrent.match(trfRegExp)[0])
        // console.log(transformation)
        const temp = posX1.current - event.touches[0].clientX
        // console.log(temp)
        setPosX2(temp)
        // console.log(posX2)
        // posX2.current= posX1.current - event.touches[0].clientX
        posX1.current = event.touches[0].clientX
        // setPosX1(event.touches[0].clientX)
        // stateToChange = {...stylesTrack.current}
        // sliderTrack.current.style.transform = `translate3d(${transformation - posX2}px, 0px, 0px)`

        // stylesTrack.current = stateToChange
    }

    const swipeEnd = () => {
        // console.log(posInit.current)
        const temp2 = posInit.current - posX1.current
        setPosFinal(temp2)

        document.removeEventListener('touchmove', swipeAction);
        document.removeEventListener('touchend', swipeEnd);

        if (Math.abs(posFinal) > posThreshold) {

            if (posInit < posX1.current) {
                setSlideIndex(prev => {
                    prev--
                })

            } else if (posInit > posX1.current) {
                setSlideIndex(prev => {
                    prev++
                })
            }
        }


        if (posInit.current !== posX1.current) {
            // slide();
        }

    }


    return (
        <div className={classes.slider} >
            <div className={classes.sliderList} onTouchStart={event => swipeStart(event)} >
                <div ref={sliderTrack}
                     className={classes.sliderTrack}
                     style={sliderTrack.current? sliderTrack.current.style :stylesTrack.current}>
                    <div className={classes.sliderItem}>
                        {/*<div>{`int ${posInit.current}`}</div>*/}
                        {/*<div>{`x1 ${posX1.current}`}</div>*/}
                        {/*<div>{`x2 ${posX2}`}</div>*/}
                        {/*<div>{`final ${posFinal}`}</div>*/}
                        1
                    </div>
                    <div className={classes.sliderItem}>2</div>
                    <div className={classes.sliderItem}>3</div>
                    <div className={classes.sliderItem}>4</div>
                </div>
            </div>
            <div className={classes.sliderArrow}>
                <button type="button" className={classes.prev}>&larr;</button>
                <button type="button" className={classes.next}>&rarr;</button>
            </div>
        </div>
    )
}
export default Slider