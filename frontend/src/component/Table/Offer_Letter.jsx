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
import OfferletterDilogbox from '../dialogueBox/OfferletterDilogbox';
import LeftSideBarContainer from '../leftsidebar/LeftSideBarContainer';
import VisibilityIcon from '@mui/icons-material/Visibility';





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



function Offer_Letter() {
    const [empData, setEmpData] = useState([])
    const [singleData, setSingleData] = useState([])
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        axios.get("http://localhost:5028/EmployeeOfferLetterControllerr/V1/AllEmployeeOfferLetter")
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
    const handleView=(row)=>{
        setSingleData(row)
        setOpen(true);
    
        console.log(row,"singlrrrrrr")
      }

    return (
        <div style={{ display: "flex", width: "100%",height:"800px" }}>
            {/* this is sidebar */}

            <div style={{ textAlign: "center", marginRight: "200px", marginLeft: "20px" }}>

                <Paper sx={{ minWidth: 240, textAlign: "center" }} elevation={10}>
                    <LeftSideBarContainer />
                </Paper>

            </div>
            {/* this is INDUCTION TABLE */}

            <div style={{ textAlign: "center", marginRight: "200px" }}>

                <Paper sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",backgroundColor:"#1976d2",color:"white",marginBottom:"20px" }} elevation={10}>
                    <h3>OFFER LETTER </h3>

                </Paper >
                <div><Link to="/addOfferLetter">
                    <Button sx={{ marginBottom: "10px", width: "70px", marginLeft: " 600px" }}
                        variant="contained" elevation={10}> ADD </Button>
                        </Link>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{  textAlign: "center" }} aria-label="customized table">
                        <TableHead>
                            <TableRow >
                                <StyledTableCell align="center"> ID </StyledTableCell>
                                <StyledTableCell align="center"> Condidate ID </StyledTableCell>
                                <StyledTableCell align="center"> Offer Date</StyledTableCell>
                                <StyledTableCell align="center">Offered job</StyledTableCell>
                                <StyledTableCell align="center">Reporting Date </StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {empData.map((row) => (
                                <StyledTableRow  key={row.id}>
                                    <StyledTableCell align="center" component="th" scope="row" >
                                        {row.eofr_ref_id}
                                    </StyledTableCell>


                                    <StyledTableCell align="center">{row.eofr_cand_id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.eofr_offerdat}</StyledTableCell>
                                    <StyledTableCell align="center">{row.eofr_offeredjob}</StyledTableCell>
                                    <StyledTableCell align="center">{row.eofr_reportingdate}</StyledTableCell>
                                    <StyledTableCell align="center">{row.eofr_status}</StyledTableCell>

                                    <StyledTableCell align="center" sx={{ display: "flex" }}>
                  
                    <div onClick={() => handleView(row)}>

                      <VisibilityIcon />
                    </div>
                  </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <OfferletterDilogbox open={open} handleClose={handleClose} singleData={singleData} />
            </div>
        </div>
    )
}

export default Offer_Letter



