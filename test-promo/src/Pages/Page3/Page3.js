import React from 'react'
import classes from './Page3.module.css'
import home_project from '../../Pictures/home_project.png'
import onpoint from '../../Pictures/onpoint.png'
import btn4 from '../../Pictures/btn4.png'
import Text3 from "./Text3";

const Page3 = (props) => {



    return (
        <div className={classes.Slider1}>
            <button onClick={props.onBegin}>
                <img className={classes.home_button} width="150" src={home_project} alt="home"/>
            </button>

            <Text3/>
            <button className={classes.add} onClick={props.onAddition}>
                <img className={classes.home_button} width="200" src={btn4} alt="addition"/>
            </button>
            <div className={classes.onpoint}>
                <img height="15" src={onpoint} alt="continue"/>
            </div>
        </div>
    )
}
export default Page3