import React,{Fragment, useState, useEffect} from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";

export default function News()
{
    const [name,setName]=useState();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        getData();

    },[]);

   const getData=()=>{
        const url = 'http://localhost:57575/api/Registration/staffFetching';
        // const data={
        //     Usertype:'STAFF'
        // }
        axios.get(url)
        .then((result)=>{const data=result.data;
        if(data.statusCode===200){
            setData(data.listStaff);
        }
    })
    .catch((error)=>{
        console.log(error);
    });
    }

    const handleSave = (e)=>{
        e.preventDefault();
        const data={
            Name:name,
            Email:email,
           Password:password
        };
        const url='http://localhost:57575/api/Registration/staffRegistration';
        axios
        .post(url,data)
        .then((result)=>{
            const dt=result.data;
            if(dt.statusCode===200){
                getData();
                Clear();
                alert(dt.statusMsg);
            }
            else{
                alert(dt.statusMsg);
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    const Clear=(e)=>{
        e.preventDefault();
        setName(' ');
        setEmail(' ');
        setPassword('');
    }
    const handleDelete = (e,id)=>{
      e.preventDefault();
      const data ={
          Id:id
      };
      const url = 'http://localhost:57575/api/Registration/deleteStaff';
        axios
        .post(url, data)
        .then((result)=>{
            const data = result.data;
            if(data.statusCode===200){
                alert('Staff Removed by Admin')
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
            <br></br>
            <form>
              
                <div className="form-row" style={{width:"80%",backgroundColor:"white", margin:"auto"}}>
                    <div className="form-group col-md-12">
                        <h3>Add Staff</h3>
                    </div>
                    <div className="form-group col-md-6">
                    <input type="text"  className="form-control "
                    required
                      placeholder="Enter The Name"
                      onChange={(e)=> setName(e.target.value)}
                      value={name} />

                </div>
                <br></br>
                <div className="form-group col-md-6">
                    <input type="text"  className="form-control "
                    required
                      placeholder="Enter The Email"
                      onChange={(e)=> setEmail(e.target.value)}
                      value={email} />

                </div>
                <br></br>
                <div className="form-group col-md-6">
                    <input type="Password"  className="form-control "
                    required
                      placeholder="Enter Strong Password"
                      onChange={(e)=> setPassword(e.target.value)}
                      value={password} />

                </div>
                <br></br>
                <div className="form-group col-md-12">
                    <button className="btn btn-primary" style={{width:"150px", float:"Left"}}
                    onClick={(e)=>handleSave(e)} >Save</button>
                    {" "}
                    
                    <button className="btn btn-danger" style={{width:"150px", marginLeft:"15px"}}
                    onClick={Clear} 
                    >Reset</button>
                </div>
                </div>
                
            </form>
            <br></br>
            {
                
                 data ? (
                    // <table className="table stripped table-hover mt-4"
                    // style={{backgroundColor:"white", width : "80%", margin : "0 auto"}}>
                    //     <thread className="thread-dark">
                    //         <tr>
                    //                           <th scope="col">##</th>
                    //                           <th scope="col">Title</th>
                    //                           <th scope="col">Content</th>
                    //                           <th scope="col">Created On</th>
                    //                           <th scope="col">Image</th>
                    //         </tr>
                    //     </thread>
                    //     <tbody>
                    //         {
                    //             data.map((val,index)=>{
                    //                 return(
                    //                     <tr>
                    //                         <th scope="row">{index+1}</th>
                    //                                   <td>{val.tittle}</td>
                    //                                   <td>{val.content}</td>    
                    //                                   <td>{val.createOn}</td>    
                                                     
                    //                     </tr>
                    //                 )
                    //             })
                    //         }
                    //     </tbody>
                    // </table>
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
                                              
                            		</tr>
                                      </thead>
                                     <tbody>
                                     {
                                data.map((val,index)=>{
                                    return(
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                                      <td>{val.name}</td>
                                                      <td>{val.email}</td>  
                                                      <td><button className="btn btn-primary" onClick={(e)=>handleDelete(e,val.id)}>
                                                          Remove
                                                         </button></td>  
                                                    
                                                     
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

                ) :(
                    "No Data Found"
                )
            }

        </Fragment>
    );
    
}