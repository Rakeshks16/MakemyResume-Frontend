import { Component} from 'react';
import './App.css';

import Workspace from './componets/Workspace/Workspace';
import {Switch, Route, Link} from 'react-router-dom'
import Login from './componets/Auth/Login';
import Signup from './componets/Auth/Signup';

import SideBar from './componets/SideBar/SideBar';


class App extends Component {

  state = {
    isInfoFilled: false,
    pickedTemplate: null,
  }
 


  clickHandler = type => {
    switch(type) {
      case 'reset': 
          this.setState({
            isInfoFilled: false,
            pickedTemplate: null,
          });
          break;
      case 'choose': 
          this.setState({
            pickedTemplate: null,
          });
          break;
      case 'print': 
          window.print();
          break;
      default:
          console.error('Something went wrong');
    }
  }


  render() {
   
    
    return (
      <div className="App">
        <SideBar 
          {...this.state}
          clickHandler={this.clickHandler}/>
        
        {/* <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/workspace">workspace</Link> */}
        <Switch>
        <Route path="/workspace" 
         render={(props)=><Workspace state={this.state} {...props}
         onSetArtboard={picked => this.setState({pickedTemplate: picked}) }
         onInfoFilled={() => this.setState({isInfoFilled: true})}
         />} 
          />  
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
             {/* <Route path="./Workspace" component={Workspace}
            // render={(props)=> <Workspace {...this.state} clickHandler={this.clickHandler}  />}
            />  */}
         
        </Switch>

        
      </div>
    );
  }
}

export default App;
