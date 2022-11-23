import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import usePersonalToggle from "./usePersonalToggle";
function Login(){
  const navigate= useNavigate();
  
const [email,setEmail]=useState('') 
const [password,setPassword]=useState('') 
const[passInpuType,togglePassword]=usePersonalToggle()
// const [passwordShown,setPasswordShown]=useState(false);
//  const togglePassword = () => {
//     // When the handler is invoked
//     // inverse the boolean state of passwordShown
//     setPasswordShown(!passwordShown);
//   };

const handleLogin = (e) =>{
  e.preventDefault();
  const data = {
    Email : email,
    password : password
}
const url='http://localhost:57575/api/Registration/Login';
axios.post(url,data)
.then((result) =>{
  const dt=result.data;
  if(email&&password)
  {

  
  if (dt.statusCode===200){
    if(email==="admin@gmail.com"&&password==="admin"){
      localStorage.setItem("username",email);
      navigate("/admindashboard");

    }
  
    else
    {
      localStorage.setItem("loggedEmail",email);
      localStorage.setItem("username",dt.registration.name);
      if(dt.registration.userType==='STAFF')

      navigate("/staffdashboard");
      else{
        if(dt.registration.isApproved===0)
        {
          alert("Registration is pending for aprroval");
        }
        else{
          navigate("/studentdashboard");

        }
        
      }
      
    }
  }
  else{
    alert (dt.statusMsg+" : "+"Enter the correct email or password");
}
}

  else 
  {
    alert ("Please enter the email id and password");
  }
  
})
.catch ((error)=>{
  console.log(error);
})
}

    return(
        <div>
            <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      {/* <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div> */}
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
       
          <div className="form-outline mb-4">
            <h1>STUDENT / ADMIN LOGIN </h1>
            <label className="form-label" for="form1Example13">Email address</label>
            <input type="email" autoComplete="off" id="form1Example13" className="form-control form-control-lg"
            placeholder="Enter Email"
           onChange={(e)=>setEmail(e.target.value)} />
           
          </div>

          
          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example23">Password</label>
            <input type={passInpuType} 
            id="form1Example23" className="form-control form-control-lg"
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value) }/>
            <span className="password-toogle-icon" style={{position: "absolute",
    top: "300px",
    right:"500px",
    
    zIndex: "1000"}}>{togglePassword}</span>
            
          </div>

         

          <div className="row d-flex align-items-center justify-content-center h-100">
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(e)=>handleLogin(e)}>Sign in</button>
          </div>
          <br>
          </br>

          <div className="row d-flex align-items-center justify-content-center h-100">
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={()=>navigate("/registration")}>Register</button>
          </div>
          <br></br>

          <div className="row d-flex align-items-center justify-content-center h-100">
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={()=>navigate("/stafflogin")}>Staff Login</button>
          </div>
          <br></br>
          <div className="row d-flex align-items-center justify-content-center h-100">
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={()=>navigate("/officerlogin")}>Officer Login</button>
          </div>
         

        </form>
      </div>
    </div>
  </div>
</section>
    
   

        </div>
    )
}
export default Login;