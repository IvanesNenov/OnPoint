import React, {useEffect} from 'react'
import classes from './Decorator.module.css'
import home_project from '../Pictures/home_project.png'

import onpoint from '../Pictures/onpoint.png'


const Decorator = (props) => {
    const inputClasses = [classes.Slider1]
    console.log(props)


        // switch (props.background) {
        //     case 'one':
        //         return inputClasses.push(classes.one)
        //     case 'two':
        //         return inputClasses.push(classes.two)
        //
        //     default:
        //         return inputClasses
        //
        //
        // }



    return(
        <React.Fragment>
            <div className={inputClasses.join(' ')}>
            <button onClick={props.onBegin}>
                <img className={classes.home_button} width="150" src={home_project} alt="home"/>
            </button>
            <props.Text/>
            <div className={classes.onpoint}>
                <img height="15" src={onpoint} alt="continue"/>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Decorator