import { Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { EmployeeCharts } from '../charts/EmployeeCharts'
import { LeavesGraph } from '../charts/LeavesGraph'
import EmployeesSidebar from '../EmployeesSidebar/EmployeesSidebar'

function EmployeeDashboard() {
const [holiday,setHoliday] =useState(0)
const [leave,setLeave] =useState(0)
    useEffect(() => {
        axios.get("http://localhost:5028/Holyday/V1/AllHolydays")
          .then((res) => setHoliday(res?.data?.length))
      }, [])

      useEffect(() => {
        axios.get("http://localhost:5028/EmpLeaveRequest/V1/AllEmployeeApprovedLeaves")
          .then((res) => setLeave(res?.data?.length))
      }, [])
    return (
        <Paper sx={{width:"100%", marginTop: "10px",display:"flex",justifyContent:"space-between" }} >

            <Paper elevation={3}>
                <EmployeesSidebar/>
            </Paper>
            <div style={{width:"100%",marginLeft:"50px"}} >

            <Paper sx={{ textAlign: "center", padding: "10px", backgroundColor: "#1976d2", color: "white" }}>Employee Dashboard</Paper>

            <Grid sx={{ textAlign: "center", padding: "50px" }} container spacing={2}>
                <Grid item xs={4}>

                    <Paper sx={{ paddingBottom: "10px" }} elevation={10} >
                        <Typography sx={{ marginTop: "20px" }}>No of leaves </Typography>
                        <Typography sx={{ marginBottom: "20px", color: "red", fontWeight: 100 }}>Current Month</Typography>
                        <h1 style={{ width: "40px", height: "40px", marginBottom: "10px", borderRadius: "50%", backgroundColor: "blue", color: "white", textAlign: "center", margin: "auto" }}>{leave}</h1>


                    </Paper>
                </Grid>
                <Grid item xs={4}>

                    <Paper sx={{ paddingBottom: "10px" }} elevation={10} >
                        <Typography sx={{ marginTop: "20px" }}>Average Punching</Typography>
                        <Typography sx={{ marginBottom: "20px", color: "red", fontWeight: 100 }}>Since Joining</Typography>
                        <h1 style={{ width: "40px", height: "40px", marginBottom: "10px", borderRadius: "50%", backgroundColor: "blue", color: "white", textAlign: "center", margin: "auto" }}>5</h1>


                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ paddingBottom: "10px" }} elevation={10} >
                        <Typography sx={{ marginTop: "20px" }}>Avreage </Typography>
                        <Typography sx={{ marginBottom: "20px", color: "red", fontWeight: 100 }}>Punchout</Typography>
                        <h1 style={{ width: "40px", height: "40px", marginBottom: "10px", borderRadius: "50%", backgroundColor: "blue", color: "white", textAlign: "center", margin: "auto" }}>10</h1>


                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ paddingBottom: "10px" }} elevation={10} >
                        <Typography sx={{ marginTop: "20px" }}>No of Holiday</Typography>
                        <Typography sx={{ marginBottom: "20px", color: "red", fontWeight: 100 }}>Current Month</Typography>
                        <h1 style={{ width: "40px", height: "40px", marginBottom: "10px", borderRadius: "50%", backgroundColor: "blue", color: "white", textAlign: "center", margin: "auto" }}>{holiday}</h1>


                    </Paper>
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={10}>

                        <EmployeeCharts />
                    </Paper>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={10}>

                        <LeavesGraph />
                    </Paper>


                </Grid>
            </Grid>
            </div>


        </Paper>
    )
}

export default EmployeeDashboard
