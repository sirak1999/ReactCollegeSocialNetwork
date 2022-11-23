import React, {Fragment, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import image from ""

export default function AdminHeader()
{
   
    const navigate= useNavigate();
    const [ username,setUsername]=useState("");
    useEffect(()=>{
        setUsername(localStorage.getItem("username"));
    },[]);
    const logout = (e)=> {
        e.preventDefault();
        localStorage.removeItem("username");
        navigate("/");
    }
    return(
      <Fragment style={{backgroundColor:"blue"}}>
        
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"> Social Network</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Welcome <span className="sr-only"></span>
        Admin</a>
      </li> */}
      <li className="nav-item">
        <Link to = "/admindashboard" className="nav-link" >Welcome Admin</Link>
      </li>
      <li className="nav-item">
        <Link to = "/registrationlist" className="nav-link">Registration Management</Link>
      </li>
      <li className="nav-item">
        <Link to = "/articlelist" className="nav-link">Article Management</Link>
      </li>
      <li className="nav-item">
        <Link to = "/newslist" className="nav-link">News Management</Link>
      </li>
      <li className="nav-item">
        <Link to = "/stafflist" className="nav-link">Staff Management</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
    <button type="submit" style={{marginLeft:'350px'}}className="btn btn-outline-success my-2 my-sm-0"  onClick={(e)=>logout(e)}>Logout</button>
    </form>
  </div>
 
</nav>
{/* <div className="col-xl-6 d-none d-xl-block">
              <img src="https://cdn.pixabay.com/photo/2018/10/19/10/43/social-media-3758364_1280.jpg"
                alt="Sample photo" className="img-fluid"
                height="auto"
    width="auto"
    style={{ alignSelf: 'center' }}
      //           style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem",
      //           backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   width: '100vw',
      //   height: '100vh'
      //  }} 
      />
                
            </div> */}
           
        </Fragment>
        
    )
}