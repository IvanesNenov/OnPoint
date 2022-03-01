import React from 'react'
import classes from './Page2.module.css'
import home_project from '../../Pictures/home_project.png'

import onpoint from '../../Pictures/onpoint.png'
import Text2 from "./Text2";

const Page2 = (props) => {

    return (
        <div className={classes.Slider1}>
                <button onClick={props.onBegin} >
                    <img className={classes.home_button}  width="150"  src={home_project} alt="home" />
                </button>
                <Text2/>

                <div className={classes.onpoint}>
                    <img height="15" src={onpoint} alt="continue"/>
                </div>
        </div>
    )
}
export default Page2