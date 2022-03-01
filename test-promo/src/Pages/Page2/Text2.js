import React from 'react'
import classes from "./Text.module.css";
import btn_scroll from "../../Pictures/btn_scroll.png"
import rectangle from "../../Pictures/Rectangle.png"

const Text2 = () => {
    const text = "Текст \n сообщения"
    const text1 = "Lorem ipsum dolor sit amet,"

    const text2 = "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
        "labore et dolore magna aliqua.\n" +
        "\n" +
        "Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. " +
        "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse interdum consectetur libero id. Nec ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut porttitor leo a diam slicitudin tempor id. Euismod quis viverra nibh cras pulvinar mattis nunc.\n" +
        "\n" +
        "Massa massa ultricies mi quis. Sit amet massa vitae tortor condimentum " +
        "lacinia. Et malesuada fames ac turpis egestas integer eget."

    return (
        <div className={classes.container}>
            <div className={classes.hi}>{text}</div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <img className={classes.imgScroll} src={btn_scroll} alt="scroll"/>
                    <img className={classes.imgSlider} src={rectangle} alt="scroll"/>
                </div>
                <div className={classes.info}><strong>{text1}</strong>{text2}</div>
                {/*<div className={classes.gilroyLight}>ЭТО</div>*/}
                {/*<div className={classes.gilroyExtraBold}><strong>НЕ</strong></div>*/}
            </div>
            {/*<div className={classes.gilroyLight}>КОММЕРЧЕСКОЕ</div>*/}
            {/*<div className={classes.row}>*/}
            {/*    <div className={classes.gilroyLight}>ЗАДАНИЕ</div>*/}
            {/*    <img style={{marginLeft: "10px"}}  src={btn_continue} alt="continue"/>*/}
            {/*</div>*/}

        </div>
    )
}
export default Text2