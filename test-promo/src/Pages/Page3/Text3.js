import React from 'react'
import classes from "../Page3/Text3.module.css";


const Text3 = (props) => {
    const text1 = 'Ehicula ipsum a arcu \n ' +
        'cursus vitae. Eu non: \n diam phasellus \n vestibulum lorem' +
        ' sed \n risus ultricies'
    const text2 = 'A arcu \n cursus vitae'
    return (
        <div className={classes.container}>
            <div className={classes.hi}>КЛЮЧЕВОЕ СООБЩЕНИЕ</div>
            <div className={classes.gilroyLight}>
                BREND
                <strong className={classes.gilroyExtraBold}>
                    XY
                </strong>
            </div>

            <div className={classes.row}>
                <div className={classes.eat}>{text1}</div>
                <div className={classes.calendar}>{text2}</div>
                {/*<button onClick={props.onNext}>*/}
                {/*    <img style={{marginLeft: "10px"}}  src={btn_continue} alt="continue"/>*/}
                {/*</button>*/}

            </div>

        </div>
    )
}
export default Text3