import {Box}  from "@mui/system";
import SMInput from "../config/components/input";
import {useNavigate} from "react-router-dom"
import {SMButton} from "./config/components/button"



function Login(){
    const navigate=useNavigate()
    const loginUser=()=>{
        console.log("User Click Login")
        navigate("/"{
            state:{user:true}

        }
        )
    };
    return (
     <>
    
    <Box>
<Box sx={{padding:1}}>
    <SMInput  label ="Email" type="email"/>
</Box>
 <Box sx={{padding:1}}>
     <SMInput  label ="password" type="password"/>
    </Box>
    <Box sx={{padding:1}}>
     <SMInput  label ="password" type="password"/>
    </Box>

    </Box>
    <SMButton click={loginUser} label='Login'/>
    
    </>
    )
}
export default Login;