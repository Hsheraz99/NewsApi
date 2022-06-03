import React from "react"
import {Box}  from "@mui/system"
import {Typography} from "@mui/material";

function News (){
    const getNews=()=>{ 
    let Api     "https://newsapi.org/v2/everything?q=tesla&from=2022-05-02&sortBy=publishedAt&apiKey=e6912427937442a39fb218c6b3a34fa6"
     axios.get(api).then((success)=>{
         console.log(success);
     })
    
    .catch((err)=>{
      console.log(err)
    })
    useEffect (()=>{

    },[])
    

    return(
        <Box>
            <Typography>NEWS</Typography>
        </Box>
    )
}
export default News;