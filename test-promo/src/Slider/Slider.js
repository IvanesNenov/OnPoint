import React, {useEffect, useRef} from 'react'
import classes from './Slider.module.css'


const Slider = () => {
    // const [posX1, setPosX1] = useState(0)
    const posX1 = useRef(0)
    // const [posInit, setPosInit] = useState(0)
    const posInit = useRef(0)
    // const [posX2, setPosX2] = useState(0)
    const posX2 = useRef(0)
    // const [posFinal, setPosFinal] = useState(0)
    const posFinal = useRef(0)
    const slideWidth = 200   //ширина слайда
    const posThreshold = slideWidth * 0.3
    const slideIndex = useRef(0)
    let transformation = 0
    let sliderTrack = useRef()
    // const stylesTrack = useRef({
    //     transform: 'translate3d(0px, 0px, 0px)',
    //     transition: 'transform .5s'
    // })
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
                        1
                    </div>
                    <div className={classes.sliderItem}>
                        2
                    </div>
                    <div className={classes.sliderItem}>
                        3
                    </div>
                    <div className={classes.sliderItem}>
                        4
                    </div>
                </div>
            </div>
            <div className={classes.sliderArrow}>
                <button type="button" className={classes.prev} onClick={BeginHandler}>&larr;</button>
                <button type="button" className={classes.next} onClick={nextHandler}>&rarr;</button>
            </div>
        </div>
    )
}
export default Slider