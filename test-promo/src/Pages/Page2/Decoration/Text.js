import React from 'react'
import classes from "../Decoration/Text.module.css";
import btn_scroll from "../../../Pictures/btn_scroll.png"
import rectangle from "../../../Pictures/Rectangle.png"

const Text = () => {
    const text = "Текст \n сообщения"
    const text2 = "Ко́шка (лат. Felis catus) — домашнее животное, " +
        "одно из наиболее популярных[1] (наряду с собакой) " +
        "«животных-компаньонов»[2][3][4].\n" +
        "\n" +
        "С точки зрения научной систематики, домашняя кошка — млекопитающее" +
        " семейства кошачьих отряда хищных. Нередко домашнюю кошку рассматривают" +
        " как подвид лесной кошки (Felis silvestris) — Felis s. catus[5], однако, " +
        "с точки зрения современной биологической систематики (2017 год), домашняя " +
        "кошка является отдельным биологическим видом[6].\n" +
        "\n" +
        "Являясь одиночным охотником на грызунов и других мелких животных, " +
        "кошка — социальное животное[7], использующее для общения широкий диапазон" +
        " звуковых сигналов, а также феромоны и движения тела[8].\n" +
        "\n"
    return (
        <div className={classes.container}>
            <div className={classes.hi}>{text}</div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <img className={classes.imgScroll} src={btn_scroll} alt="scroll"/>
                    <img className={classes.imgSlider} src={rectangle} alt="scroll"/>
                </div>
                <div className={classes.info}>{text2}</div>
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
export default Text