import React,{Fragment, useState, useEffect} from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";

export default function ArticleList(){
    const [data, setData]=useState([]);
    const [role, setRole]=useState('');

    useEffect(()=> {
        getData();
        setRole(localStorage.getItem("username"));
    },[]);
    const getData=()=> {
        // const data ={
        //     type : "Page"
            

        // };
        // const request = {
        //   params: {
        //     type: "Page"
        //   }
        // }
        const url='http://localhost:57575/api/Article/ArticlesList';
        axios
        .get(url)
        .then((result)=>{
            const data = result.data;
            if(data.statusCode===200){
                setData(data.listArticles);
                //console.log(data);
                //console.log("hi");
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    const handleApprove = (e,id)=>{
        e.preventDefault();
        const data ={
            Id:id
        };
        
        const url = 'http://localhost:57575/api/Article/ArticleApprove';
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
    const handleDelete = (e,id)=>{
      e.preventDefault();
      const data ={
          Id:id
      };
      const url = 'http://localhost:57575/api/Article/deleteArticle';
        axios
        .post(url, data)
        .then((result)=>{
            const data = result.data;
            if(data.statusCode===200){
                alert('Deleted')
                getData();
            }
            })
        .catch((error)=>{
        console.log(error);
         });
        }
    return (
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
                                              <th scope="col">Title</th>
                                              <th scope="col">Content</th>
                                              <th scope="col">Email</th>
                                              <th scope="col">Image</th>
                                              <th scope="col">IsApproved</th>
                                              <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                     <tbody>
                                          {
                                              data.map((val,index)=>{
                                                  return (
                                                      <tr>
                                                      <th scope="row">{index+1}</th>
                                                      <td>{val.title}</td>
                                                      <td>{val.content}</td>    
                                                      <td>{val.email}</td>    
                                                      <td>{val.image}</td>    
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
                                                          <td>
                                                         {val.isApproved===0? 
                                                         <button className="btn btn-primary" onClick={(e)=>handleDelete(e,val.id)}>
                                                          Reject
                                                         </button>
                                                         :
                                                        ""
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
    );
    
}