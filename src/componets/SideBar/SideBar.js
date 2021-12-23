import { useState } from 'react'
import Items from './Items/Items';
import classes from './SideBar.module.css';
import './SideBar.module.css'
import {Link } from "react-router-dom"

const SideBar = props => {
    const [open, setOpen] = useState(false);


    return (
        <div 
            className={[classes.sidebar, !open ? classes.close : ''].join(' ')} >
            <header>
                { open && <h1>MakeMyResume</h1>}
                <div 
                    className={classes.hamburger}
                    onClick={() => setOpen(!open)}
                    ><i className="fas fa-bars"></i>
                </div>
            </header>
            <div className='header'>
                <p>
                    Make a simple Resume for your jobs which highlights your Academic, Skills and Projects
                </p>
            </div><br/>
            {/* <div className='logout'><Link to="/login"><h2>Logout</h2></Link></div> */}
            <div className='log'><a href='login.js'><h2>Logout</h2></a></div>

            <Items 
                hamburgerOpen={open} 
                isInfoFilled={props.isInfoFilled} 
                pickedTemplate={props.pickedTemplate} 
                clickHandler={props.clickHandler}/>
        </div>
    )
}

export default SideBar;