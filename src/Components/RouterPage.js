import react from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import ArticleList from "./ArticleList";
import Login from "./Login";
import Registration from "./Registration";
import RegistrationList from "./RegistrationList";
import StudentDashboard from "./StudentDashboard";
import News from "./News";
import Staff from "./Staff";
import StudentArticle from "./StudentArticle";

import StudentNews from "./StudentNews";
import StaffNews from "./StaffNews";
import StaffLogin from "./StaffLogin";
import StaffDashboard from "./StaffDashboard";
import StaffEvent from "./StaffEvent";
import AddStudent from "./AddStudent";
import OfficerDashboard from "./OfficerDashboard";
import OfficerLogin from "./OfficerLogin";
import OfficerArticle from "./OfficerArticle";
import StudentList from "./StudentList";
export default function RouterPage()
{
    return (
        <Router>
            <Routes>
                {/* <Route path="/" exact component={Login}/>
                <Route path="/registration" component={Registration}/> */}
                <Route path='/' exact element ={ <Login />} />
                <Route path='/registration' element ={<Registration />} />
                <Route path='/studentdashboard' element ={<StudentDashboard/>} />
                <Route path='/admindashboard' element ={<AdminDashboard/>} />
                <Route path='/registrationlist' element ={<RegistrationList/>} />
                <Route path='/articlelist' element ={<ArticleList/>} />
                <Route path='/newslist' element ={<News/>} />
                <Route path='/stafflist' element ={<Staff/>} />
                <Route path='/articleslist' element ={<StudentArticle/>} />
                <Route path='/studentnewslist' element ={<StudentNews/>} />
                <Route path='/staffnewslist' element ={<StaffNews/>} />
                <Route path='/stafflogin' element ={<StaffLogin/>} />
                <Route path='/staffdashboard' element ={<StaffDashboard/>} />
                <Route path='/staffevent' element ={<StaffEvent/>} />
                <Route path='/studentlist' element ={<AddStudent/>} />
                <Route path='/officerdashboard' element ={<OfficerDashboard/>} />
                <Route path='/officerlogin' element ={<OfficerLogin/>} />
                <Route path='/officerarticlelist' element ={<OfficerArticle/>} />
                <Route path='/allstudentlist'element={<StudentList/>}/>
                {/* <Route element={<ProtectedRoutes auth={isAuth}/>}> */}
               
               
               {/* <Route path='/approvedarticleslist' element ={<ApprovedArticleList/>} /> */}
               
            </Routes>
        </Router>
    )
}