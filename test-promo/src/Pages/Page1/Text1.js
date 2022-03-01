import React from 'react'
import classes from "./Text.module.css";
import btn_continue from "../../Pictures/btn_continue.png";

const Text1 = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.hi}>ПРИВЕТ,</div>
            <div className={classes.row}>
                <div className={classes.gilroyLight}>ЭТО</div>
                <div className={classes.gilroyExtraBold}><strong>НЕ</strong></div>
            </div>
            <div className={classes.gilroyLight}>КОММЕРЧЕСКОЕ</div>
            <div className={classes.row}>
                <div className={classes.gilroyLight}>ЗАДАНИЕ</div>
                <button onClick={props.onNext}>
                    <img style={{marginLeft: "10px"}}  src={btn_continue} alt="continue"/>
                </button>

            </div>

        </div>
    )
}
export default Text1