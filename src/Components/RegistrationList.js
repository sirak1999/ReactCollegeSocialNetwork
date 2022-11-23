import React,{Fragment, useState, useEffect} from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";

export default function RegistrationList()
{
    const [data, setData]=useState([]);
    useEffect(()=>{
        getData();

    },[]);
    const getData= () => {
        const url ='http://localhost:57575/api/Registration/RegistrationList';
        // const data ={
        //     UserType:'USER'
        // }
        axios.get(url)
        .then((result)=>{const data=result.data
        if(data.statusCode===200)
    {
        setData(data.listRegistration);
        console.log(data);
    }})
    .catch((error)=>{
        console.log(error);
    });

    }
    const handleApprove = (e,id)=>{
        e.preventDefault();
        const data ={
            Id:id
        };
        const url = 'http://localhost:57575/api/Registration/UserApprove';
        axios
        .post(url, data)
        .then((result)=>{
            const data = result.data;
            if(data.statusCode===200){
                alert('Approved')
                getData();
            }
            })
        .catch((error)=>{
        console.log(error);
         });
            
    }

    return(
        <Fragment>
            <AdminHeader/>
            {data ? (
                    <section className="intro">
                    <div className="bg-image h-100" style={{backgroundColor: "#f5f7fa"}}>
                      <div className="mask d-flex align-items-center h-100">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-12">
                              <div className="card">
                                <div className="card-body p-0">
                                  <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "700px"}}>
                                    <table className="table table-striped mb-0">
                                      <thead style={{backgroundColor: "#ADD8E6"}}>
                                        <tr>
                                                 <th scope="col">##</th>
                                              <th scope="col">Name</th>
                                              <th scope="col">Email</th>
                                              <th scope="col">Phone Number</th>
                                              <th scope="col">Is Approve</th>
                                              <th scope="col">Action</th>
                                             
                                        </tr>
                                      </thead>
                                     <tbody>
                                          {
                                              data.map((val,index)=>{
                                                  return (
                                                      <tr>
                                                      <th scope="row">{index+1}</th>
                                                      <td>{val.name}</td>
                                                      <td>{val.email}</td>    
                                                      <td>{val.phoneNo}</td>    
                                                      {/* <td>{val.image}</td>     */}
                                                      <td>{val.isApproved}</td> 
                                                      <td>
                                                         {val.isApproved===0 ? 
                                                         <button className="btn btn-primary" onClick={(e)=>handleApprove(e,val.id)}>
                                                          Mark Approved
                                                         </button>
                                                         :
                                                         "Already Approved"
                                                         }
                  
                                                          </td>        
                                                      </tr>
                                                  )
                                              })
                                          }
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                ):(
                    "No Data Found"
                )
                
             
            }
         
        </Fragment>

    )
}
