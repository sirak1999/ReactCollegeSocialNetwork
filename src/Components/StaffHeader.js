import React, {Fragment, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function StaffHeader()
{
    const navigate= useNavigate();
    const [ username,setUsername]=useState("");
    useEffect(()=>{
        setUsername(localStorage.getItem("username"));
    },[]);
    const logout = (e)=> {
        e.preventDefault();
        localStorage.removeItem("username");
        navigate("/stafflogin");
    };
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Social Network</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Welcome To Staff Personalized Dashboard <span className="sr-only"></span>
        {username}</a> 
      </li>
      <li className="nav-item">
        <Link to = "/staffevent" className="nav-link">Add Event</Link>
      </li>
      
      <li className="nav-item">
        <Link to = "/staffnewslist" className="nav-link">News</Link>
      </li>
      <li className="nav-item">
        <Link to = "/allstudentlist" className="nav-link">Student List</Link>
      </li>

      
    </ul>
    
    <form className="form-inline my-2 my-lg-0">
      
      <button type="submit" style={{marginLeft:'650px'}}className="btn btn-outline-success my-2 my-sm-0"  onClick={(e)=>logout(e)}>Logout</button>
    </form>
  </div>
</nav>
        </Fragment>
        
    )
}