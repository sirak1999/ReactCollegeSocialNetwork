import React,{useState} from 'react';
import axios from "axios";
import { useFormik } from "formik";
import {SignUpSchema} from './SignUpSchema'
import { useNavigate } from "react-router-dom";
import usePersonalToggle from './usePersonalToggle';

const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneno: "",
  };
function Registration() {
  const[passInpuType,togglePassword]=usePersonalToggle()  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit:(values,action)=>
          {
            //const AddCompany=async (e)=> {
             // e.preventDefault();
             console.log(values)
              const url=`http://localhost:57575/api/Registration/Registration`;
              axios.post(url,values)
              .then(res => {
               if(res.data.statusCode === 200){
                //setUser(res.data.msg)
                //history.push("/settings/companies");
                const dt=res.data;
                alert(dt.statusMsg)
               }
               
             })
             .catch(error => {
              console.log(error)
            }) 
            action.resetForm();
           //  }
        },
      })
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );


 //New ADddition
 
 

   const navigate= useNavigate();
//   const[name,setName]=useState('')
// //const[username,setUsername]=useState('')
// const[email,setEmail]=useState('')
// const[password,setPassword]=useState('')
// const[phoneNo,setPhoneNo]=useState('')

// const handleSave=(e)=>{
//   e.preventDefault();
  
//   const url='http://localhost:57575/api/Registration/Registration'
//   const data = {
//     Name : name,
//     Email : email,
//     password : password,
//     phoneNo : phoneNo
    
  
//   }
//   axios.post(url,data)
// .then((result)=> {
//   clear();
//   const dt=result.data;
//   alert(dt.statusMsg);
// })
// .catch((error)=>
// {
//   console.log(error);
// })
// }

// const handleLogin=()=>{
//   window.location.url="/login";
// }



// const clear = () =>{
//   setName("");
//   setEmail("");
//   setPassword("");
//   setPhoneNo("");
// }



  return (
  <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" className="img-fluid"
                style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem"}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Student registration form</h3>
<form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="form-outline">
                    <label className="form-label" for="form3Example1m">
                        Enter Name
                        </label>
                      <input type="text" id="form3Example1m" className="form-control form-control-lg"
                      placeholder="Enter Full Name"
                     // onChange={(e)=> setName(e.target.value)}
                     name="name"
                   //placeholder="Name"
                   value={values.name}
                   onChange={handleChange}
                   onBlur={handleBlur}
                      //value={name} 
                      />
                      {errors.name && touched.name ? (
                    <p className="error-text">{errors.name}</p>
                  ) : null}
                     
                    </div>
                  </div>

                <div className="row">
                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example97">Email ID</label>
                  <input type="text" id="form3Example97" className="form-control form-control-lg" 
                  placeholder="Enter Email Id"
                      //onChange={(e)=> setEmail(e.target.value)}
                     // value={email} />
                     name="email"
                   //placeholder="Name"
                   value={values.email}
                   onChange={handleChange}
                   onBlur={handleBlur}
                      //value={name} 
                      />
                      {errors.email && touched.email ? (
                    <p className="error-text">{errors.email}</p>
                  ) : null}
                  
                </div>

                <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" for="form3Example1n"> Password</label>
                      <input type={passInpuType}  id="form3Example1n" className="form-control form-control-lg" 
                      placeholder="Enter Password"
                      //onChange={(e)=> setPassword(e.target.value)} 
                      //value={password}/>
                      name="password"
                   //placeholder="Name"
                   value={values.password}
                   onChange={handleChange}
                   onBlur={handleBlur}
                      //value={name} 
                      />
                      <span className="password-toogle-icon" style={{position: "absolute",
    top: "385px",
    right:"375px",
    
    zIndex: "1000"}}>{togglePassword}</span>
                      {errors.password && touched.password ? (
                    <p className="error-text">{errors.password}</p>
                  ) : null}
                     
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" for="form3Example1n" >Phone Number</label>
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" 
                      placeholder="Enter Phone Number"
                      //onChange={(e)=> setPhoneNo(e.target.value)} 
                      //value={phoneNo}/>
                      name="phoneno"
                   //placeholder="Name"
                   value={values.phoneno}
                   onChange={handleChange}
                   onBlur={handleBlur}
                      //value={name} 
                      />
                      
                      {errors.phoneno  && touched.phoneno ? (
                    <p className="error-text">{errors.phoneno}</p>
                  ) : null}
                      
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset all</button>
                  <button type="submit" className="btn btn-warning btn-lg ms-2" >Register</button>
                  {/* <button type="button" className="btn btn-warning btn-lg ms-2" onClick={(e)=> handleLogin(e)}>Login</button> */}
                  <button type="button" className="btn btn-warning btn-lg ms-2" onClick={()=>navigate("/")}>Student Login </button>
                </div>
                </form>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Registration;