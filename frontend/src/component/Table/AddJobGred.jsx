import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function AddJobGred() {
  const navigate=useNavigate()
  const init = {
    jbgr_id: "",
    jbgr_totalnol: "",
    jbgr_nocl: "",
    jbgr_nosl: "",
    jbgr_nool: ""
  }
  const [input, setInput] = useState(init)


  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })

  }


  function handlPost() {
    fetch("http://localhost:5028/JobGradeLevel/V1/AddJobGradeWiseLeaves", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        jbgr_id: input?.jbgr_id,
        jbgr_totalnol: input?.jbgr_totalnol,
        jbgr_nosl: input?.jbgr_nosl,
        eofr_reportingdate: input?.eofr_reportingdate,
        jbgr_nool: input?.jbgr_nool


      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          alert(" Added Successfully")
          navigate("/jobGrade")
        }
        else{
          alert("something went wrong")
        }
      });






  }
  const handleBack=()=>{
    navigate("/offerLetter");

  }
  return (
   
    <Box sx={{width:"60%",margin:"auto",marginTop:"50px"}} >
      <Paper elevation={10} sx={{textAlign:"center",marginBottom:"20px"}}>
        <h1> ADD GRADE </h1>
      </Paper>
<Paper sx={{padding:"30px"}} elevation={3}>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="jbgr_id" label="ID" value={input?.jbgr_id} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth type="number"  name="jbgr_totalnol" label="Employee Offer ID" value={input?.jbgr_totalnol} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="jbgr_nocl" label="Offer Date" type="date" value={input?.jbgr_nocl} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="eofr_reportingdate" label="Reporting Date" type="date" value={input?.eofr_reportingdate} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth type="number"   name="jbgr_nosl" label="Offered Job" value={input?.jbgr_nosl} />
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.jbgr_nool}
          name="jbgr_nool"
        
          onChange={handleChange}
        >
          <MenuItem  value="ACT">Active</MenuItem>
          <MenuItem value="IACT">Inactive</MenuItem>
       
        </Select>
      </FormControl>
    </Box>
          {/* <TextField onChange={handleChange} name="jbgr_nool" label="jbgr_nool" value={input?.jbgr_nool} /> */}
        </Grid>
        <Grid item xs={6}>

        </Grid>
        <Grid item xs={12}>
<div style={{display:"flex",justifyContent:"space-between"}}>
        <Button variant="contained" onClick={handleBack}  >Back</Button>
        <Button variant="contained" onClick={handlPost}  >Submit</Button>

</div>
        </Grid>
      </Grid>
</Paper>

    </Box>
  
  )
}

export default AddJobGred

