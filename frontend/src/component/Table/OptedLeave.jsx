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
import { Button, TablePagination } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LeavesDilogbox from '../dialogueBox/LeavesDilogbox';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { changeStatusOfHolidayForm } from '../redux/action';
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



function OptedLeaves() {
  const [holidayData, setHolidayData] = useState([])
  const [singleData, setSingleData] = useState([])
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({})
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
    axios.get("http://localhost:5028/EmpOptedLeaves/V1/AllEmpOptedLeaves")
      .then((res) => setHolidayData(res?.data))
  }, [])

  const handleClick = (data) => {
    setSingleData([data])
    setOpen(true);
    console.log(data, "data")
  }
  const handleClose = () => {
    setOpen(false);
  };
  console.log(holidayData)


 
  function handleAdd() {
    dispatch(changeStatusOfHolidayForm({ status: false }))
    navigate("/employee/addOptedLeaves")

  }


  return (

<div style={{display:"flex"}}>
 
    <div style={{ textAlign: "center", margin:"auto"}}>


      <Paper sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",backgroundColor:"#1976d2",color:"white",marginBottom:"20px" }} elevation={10}>
        <h3>Opted Leave List</h3>

      </Paper >

      <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
        <Link to="/employee" style={{ textDecoration: "none" }}>
          <Button variant="contained" ><ArrowBackIcon /> </Button >
        </Link>

        <Button onClick={handleAdd} variant="contained" ><AddIcon /> </Button >

      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">

          <TableHead>
            <TableRow >
              <StyledTableCell align="center"> ID</StyledTableCell>
              <StyledTableCell align="center"> Year</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center"> Type</StyledTableCell>
              



            </TableRow>
          </TableHead>
          <TableBody>
            {holidayData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row) => (
              <StyledTableRow key={row.empl_id}>

                <StyledTableCell onClick={() => handleClick(row)} align="center" component="th" scope="row">
                  {row?.empl_id}
                </StyledTableCell>
                <StyledTableCell align="center">{row?.year_id}</StyledTableCell>
                <StyledTableCell align="center">{row?.eolv_date}</StyledTableCell>
                <StyledTableCell align="center">{row?.eolv_leavetype}</StyledTableCell>


              </StyledTableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={holidayData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <LeavesDilogbox open={open} handleClose={handleClose} singleData={singleData} />

    </div>
    </div>
  )
}



export default OptedLeaves