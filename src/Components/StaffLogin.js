import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import usePersonalToggle from "./usePersonalToggle";
function StaffLogin(){
  const navigate= useNavigate();
  const[passInpuType,togglePassword]=usePersonalToggle()
const [email,setEmail]=useState('') 
const [password,setPassword]=useState('') 
const handleLogin = (e) =>{
  e.preventDefault();
  const data = {
    Email : email,
    password : password
}
const url='http://localhost:57575/api/Registration/StaffLogin';
axios.post(url,data)
.then((result) =>{
  const dt=result.data;
  if(email&&password)
  {
  if (dt.statusCode===200){
    localStorage.setItem("loggedEmail",email);
    // localStorage.setItem("username",dt.StaffLogin.name);
    navigate("/staffdashboard");
  
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
          <h1>STAFF LOGIN </h1>
          <label className="form-label" for="form1Example13">Email address</label>
            <input type="email" id="form1Example13" className="form-control form-control-lg"
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
    top: "375px",
    right:"500px",
    
    zIndex: "1000"}}>{togglePassword}</span>
            
          </div>


          

          <div className="row d-flex align-items-center justify-content-center h-100">
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(e)=>handleLogin(e)}>Sign in</button>
          </div>
          <br>
          </br>
          <div className="row d-flex align-items-center justify-content-center h-100">
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={()=>navigate("/")}>Back</button>
          </div>

          

         

        </form>
      </div>
    </div>
  </div>
</section>
    
   

        </div>
    )
}
export default StaffLogin;