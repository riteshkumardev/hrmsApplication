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
import InductionDilogbox from '../dialogueBox/InductionDilogbox';
import EditIcon from '@mui/icons-material/Edit';
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



function Induction() {
  const [empData, setEmpData] = useState([])
  const [singleData, setSingleData] = useState([])
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios.get("http://localhost:5028/Induction/V1/AllInductions")
      .then((res) => setEmpData(res?.data))
    
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

        <div style={{ textAlign: "center", marginRight: "200px", marginLeft: "20px" }}>

<Paper sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",backgroundColor:"#1976d2",color:"white",marginBottom:"20px" }}  elevation={10}>
          <h3>INDUCTION TABLE</h3>

        </Paper >
        <div>
     
            <Link to="/Induction/InductionAdd"  style={{ textDecoration: "none" }}>
                <Button sx={{ marginBottom: "10px", width: "70px", marginLeft: " 5px" }}
                 variant="contained" elevation={10}> ADD </Button>
                 </Link>
            <Link to="/Induction/InductionUploadPost"  style={{ textDecoration: "none" }}>
                <Button sx={{ marginBottom: "10px", width: "120px", marginLeft: " 5px" }}
                 variant="contained" elevation={10}> Attachment </Button>
                 </Link>
        </div>
       
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
            
            <TableHead>
              <TableRow >
                <StyledTableCell align="center"> Induction ID</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center"> Employee Offer ID</StyledTableCell>
                <StyledTableCell align="center">Processed User Id</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>

    

              </TableRow>
            </TableHead>
            <TableBody>
              {empData?.map((row) => (
                <StyledTableRow onClick={() => handleClick(row)} key={row.id}>
                  <StyledTableCell align="center" component="th" scope="row" >
                    {row.indc_id}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.indc_emof_id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.indc_date}</StyledTableCell>
                  <StyledTableCell align="center">{row.indc_processed_ausr_id}</StyledTableCell>
                  <StyledTableCell align="center">{row.indc_status}</StyledTableCell>
                  <StyledTableCell align="center">
<EditIcon/>
                  </StyledTableCell>
                  

                </StyledTableRow>
                         
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <InductionDilogbox open={open} handleClose={handleClose} singleData={singleData} />
      </div>
    </div>
  )
}

export default Induction
