import { Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PeopleIcon from '@mui/icons-material/People';
import DomainIcon from '@mui/icons-material/Domain';
function Body() {

    const [employeeCount,setEmployeeCount]=useState([])
    const [holidayCount,setHolidayCount]=useState([])

    useEffect(()=>{
      axios.get("http://localhost:5028/api/EmployeeControllerv2/V2/AllEmployees")
      .then((res) => {
        setEmployeeCount(res?.data)
        
      })
    },[])
    useEffect(()=>{
        axios.get("http://localhost:5028/Holyday/V1/AllHolydays")
        .then((res)=>setHolidayCount(res.data))
    },[])
  return (
    <div  style={{display:"flex",width:"40%",justifyContent:"space-between",margin:"auto",marginTop:"50px"}}>
      <Paper sx={{width:"200px",textAlign:"center"}} elevation={10}>
        <Link to="/admin/employeeData" style={{textDecoration:"none"}}>
            <PeopleIcon sx={{marginTop:"10px"}}/>
        <Typography >
            
        Employee
        </Typography>
        <p style={{width:"40px",marginLeft:"85px",height:"30px",paddingTop:"10px",borderRadius:"50%" ,border:"1px solid green",textAlign:"center",backgroundColor:"blue",color:"white",textDecoration:"none"}}>{employeeCount?.length}</p>
        </Link>
      </Paper >
      <Paper sx={{width:"200px",textAlign:"center"}} elevation={10}>
        <Link to="/holiday" style={{textDecoration:"none"}}>
            <DomainIcon sx={{marginTop:"10px"}}/>
        <Typography>
            
        Number Of Holidays
        </Typography>
        <p style={{width:"40px",marginLeft:"85px",height:"30px",paddingTop:"10px",borderRadius:"50%" ,border:"1px solid green",textAlign:"center",backgroundColor:"blue",color:"white",textDecoration:"none"}}>{holidayCount?.length}</p>
        </Link>
      </Paper >
      
    </div>
  )
}

export default Body
