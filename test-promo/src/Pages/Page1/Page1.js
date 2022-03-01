import React from 'react'
import classes from './Page1.module.css'
import home_project from '../../Pictures/home_project.png'

import onpoint from '../../Pictures/onpoint.png'
import Text1 from "./Text1";

const Page1 = (props) => {
    return (
        <div className={classes.Slider1}>
                <button onClick={props.onBegin}>
                    <img className={classes.home_button} width="150" src={home_project} alt="home"/>
                </button>


                <Text1 onNext ={props.onNext}/>

                <div className={classes.onpoint}>
                    <img height="15" src={onpoint} alt="continue"/>
                </div>
        </div>
    )
}
export default Page1