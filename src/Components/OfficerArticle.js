import React,{Fragment, useState, useEffect} from "react";
import axios from "axios";

import OfficerHeader from "./OfficerHeader";

export default function OfficerArticle(){
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [file,setFile]=useState("");
    const [filename,setFileName]=useState("");
    const [data,setData]=useState([]);

    const SaveFile=(e)=> {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    useEffect(()=>{
        getData();

    },[]);
    const getData=()=>{
        const data={
            type:"User",
            Email:localStorage.getItem("loggedEmail"),
        };
        const url='http://localhost:57575/api/Article/OfficerArticlesList';
        axios
        .get(url)
        .then((result)=>{
                 const data = result.data;
                    if(data.statusCode===200){
                           setData(data.listArticles);
                       
                    }
                
                
                    
           
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    const uploadFile= async (e)=>{
        debugger;
        e.preventDefault();
        const data = {
            Title:title,
            Content:content,
            Email:localStorage.getItem("loggedEmail"),
            Image:filename,
        };
        // const formdata = new FormData();
        // formdata.append("FormFile",file);
        // formdata.append("FileName",filename);
        // try{
        //     const res=await axios.post(
        //         'http://localhost:57575/api/Registration/UploadFile',
        //         formdata

        //     );
        //     console.log(res)
        //     if(
        //         res.data.statusCode===200 && res.data.statusMsg==='File uploaded'

        //     )
            {
                const res= await axios.post(
                    'http://localhost:57575/api/Article/AddArticles',data
                );
                if(res.data.statusCode===200)
                {
                    
                    //getData();
                    Clear(e);
                    alert ("Article details sent for approval");
                }
                else
                {
                    alert (res.data.statusMsg)
                }

               
            }
        // }catch(ex) {
        //     console.log(ex);
        // }
    };
    const Clear=(e)=>{
        e.preventDefault();
        setTitle("");
        setContent("");
        setFile("");
        setFileName("");
    };
    return(
        <Fragment>
            <OfficerHeader/>
            <br></br>
            <form>
            <div className="form-row" style={{width:"80%",backgroundColor:"white", margin:"auto"}}>
                    <div className="form-group col-md-12">
                        <h3>Add New Articles</h3>
                    </div>
                    <div className="form-group col-md-12">
                    <input type="text"  className="form-control "
                    required
                      placeholder="Enter Title"
                      onChange={(e)=> setTitle(e.target.value)}
                      value={title} />

                </div>
                <div className="form-group col-md-12">
                    <input type="file"  className="form-control "
                    required
                      placeholder="Select Image"
                      onChange={(e)=> SaveFile(e.target.value)}
                     />
                     </div>
                     <br></br>
                <div className="form-group col-md-12">
                    <textarea className="form-control" id="validationtTextarea"
                    placeholder="Enter the content"
                    rows={5}
                    onChange={(e)=>setContent(e.target.value)} required
                    value = {content}></textarea>
                </div>
                <br></br>
                <div className="form-group col-md-12">
                    <button className="btn btn-primary" style={{width:"150px", float:"Left"}}
                    onClick={(e)=>uploadFile(e)} >Save</button>
                    {" "}
                    
                    <button className="btn btn-danger" style={{width:"150px", marginLeft:"15px"}}
                    onClick={Clear} 
                    >Reset</button>
                </div>
                </div>
            </form>
            <br></br>
            {
                data?(
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
                                              <th scope="col">Status</th>
                            		</tr>
                                      </thead>
                                     <tbody>
                                     {
                                data.map((val,index)=>{
                                    return(
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                                      <td>{val.title}</td>
                                                      <td>{val.content}</td>    
                                                      <td>{val.email}</td>
                                                      <td>{val.image}</td>
                                                      <td>{val.isApproved}</td> 
                                                      <td>{val.Status}</td> 
                                                     
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

    )
    }