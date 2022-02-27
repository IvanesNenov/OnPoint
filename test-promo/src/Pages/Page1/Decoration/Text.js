import React from 'react'
import classes from "../Decoration/Text.module.css";
import btn_continue from "../../../Pictures/btn_continue.png";

const Text = () => {
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
                <img style={{marginLeft: "10px"}}  src={btn_continue} alt="continue"/>
            </div>

        </div>
    )
}
export default Text