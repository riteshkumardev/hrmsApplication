import { Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { changeStatusOfEmployeeForm } from '../redux/action'
function AddOptedLeaves() {
  const data = useSelector((state) => state?.holidayData?.holidayData?.data)
  const status = useSelector((state) => state?.holidayData?.edit)
  const[formStatus,setFormStatus]=useState(false)
  // console.log(status)
  const navigate = useNavigate()
  const dispatch=useDispatch()

  //initial state
  const init = {
    empl_id:"",
    year_id:"",
    eolv_date: "",
    eolv_leavetype: "",
    
  }

  //if status =>from redux is true then add redux stored data in input otherwise add initial state from above
  const [input, setInput] = useState( init)


  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })

  }
  //function to add data
  const handleSubmit = () => {
    const { 
      year_id,
      eolv_date,
      empl_id,
      eolv_leavetype,
    } = input

//api to post data(add new data)
    axios.post("http://localhost:5028/EmpOptedLeaves/V1/AddEmployeeOptedLeave", {
year_id,
empl_id,
      eolv_leavetype,
     
      eolv_date,
     
    })
    .then((res) => {

      if (res.status === 200) {
        
        setFormStatus(false)
        alert("Added successfully")
        navigate("/employee/employeeLeaves/optedLeave")

      }else{
        alert("some error is there!")
      }


    })

  }

 
  function handleBack(){
    navigate("/employee/employeeLeaves/optedLeave")

  }
  return (
    <div>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField  onChange={handleChange}  name="year_id" label="Year" value={input.year_id} />
          </Grid>
          <Grid item xs={4}>
            <TextField  onChange={handleChange} type="date" name="eolv_date" label="Date" value={input.eolv_date} />
          </Grid>
          <Grid item xs={4}>
            <TextField  onChange={handleChange} name="empl_id" label="ID" value={input.empl_id} />
          </Grid>
          <Grid item xs={4}>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.eolv_leavetype}
          name="eolv_leavetype"
          onChange={handleChange}
        >
          <MenuItem  value="SICK">SICK</MenuItem>
          <MenuItem value="CASL">CASUAL</MenuItem>
          <MenuItem value="East">EAST</MenuItem>
       
        </Select>
      </FormControl>
    </Box>
          </Grid>
         
        </Grid>
      </form>
     <Button variant="contained" onClick={handleSubmit}>ADD</Button>
      <Button sx={{marginLeft:"20px"}} variant="contained" onClick={handleBack}>Back</Button>
    </div>
  )
}

export default AddOptedLeaves
