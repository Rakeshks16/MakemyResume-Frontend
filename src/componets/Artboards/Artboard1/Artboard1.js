import { Fragment } from 'react';
import generalClasses from '../Artboard.module.css';

import classes from "./classes.module.css";

const Artboard1 = props => {
    return (
        <div 
            id="section-to-print"
            onClick={props.onClickArtboard} 
            className={[generalClasses.container, classes.container].join(' ')} 
            style={{transform: `scale(${props.zoom / 100})`, ...props.style}}
            >
            
            <div className={classes.personal} >
                <h2 className={classes.infoType} > </h2>
                
                <div style={{display: 'flex'}}>
                    { 
                        props.personal && props.personal.image
                            ? <img src={props.personal?.image} className={classes.profilePic} alt="User" />
                            : <img src={'assets/user.png'} className={classes.profilePic} alt="User" />
                    }
                    <div>
                        <p>Name: {props.personal?.name}</p>
                        <p>Phone: {props.personal?.phone}</p>
                        <p>Email: {props.personal?.email}</p>
                        <p>Gender: {props.personal?.gender}</p>
                        <p>D.O.B : {props.personal?.dob}</p>
                    </div>  
                </div>
            </div>
            <div className={classes.education}>
                <h2 className={classes.infoType} >Education</h2>
                <p><strong>{props.education?.degree}</strong> in <strong>{props.education?.university}</strong><span style={{float: 'right'}}>{props.education?.startDate} <b>to</b> {props.education?.endDate}</span></p>
                <p></p>
            </div>
            <div className={classes.projects} >
                <h2 className={classes.infoType} >Projects</h2>
                { 
                    props.projects?.map(project => (
                        <Fragment key={project?.title}>
                            <b><p><a href={project?.url !== "" ? `https://${project?.url}` : ''}>{project?.title}</a></p></b>
                            <p style={{fontSize: '1.2rem'}}>{project.description}</p>
                        </Fragment>
                    ))
                }
            </div>
            <div className={classes?.skills} >
                <h2 className={classes.infoType} >Skills</h2>
                <ul>
                    { props.skills?.map(skill => <li key={skill}><p>{skill}</p></li>)}
                </ul>
            </div>
        </div>
    );
}
export default Artboard1;