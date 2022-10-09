import { Box, Button,  Grid, Paper, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function EmpApproved() {
  const [approvedLeavesData,setApprovedLeavesData]=useState([])
  const navigate=useNavigate()
  const init = {
    Employee_ID:"",
    // empl_id: "",
    // elrq_index: "",
    // elrq_date: "2022-09-30T09:01:57.304Z",
    // elrq_leavetype: "",
    // elrq_reason: "",
    // elrq_leavestdate: "",
    // elrq_leaveenddate: "",
    // elrq_approvedby: "",
    // elrq_approvedremarks: "",
    // elrq_aprvdleavestdate: "",
    // elrq_aprvdleaveenddate: ""

  }
  const [input, setInput] = useState(init)
console.log(input?.Employee_ID)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })

  }
console.log(approvedLeavesData,"approvedLeavesData")
// function getApprovesLeaves(){
useEffect(()=>{

  axios.post(`http://localhost:5028/EmpLeaveRequest/V1/EmployeeApprovedLeaves?Employee_ID=${input?.Employee_ID}`)
  .then((res)=>setApprovedLeavesData(res?.data))
},[input])
// }

  // function handlPost() {
  //   fetch("http://localhost:5028/EmployeeOfferLetterControllerr/V1/AddEmployeeOfferLetter", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       empl_id: input?.empl_id,
  //       elrq_index: input?.elrq_index,
  //       elrq_leavetype: input?.elrq_leavetype,
  //       eofr_reportingdate: input?.eofr_reportingdate,
  //       elrq_reason: input?.elrq_reason,
  //       elrq_leavestdate: input?.elrq_leavestdate,
  //       elrq_leaveenddate: input?.elrq_leaveenddate,
  //       elrq_approvedby: input?.elrq_approvedby,
  //       elrq_approvedremarks: input?.elrq_approvedremarks,
  //       elrq_aprvdleavestdate: input?.elrq_aprvdleavestdate,
  //       elrq_aprvdleaveenddate:input?.elrq_aprvdleaveenddate

  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if(data){
  //         alert(" Added Successfully")
  //         navigate("/employee")
  //       }
  //       else{
  //         alert("something went wrong")
  //       }
  //     });






  // }
  const handleBack=()=>{
    navigate("/employee");

  }
  return (
   
    <Box sx={{width:"98%",margin:"auto",marginTop:"50px",padding:"20px"}} >
      <Paper elevation={10} sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",backgroundColor:"#1976d2",color:"white",marginBottom:"20px" }}>
        <h3> Leave Approved By HR </h3>
      </Paper>
<Paper sx={{padding:"10px",marginBottom:"20px"}} elevation={3}>

      <Grid container spacing={2} sx={{width:"50%",margin:"auto"}}>
        <Grid item xs={6}>
<Button onClick={handleBack} variant='contained'>BACK</Button>
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={handleChange} fullWidth name="Employee_ID" label="ID" type="number" value={input?.Employee_ID} />
        </Grid>
        
        </Grid>



{/* <JobGradeDialogueBox open={open} handleClose={handleClose} singleData={singleData} /> */}


      
</Paper>
<TableContainer component={Paper}>
  {/* <Link to="/addJobGred"  style={{ textDecoration: "none" }}>
        <Button sx={{ marginBottom: "10px", width: "70px", marginLeft: " 5px" }}
         variant="contained" elevation={10}> ADD </Button>
         </Link> */}
  <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
    <TableHead>
      <TableRow >
        <StyledTableCell align="center"> ID</StyledTableCell>
        <StyledTableCell align="center">Date </StyledTableCell>
        <StyledTableCell align="center">Leave Type</StyledTableCell>
        <StyledTableCell align="center">Reason </StyledTableCell>
        <StyledTableCell align="center">Start Date</StyledTableCell>
        <StyledTableCell align="center">End Date</StyledTableCell>
        <StyledTableCell align="center">Approved By</StyledTableCell>
        <StyledTableCell align="center">Approved Remarks</StyledTableCell>
        <StyledTableCell align="center">Approved Leave Start Date</StyledTableCell>
        <StyledTableCell align="center">Approved Leave End Date</StyledTableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      {approvedLeavesData?.map((row) => (
        <StyledTableRow  key={row.empl_id}>
          <StyledTableCell align="center" component="th" scope="row" >
            {row.empl_id}
          </StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">
            {row.elrq_date}
          </StyledTableCell>
          <StyledTableCell align="center">{row.elrq_leavetype}</StyledTableCell>
          <StyledTableCell align="center">{row.elrq_reason}</StyledTableCell>
          <StyledTableCell align="center">{row.elrq_leavestdate}</StyledTableCell>
          <StyledTableCell align="center">{row.elrq_leaveenddate}</StyledTableCell>
          <StyledTableCell align="center">{row.elrq_approvedby}</StyledTableCell>
          <StyledTableCell align="center">{row.elrq_approvedremarks}</StyledTableCell>
          <StyledTableCell align="center">{row.elrq_aprvdleavestdate}</StyledTableCell>
          <StyledTableCell align="center">{row.elrq_aprvdleaveenddate}</StyledTableCell>
          

        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    </Box>
  
  )
}

export default EmpApproved

