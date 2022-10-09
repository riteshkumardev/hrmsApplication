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
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TablePagination, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import InductionDilogbox from '../dialogueBox/InductionDilogbox';
import EditIcon from '@mui/icons-material/Edit';
import LeftSideBarContainer from '../leftsidebar/LeftSideBarContainer';
import { useSelector } from 'react-redux';
import EmployeesSidebar from '../EmployeesSidebar/EmployeesSidebar';




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



function MonthWiseAttandance() {
    const [attandanceData, setAttandanceData] = useState([])
    const [singleData, setSingleData] = useState([])
    const [open, setOpen] = React.useState(false);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  
  const navigate = useNavigate()
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


    const userData = useSelector(
 
        (state) =>state?.loggedInData?.LoggedUserData?.LoggedUserData
      );
const init={
    
    dt:""
}
const [input,setInput] =useState(init)
const handleChange=(e)=>{
    const {name,value}=e.target
    setInput({ ...input, [name]: value })

}

 //function to add data
 const handleSubmit = () => {
    const { 

     
        dt,
       
      } = input

//api to post data(add new data)
    axios.post("http://localhost:5028/EmployeeAttendance/V1/AllEmployeeAttendancebyMonth", {
dt,
       
    })
    .then((res) => {

      if (res.status === 200) {
        
       
        // alert(res?.data)
        console.log(res?.data)
        setAttandanceData(res?.data)
        // navigate("/employeeData")

      }else{
        alert("some error is there!")
      }


    })

  }

  

    const handleClick = (data) => {
        setSingleData([data])
        setOpen(true);
        console.log(data, "data")
    }
    const handleClose = () => {
        setOpen(false);
    };
    console.log(attandanceData)
    return (
        <div style={{ display: "flex", width: "100%" }}>
            {/* this is sidebar */}

            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>


                <Paper sx={{ minWidth: 240, height: 580, textAlign: "center" }} elevation={4}>
                    <LeftSideBarContainer />
                </Paper>

            </div>

            {/* this is MonthWiseAttandance TABLE */}

            <div style={{ textAlign: "center", marginRight: "200px", marginLeft: "20px" }}>

                <Paper sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",backgroundColor:"#1976d2",color:"white" }} elevation={10}>
                    <h3>Month Wise Attandance</h3>

                </Paper >
                <Paper elavation={3} sx={{ padding: "10px", marginBottom: "30px", marginTop: "30px" }}>
                    <Grid container spacing={2} sx={{width:"90%",margin:"auto"}}>
                       
                        <Grid item xs={4}>
                            <TextField
                            type="date"
                                name="dt"
                                value={input?.dt}
                                onChange={handleChange}
                                label="Date"
                            />
                        </Grid>
                        <Grid item xs={4}>
<Button variant="contained" sx={{marginTop:"5px"}} onClick={handleSubmit}>SUBMIT</Button>
                        </Grid>
                    </Grid>
                </Paper>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">

                        <TableHead>
                            <TableRow >
                                <StyledTableCell align="center"> Employee ID</StyledTableCell>
                                <StyledTableCell align="center">Punch In</StyledTableCell>
                                <StyledTableCell align="center"> Punch Out</StyledTableCell>
                                <StyledTableCell align="center"> Punch System</StyledTableCell>



                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {attandanceData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row)=>(
                           
                                <StyledTableRow 
                                
                                >
                                    <StyledTableCell align="center" component="th" scope="row" >
                                        {row?.empl_id}
                                    </StyledTableCell>
                                   
                                    <StyledTableCell align="center" component="th" scope="row" >
                                        {row?.eatn_punch_in}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row" >
                                        {row?.punch_Out}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row" >
                                        {row?.eatn_punchsystem}
                                    </StyledTableCell>
                                   

                                </StyledTableRow>

                            ))}

                       
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={attandanceData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
                {/* <MonthWiseAttandanceDilogbox open={open} handleClose={handleClose} singleData={singleData} /> */}
            </div>
        </div>
    )
}

export default MonthWiseAttandance
