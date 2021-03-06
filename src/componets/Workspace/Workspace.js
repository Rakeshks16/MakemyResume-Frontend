import { Component } from 'react';
import Artboards from '../Artboards';
import FormContainer from '../FormContainer/FormContainer';
import ScrollBar from '../ScrollBar/ScrollBar';
import TemplatePicker from '../TemplatePicker/TemplatePicker';
import classes from './Workspace.module.css';
import SideBar from '../SideBar/SideBar';

class Workspace extends Component {

    state = {
        zoom: 75,  
    }

render() {
    console.log(this.props,"workpace props");
    const Artboard = this.props.state.pickedTemplate !== null ? Artboards[this.props.state.pickedTemplate] : null;
   
    return (
        
        <div className={[classes.workspace, (this.props.state.pickedTemplate !== null || !this.props.state.isInfoFilled) && classes.noElement].join(' ')}>
            {/* <SideBar /> */}
            
            {
               !this.props.state.isInfoFilled 
                  ?  <FormContainer 
                        completed={userInfo => setTimeout(() => {
                        this.props.onInfoFilled();
                        this.setState({ userInfo })
                     }, 5000)} />       
                  : (this.props.state.pickedTemplate === null) 
                     ? <TemplatePicker size={40} {...this.state.userInfo} onSetArtboard={this.props.onSetArtboard}  /> 
                     : ( 
                        <>
                           <ScrollBar zoom={this.state.zoom} onZoomChange={e => this.setState({zoom: e.target.value})}/>
                           <Artboard zoom={this.state.zoom} {...this.state.userInfo}/>
                        </>
                     ) 
            }
        </div>
    );
}
}

export default Workspace