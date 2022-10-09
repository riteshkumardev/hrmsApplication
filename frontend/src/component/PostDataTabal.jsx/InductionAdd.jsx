import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function InductionAdd() {
  const navigate=useNavigate()
  const init = {
    indc_id: "",
    indc_emof_id: "",
    indc_date: "2022-09-30T09:01:57.304Z",
    indc_processed_ausr_id: "",
    indc_status: ""
  }
  const [input, setInput] = useState(init)


  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })

  }


  function handlPost() {
    fetch("http://localhost:5028/Induction/V1/AddInduction", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        indc_id: input?.indc_id,
        indc_emof_id: input?.indc_emof_id,
        indc_date: input?.indc_date,
        indc_processed_ausr_id: input?.indc_processed_ausr_id,
        indc_status: input?.indc_status


      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          alert("Induction Added Successfully")
          navigate("/Induction")
        }
        else{
          alert("something went wrong")
        }
      });






  }
  const handleBack=()=>{
    navigate("/Induction")

  }
  return (
   
    <Box sx={{width:"60%",margin:"auto",marginTop:"50px"}} >
      <Paper elevation={10} sx={{padding:"10px",textAlign:"center",marginBottom:"20px",fontSize:"25px"}}>
        Add Induction
      </Paper>
<Paper sx={{padding:"30px"}} elevation={3}>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="indc_id" label="ID" value={input?.indc_id} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="indc_emof_id" label="Employee Offer ID" value={input?.indc_emof_id} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth type="date" name="indc_date" label="Date" value={input?.indc_date} />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="indc_processed_ausr_id" label="Processsed User ID" value={input?.indc_processed_ausr_id} />
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.indc_status}
          name="indc_status"
        
          onChange={handleChange}
        >
          <MenuItem  value="ACT">Active</MenuItem>
          <MenuItem value="IACT">Inactive</MenuItem>
       
        </Select>
      </FormControl>
    </Box>
          {/* <TextField onChange={handleChange} name="indc_status" label="indc_status" value={input?.indc_status} /> */}
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

export default InductionAdd