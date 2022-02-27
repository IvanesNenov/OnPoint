import React from 'react'
import classes from './Page1.module.css'
import home_project from '../../Pictures/home_project.png'

import onpoint from '../../Pictures/onpoint.png'
import Text from "./Decoration/Text";

const Page1 = () => {

    return (
        <div className={classes.Slider1}>
            <div style={{marginLeft: '20px'}}>

                <img className={classes.home_button} width="204" height="34" src={home_project} alt="home"/>
                <Text/>

                <div className={classes.onpoint}>
                    <img height="10" src={onpoint} alt="continue"/>
                </div>
            </div>
        </div>
    )
}
export default Page1