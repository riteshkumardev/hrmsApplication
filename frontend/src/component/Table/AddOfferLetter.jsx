import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function AddOfferLetter() {
  const navigate=useNavigate()
  const init = {
    eofr_ref_id: "",
    eofr_cand_id: "",
    eofr_offerdat: "2022-09-30T09:01:57.304Z",
    eofr_offeredjob: "",
    eofr_status: ""
  }
  const [input, setInput] = useState(init)


  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })

  }


  function handlPost() {
    fetch("http://localhost:5028/EmployeeOfferLetterControllerr/V1/AddEmployeeOfferLetter", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        eofr_ref_id: input?.eofr_ref_id,
        eofr_cand_id: input?.eofr_cand_id,
        eofr_offeredjob: input?.eofr_offeredjob,
        eofr_reportingdate: input?.eofr_reportingdate,
        eofr_status: input?.eofr_status


      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          alert("Offer Letter Added Successfully")
          navigate("/offerLetter")
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
        <h1> ADD OFFER LETTER</h1>
      </Paper>
<Paper sx={{padding:"30px"}} elevation={3}>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="eofr_ref_id" label="ID" value={input?.eofr_ref_id} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="eofr_cand_id" label="Employee Offer ID" value={input?.eofr_cand_id} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="eofr_offerdat" label="Offer Date" type="date" value={input?.eofr_offerdat} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="eofr_reportingdate" label="Reporting Date" type="date" value={input?.eofr_reportingdate} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth  name="eofr_offeredjob" label="Offered Job" value={input?.eofr_offeredjob} />
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.eofr_status}
          name="eofr_status"
        
          onChange={handleChange}
        >
          <MenuItem  value="ACT">Active</MenuItem>
          <MenuItem value="IACT">Inactive</MenuItem>
       
        </Select>
      </FormControl>
    </Box>
          {/* <TextField onChange={handleChange} name="eofr_status" label="eofr_status" value={input?.eofr_status} /> */}
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

export default AddOfferLetter

