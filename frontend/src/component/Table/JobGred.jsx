import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import DepartmentDilogbox from '../dialogueBox/DepartmentDilogbox';
import LeftSideBarContainer from '../leftsidebar/LeftSideBarContainer';





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



function JobGred() {
  const [empData, setEmpData] = useState([])
  const [singleData, setSingleData] = useState([])
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios.get("http://localhost:5028/api/JobGradeLevel")
      .then((res) => setEmpData(res.data))
  }, [])

  const handleClick = (data) => {
    setSingleData([data])
    setOpen(true);
    console.log(data, "data")
  }
  const handleClose = () => {
    setOpen(false);
  };
  console.log(empData)
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* this is sidebar */}

      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>


        <Paper sx={{ minWidth: 240, height: 580, textAlign: "center" }} elevation={4}>
        <LeftSideBarContainer/>
        </Paper>

      </div>
        {/* this is INDUCTION TABLE */}

      <div style={{ textAlign: "center", marginRight:"200px" }}>

        <Paper sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",backgroundColor:"#1976d2",color:"white",marginBottom:"20px" }}  elevation={10}>
          <h3>JOB GRADE </h3>

        </Paper >
        <TableContainer component={Paper}>
          {/* <Link to="/addJobGred"  style={{ textDecoration: "none" }}>
                <Button sx={{ marginBottom: "10px", width: "70px", marginLeft: " 5px" }}
                 variant="contained" elevation={10}> ADD </Button>
                 </Link> */}
          <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="center"> ID</StyledTableCell>
                <StyledTableCell align="center"> Total No </StyledTableCell>
                <StyledTableCell align="center">jbgr_nocl</StyledTableCell>
                <StyledTableCell align="center">jbgr_nosl </StyledTableCell>
                <StyledTableCell align="center">jbgr_nool</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {empData.map((row) => (
                <StyledTableRow onClick={() => handleClick(row)} key={row.id}>
                  <StyledTableCell align="center" component="th" scope="row" >
                    {row.jbgr_id}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.jbgr_totalnol}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.jbgr_nocl}</StyledTableCell>
                  <StyledTableCell align="center">{row.jbgr_nosl}</StyledTableCell>
                  <StyledTableCell align="center">{row.jbgr_nool}</StyledTableCell>
                  

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <JobGradeDialogueBox open={open} handleClose={handleClose} singleData={singleData} /> */}
      </div>
    </div>
  )
}

export default JobGred



