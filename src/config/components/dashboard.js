import React from 'react'
import {Box}  from "@mui/system";
import {Typography} from "@mui/material";
import {useEffect} from 'react'
import {useNavigate} from "react-router-dom";

function  Dashboard(){
    const [user,setUser]=useState(false)
    const navigate=useNavigate();
    const location=useLocation();

    let obj={}

    useEffect(()=>{
       if(location.state && location.state.user){
        
         navigate("/")
        }
        else{
            navigate("/login")
        }
    },[]) 
    return(
    <>
    <Box>
      <Mainlayout />
    </Box>
    </>
    )
} 
export default Dashboard;