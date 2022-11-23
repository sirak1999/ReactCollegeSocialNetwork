import React,{Fragment, useState, useEffect} from "react";
import axios from "axios";
import StaffHeader from "./StaffHeader";
export default function StudentList()
{

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
    return(
        <Fragment>
            <StaffHeader/>
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