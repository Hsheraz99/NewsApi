import React from "react";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Login from "../config/components/login"
import dashboard from "../config/components/dashboard"
import SMinput from "./component/input";

export default function AppRouter(){
    return(
     <Router>
     <Routes>
      <Route path="/*" element={<dashboard />}/>
      <Route path="login" element={<Login />} />
     </Routes>



     </Router>
   
   
   
   
);
}