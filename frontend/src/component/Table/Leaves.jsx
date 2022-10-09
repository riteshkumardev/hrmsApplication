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
import { Button, FormControl, InputLabel, MenuItem, Select, TablePagination, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LeavesDilogbox from '../dialogueBox/LeavesDilogbox';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';



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



function Leaves() {
  const [leaveData, setLeaveData] = useState([])
  const [singleData, setSingleData] = useState([])
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = useState(0);



  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    axios.get("http://localhost:5028/EmpLeaveRequest/V1/AllEmployeeApprovedLeaves")
      .then((res) => setLeaveData(res?.data))
  }, [])

  const handleClick = (data) => {
    setSingleData([data])
    setOpen(true);
    console.log(data, "data")
  }
  const handleClose = () => {
    setOpen(false);
  };


 
  function handleAdd() {
    // dispatch(changeStatusOfLeaveForm({status:false}))
    navigate("/addLeave")

  }


  return (


    <div style={{ textAlign: "center",width:"90%",margin:"auto" }}>

      <Paper sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",backgroundColor:"#1976d2",color:"white",marginBottom:"20px" }}  elevation={10}>
        <h3>Leave List</h3>

      </Paper >

      <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
        <Link to="/employeeData" style={{ textDecoration: "none" }}>
          <Button variant="contained" ><ArrowBackIcon /> </Button >
        </Link>

        {/* <Button onClick={handleAdd} variant="contained" ><AddIcon /> </Button > */}

      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">

          <TableHead>
            <TableRow >
              <StyledTableCell align="center"> Employee ID</StyledTableCell>
              <StyledTableCell align="center"> Index</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center"> Leave Type</StyledTableCell>
              <StyledTableCell align="center"> Reason</StyledTableCell>
              <StyledTableCell align="center"> Leave Start Date</StyledTableCell>
              <StyledTableCell align="center"> Leave End Date</StyledTableCell>
              <StyledTableCell align="center"> Approved  By</StyledTableCell>
              <StyledTableCell align="center"> Remarks</StyledTableCell>
              <StyledTableCell align="center"> Approved start Date</StyledTableCell>
              <StyledTableCell align="center"> Approved End Date</StyledTableCell>
              <StyledTableCell align="center"> Action</StyledTableCell>



            </TableRow>
          </TableHead>
          <TableBody>
            {leaveData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row) => (
              <StyledTableRow key={row.id}>

                
                <StyledTableCell  onClick={() => handleClick(row)} align="center">{row?.empl_id}</StyledTableCell>
                <StyledTableCell align="center">{row?.elrq_index}</StyledTableCell>
                <StyledTableCell align="center">{row?.elrq_date}</StyledTableCell>
                <StyledTableCell align="center">{row?.elrq_leavetype}</StyledTableCell>
                <StyledTableCell align="center">{row?.elrq_reason}</StyledTableCell>
                <StyledTableCell align="center">{row?.elrq_leavestdate}</StyledTableCell>
                <StyledTableCell align="center"> {row?.elrq_leaveenddate}</StyledTableCell>
                <StyledTableCell align="center"> </StyledTableCell>
                <div style={{display:"flex" ,marginLeft:"-120px" , marginRight:"30px",textAlign:"center" }}>

                <TextField xs={{width:"50px"}}  name='elrq_approvedby' align="center" value={row?.elrq_approvedby}></TextField>
                
                <Select xs={{}} name='select'>
                  <MenuItem value={row?.elrq_approvedremarks} ></MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Not Approved"> Not Approved</MenuItem>
                </Select>
                </div>
                
             
                <StyledTableCell align="center">{row?.elrq_aprvdleavestdate}</StyledTableCell>
                <StyledTableCell align="center">{row?.elrq_aprvdleaveenddate}</StyledTableCell>
                <Button sx={{marginRight:"5px"}}
                 variant="contained" elevation={10}> Submit </Button>


              </StyledTableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={leaveData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <LeavesDilogbox open={open} handleClose={handleClose} singleData={singleData} />
    </div>

  )
}



export default Leaves