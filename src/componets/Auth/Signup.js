import React, {useState} from 'react'
import axios from 'axios'
import profile from "./person-plus-a.svg"
import email from "./envelope.svg"
import pass from "./lock.svg"
import phone from "./telephone-fill.svg"
import user from "./user.svg"
import './style.css'
import {Link } from "react-router-dom"

function Signup() {
    const [cred,setcred] = useState({username:"",email:"",phone:"",password:""})
    const onChangeFieldshandler = (e)=>{
       let  prevstate = {...cred}
       prevstate[e.target.name]= e.target.value
       setcred(prevstate)

    }
    const onSubmithandler =async ()=>{
console.log("user cred",cred)
 try {
     let user = await axios.post('http://localhost:8000/signup',cred)
     window.location="/workspace"
     console.log(user)
 } catch (error) {
    if (error.response && error.response.status === 400) {
        alert('email or phone number or password wrong')
 }
    }
}
    return (
        // <div>
        //     <h1>Signup</h1>
        //     <input type="text" name="username" placeholder="Enter user name" onChange={onChangeFieldshandler} /><br/>
        //     <input type="text" name="email" placeholder="Enter your Email" onChange={onChangeFieldshandler} /><br/>
        //     <input type="number" name="phone" placeholder="Enter your Phone number" onChange={onChangeFieldshandler} /><br/>
        //     <input type="password" name="password" placeholder="Enter your Password" onChange={onChangeFieldshandler} /><br/>   
        //     <div className="button" onClick={onSubmithandler}>Signin</div>
        //     <div className="button"><Link to="/login">Login</Link>
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
           <h1>Signup</h1>
           <br/>
           <div>
           <img src={user} alt="user" className="email"/>
           <input type="text" name="username" placeholder="Enter user name" className='name' onChange={onChangeFieldshandler} />
           </div>
           <div className="second-input">
             <img src={email} alt="email" className="email"/>
             <input type="text" name="email" placeholder="Enter your Mail" className="name" onChange={onChangeFieldshandler}/>
           </div>
           <div className="second-input">
           <img src={phone} alt="phone" className="email"/>
           <input type="number" name="phone" placeholder="Enter Phone number" className='name' onChange={onChangeFieldshandler} />
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" name='password' placeholder="Enter Password" className="name" onChange={onChangeFieldshandler}/>
             
           </div>
          <div className="login-button">
          <button onClick={onSubmithandler}>Sign-in</button>
          </div>
          <div className="log-button"><h2>Already a Customer Click Here <Link to="/login">Login&raquo;</Link></h2>
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

export default Signup
