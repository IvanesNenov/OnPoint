import React, {useState} from 'react'
import classes from './Layout.module.css'
import btn4 from '../Pictures/btn4.png'
import home_project from "../Pictures/home_project.png";
import Drawer from "../UI/Drawer";
// import Page3 from "../Pages/Page3/Page3";

const Layout = props => {
    // const [isOpen, setIsOpen] = useState(false)
    const openHandler = () => {
        console.log('Подробнее')
    }

    console.log(props.children)
    return (
        <div className={classes.Layout}>
            <button onClick={props.onBegin} >
                <img className={classes.home_button}  width="150"  src={home_project} alt="home" />
            </button>
            <Drawer/>
            {/*<button onClick={props.onBegin}>*/}
            {/*    <img className={classes.home_button} width="150" src={home_project} alt="home"/>*/}
            {/*</button>*/}

            {/*<button onClick={openHandler}>*/}
            {/*    <img src={btn4} alt={'Подробнее'}/>*/}
            {/*</button>*/}
            <main>
                {props.children}
                {/*<Page3/>*/}
            </main>
        </div>
    )
}
export default Layout