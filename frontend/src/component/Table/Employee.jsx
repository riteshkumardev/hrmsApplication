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

import {  useNavigate } from 'react-router-dom';
import "./Table.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { changeStatusOfEmployeeForm, editEmployeeData } from '../redux/action';
import { useDispatch } from "react-redux"
import LeftSideBarContainer from '../leftsidebar/LeftSideBarContainer';
import EmployeeDialougeBox from '../dialogueBox/EmployeeDialougeBox';
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



function Employee() {
  const [empData, setEmpData] = useState([])
  const [singleData, setSingleData] = useState([])
  const [open, setOpen] = React.useState(false);
  const [editData, setEditData] = useState({})
  const [isEdit, setIsEdit] = useState(false);
  const [deleted, setDeleted] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [select, setSelect] = useState("");
const [view,setView]=useState(false)

  // const handleClick = (data) => {
  //   setSingleData([data])
  //   setOpen(true);
  //   console.log(setSingleData, "data")
  // }
  const handleClose = () => {
    setOpen(false);
  };
  console.log(empData)


  const handleEdit = (row) => {
    setIsEdit(true)
    setEditData(row)
    const payload = {
      data: row,
      edit: true,
      count: empData?.length

    }
    dispatch(editEmployeeData(payload))
    navigate("/editEmployee")
  }
  function handleAdd() {
    dispatch(changeStatusOfEmployeeForm({ status: false }))
    navigate("/addempdata")

  }
  //for getting  table data
  function getTableData() {
    axios.get("http://localhost:5028/api/EmployeeControllerv2/V2/AllEmployees")
      .then((res) => {
        console.log(res?.data, "emp")
        setEmpData(res?.data)

      })

  }



  //function to delete record
  const handleDelete = (id) => {
    axios.delete(`/employee/${id}`)
      .then((res) => {
        if (res?.data?.status === 200) {
          alert("success")
          setDeleted(true)
        } else {
          alert("Eroor")
        }
        // navigate("/employeeData")
        //calling delete function to show table again after deleting data
        getTableData()
      })
    // console.log(editData)
  }


  const handleChange = (event) => {
    setSelect(event.target.value);
    if (select === "Opeted") {

      navigate("/Leaves");
     
    }
    else if(select === "Request"){
      navigate("/RequestLeave");
    }


   




  };
  //to show table data when page come forst time
  useEffect(() => {
    getTableData()
  }, [])


  const handleView=(row)=>{
    setSingleData(row)
    setOpen(true);

    console.log(row,"singlrrrrrr")
  }
 

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* this is sidebar */}

      <div style={{display:"flex",justifyContent:"space-between",width:"100%" }}>


        <Paper sx={{ minWidth: 240, height: 580, marginLeft:1 ,textAlign:"center" }} elevation={4}>
        <LeftSideBarContainer/>
        </Paper>
      </div>


      {/* this is INDUCTION TABLE */}

      <div style={{ textAlign: "center", marginRight: "200px", marginLeft: "20px" }}>

        <Paper sx={{ minWidth: 240, textAlign: "center",padding:"5px",marginTop:"20px",marginBottom:"20px",backgroundColor:"#1976d2",color:"white" }} elevation={10}>
          <h3>EMPLOYEES TABLE</h3>

        </Paper >
        <div onClick={handleAdd} style={{ textDecoration: "none" }}>
          <Paper sx={{ textAlign: "center", border: "1px solid red", marginBottom: "10px", padding: "5px", width: "5%", backgroundColor: "#1976d2", color: "white" }} ><AddIcon /></Paper>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="center"> Employee ID</StyledTableCell>

                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">LastName</StyledTableCell>
                <StyledTableCell align="center">Stutas</StyledTableCell>
                <StyledTableCell align="center">Join Date</StyledTableCell>
             

                <StyledTableCell align="center">Phone</StyledTableCell>

                <StyledTableCell align="center">Action</StyledTableCell>












              </TableRow>
            </TableHead>
            <TableBody>
              {empData?.map((row) => (
                <StyledTableRow
                  key={row.empl_id}>


                  <StyledTableCell 
                  // onClick={() => handleClick(row)} 
                  align="center">{row?.empl_id}</StyledTableCell>

                  <StyledTableCell align="center">{row?.empl_firstname}</StyledTableCell>

                  <StyledTableCell align="center">{row?.empl_lastname}</StyledTableCell>
                  <StyledTableCell align="center">{row?.empl_status}</StyledTableCell>
                  <StyledTableCell align="center">{row?.empl_joindate}</StyledTableCell>




                  <StyledTableCell align="center">{row?.empl_mobile

                  }</StyledTableCell>


                  <StyledTableCell align="center" sx={{ display: "flex" }}>
                    <div onClick={() => handleEdit(row)}>

                      <EditIcon />
                    </div>
                    <div onClick={() => handleDelete(row?._id)}>

                      <DeleteIcon />
                    </div>
                    <div onClick={() => handleView(row)}>

                      <VisibilityIcon />
                    </div>
                  </StyledTableCell>





                </StyledTableRow>

              ))}
            </TableBody>
          </Table>
        </TableContainer>

<EmployeeDialougeBox open={open} handleClose={handleClose}
 
handleClick={handleView}
 singleData={singleData} />
        
      </div>
    </div>
  )
}

export default Employee






