import React,{Fragment, useState, useEffect} from "react";
import axios from "axios";
import OfficerHeader from "./OfficerHeader";

export default function AddStudent()
{
    const[names,setName]=useState('');
    const[roll,setRollNumber]=useState('');
    const[dept,setDepartment]=useState('');
    const[mark,setMarks]=useState('');
    const[bklog,setBacklog]=useState('');
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        getData();

    },[]);

   const getData=()=>{
        const url = 'http://localhost:57575/api/Student/StudentList';
        axios.get(url)
        .then((result)=>{const data=result.data;
        if(data.statusCode===200){
            
            setData(data.listStudents);
            console.log(data);
        }
    })
    .catch((error)=>{
        console.log(error);
    });
    }

    const handleSave = (e)=>{
        e.preventDefault();
        const data={
            Name:names,
            RollNumber:roll,
            Department:dept,
            Marks:mark,
            Backlog:bklog
        }
        console.log("HI");
        const url='http://localhost:57575/api/Student/StudentAddition';
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
                console.log("hi");
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
        setDepartment(' ');
        setRollNumber(' ');
        setMarks(' ');
        setBacklog('');
    }
    return(
        <Fragment>
            <OfficerHeader/>
            <br></br>
            <form>
                <div className="form-row" style={{width:"80%",backgroundColor:"white", margin:"auto"}}>
                    <div className="form-group col-md-12">
                        <h3>Add / View Students</h3>
                    </div>
                    <div className="form-group col-md-12">
                    <input type="text"  className="form-control "
                    required
                      placeholder="Enter Student Name"
                      onChange={(e)=> setName(e.target.value)}
                      value={names} />

                </div>
                <br></br>
                <div className="form-group col-md-12">
                    <input type="text"  className="form-control "
                    required
                      placeholder="Enter Student Roll Number"
                      onChange={(e)=> setRollNumber(e.target.value)}
                      value={roll} />

                </div>
                <br></br>
                <div className="form-group col-md-12">
                    <input type="text"  className="form-control "
                    required
                      placeholder="Enter Student Department"
                      onChange={(e)=> setDepartment(e.target.value)}
                      value={dept} />

                </div>
                <br></br>
                <div className="form-group col-md-12">
                    <input type="text"  className="form-control "
                    required
                      placeholder="Enter Student Marks"
                      onChange={(e)=> setMarks(e.target.value)}
                      value={mark} />

                </div>
                <br></br>
                <div className="form-group col-md-12">
                    <input type="text"  className="form-control "
                    required
                      placeholder="Enter Student Backlog"
                      onChange={(e)=> setBacklog(e.target.value)}
                      value={bklog} />

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
                                              <th scope="col">Roll Number</th>
                                              <th scope="col">Department</th>
                                              <th scope="col">Marks</th>
                                              <th scope="col">Backlog</th>

                                             
                            		</tr>
                                      </thead>
                                     <tbody>
                                     {
                                data.map((val,index)=>{
                                    return(
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                                      <td>{val.name}</td>
                                                      <td>{val.rollNumber}</td>    
                                                      <td>{val.department}</td>    
                                                      <td>{val.marks}</td>    
                                                      <td>{val.backlog}</td>    
                                                     
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