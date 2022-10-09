import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, MenuItem, Paper, Select, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';

export default function RequestLeave() {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/employee")
    }




  //initial state
  const init = {
    id:"",
    leaveType:"",
    reason: "",
    startDate: "",
    endDate: "",
    


  }

  //if status =>from redux is true then add redux stored data in input otherwise add initial state from above
  const [input, setInput] = React.useState( init)


  const handleChange = (e) => {
    const { name, value } = e.target

    
    

    setInput({ ...input, [name]: value })
   
  


  }
  //function to add data
  const handleSubmit = () => {
    const { 

        id,
        leaveType,
        reason,
        startDate,
        endDate,
       
      } = input

//api to post data(add new data)
    axios.post("http://localhost:5028/EmpLeaveRequest/V1/ApplyLeaveRequest", {

        id,
        leaveType,
        reason,
        startDate,
        endDate,
        
    })
    .then((res) => {

      if (res.status === 200) {
        
        // setFormStatus(false)
        alert(res?.data)
        console.log(res)
        navigate("/Leaves")

      }else{
        alert("some error is there!")
      }


    })

  }


    return (
        <div  >
            <Paper sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",backgroundColor:"#1976d2",color:"white" }} elevation={5}>
                <h3>LEAVES RQUEST </h3>

            </Paper >
            <Box >
                <Paper elavation={3}   sx={{width:"100%", margin:"auto",marginTop:"50px"}}>

                    <Grid container spacing={2} sx={{width:"95%", margin:"auto"}}>
                        <Grid item xs={6}>
                            <TextField
fullWidth
                                label="ID"
                                name="id"
                                value={input.id}
                                onChange={handleChange}
                            />

                        </Grid>
                    
                        <Grid item xs={6}>
                            <TextField
                               fullWidth
                                label="Reason"
                                name="reason"
                                value={input.reason}
                                onChange={handleChange}

                            />

                        </Grid>
                     
                        <Grid item xs={6}>
                            <FormControl sx={{ width:"100%" }}>
                                <InputLabel id="demo-simple-select-autowidth-label">Type of Leave</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={input?.leaveType}
                                    name="leaveType"
                                    onChange={handleChange}
                                    autoWidth
                                    label="leaves"
                                >
                                    
                                    <MenuItem value={"CASL"}>Causal</MenuItem>
                                    <MenuItem value={"SICK"}>Sick</MenuItem>
                                    <MenuItem value={"MEDI"}>Medical</MenuItem>
                                    <MenuItem value="OTHR">
                                        <em>Other</em>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                label="Start Date"
                                type="date"
                                name="startDate"
                                value={input.startDate}
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                       fullWidth                     
name="endDate"
value={input.endDate}
                                label="End Date"
                                type="date"
                                onChange={handleChange}

                            />
                        </Grid>
                      
                    </Grid>

                    

                    <div style={{ width:"90%",margin:"auto", display: "flex", justifyContent: "space-between", padding: "5px" }}>

                        <Button onClick={handleBack} variant="contained">Back</Button>
                        <Button onClick={handleSubmit} variant="contained">Submit</Button>
                    </div>

                </Paper>

            </Box>
        </div>

    );
}
