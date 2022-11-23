
import Registration from "./Components/Registration";
import './Components/Registration.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

//import './Components/Login.css';
import RouterPage from "./Components/RouterPage";
function App() {
  return (

    <div className="App">
      <RouterPage/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Registration/>} />
          <Route path='/login' element ={<Login/>} />
         

         </Routes>
        
        </BrowserRouter> */}
    </div>
  );
}

export default App;
