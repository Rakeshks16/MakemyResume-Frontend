import React, {useState} from 'react'
import axios from 'axios'
import profile from "./person-a.svg"
import email from "./envelope.svg"
import pass from "./lock.svg"
import {Link } from "react-router-dom"
import Workspace from '../Workspace/Workspace';

function Login() {
    const [cred,setcred] = useState({email:"",password:""})
    const onChangeFieldshandler = (e)=>{
       let  prevstate = {...cred}
       prevstate[e.target.name]= e.target.value
       setcred(prevstate)

    }


    const onSubmithandler =async ()=>{
console.log("user cred",cred)
 try {
     let user = await axios.post('http://localhost:8000/login',cred)
     window.location="/workspace"
     console.log(user)
     console.log('passed');
   
 } catch (error) {
     console.log(error,"error in login");
    if (error.response && error.response.status === 400) {
       
        alert('email or password wrong')
 }
    }
   


}
    return (
        // <div className="container">
        //     <header><h1>Login</h1></header>
        //     <div className='submain'>
        //     <div class="log">
        //           <label for="exampleInputEmail1" class="form-label"><b>Email</b></label>
        //           <input type="text" name="email" placeholder="Enter your Email" onChange={onChangeFieldshandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
        //     </div>
            
        //     {/* <input type="text" name="email" placeholder="Enter your Email" onChange={onChangeFieldshandler}/><br/> */}
        //     {/* <input type="password" name="password" placeholder="Enter your Password" onChange={onChangeFieldshandler} /><br/> */}
            
        //     <div className="log"><b>Password</b>
        //     <input type="password" name="password" placeholder="Enter your Password" onChange={onChangeFieldshandler} /><br/>
        //     </div>
        //     <button className="button" onClick={onSubmithandler}>Login</button>

        //     <div className="button"><Link to="/signup">Signup</Link>
        //     </div>
        //     </div>    
        // </div>
        
        <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           {/* <div className="container-image"> */}
             <img src={profile} alt="profile" className="profile"/>
           {/* </div> */}


         </div>
         <div>
           <h1>Login</h1>
           <br/>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" name="email" placeholder="Enter your Mail" className="name" onChange={onChangeFieldshandler}/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" name='password' placeholder="Enter Password" className="name" onChange={onChangeFieldshandler}/>
           </div>
          <div className="login-button">
          <button onClick={onSubmithandler}>Login</button>
          </div>
          <div className="log-button"><h2>New User Click here <Link to="/signup">Signup&raquo;</Link></h2>
          </div>
           
            {/* <p className="link">
              <a href="#">Sign Up</a>
            </p> */}
           
 
         </div>
       </div>
       

     </div>
    </div>
    )
}

export default Login
