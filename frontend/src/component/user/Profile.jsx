// import { useAuth0 } from '@auth0/auth0-react';
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../redux/action";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import { useState } from 'react';

const Profile = () => {
  // const callAbout = async () => {
  //   try {
  //     const res = await fetch("/user/about", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     // setuserdata(data);

  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   callAbout();
  // }, []);
  const dispatch = useDispatch();
  const userData = useSelector(
 
    (state) =>state?.loggedInData?.LoggedUserData?.LoggedUserData
  );
  // const userDatas=useSelector((state)=>console.log(state,"state");
  const status = useSelector((state) => state?.loggedInData?.status);
  console.log(status);
  const [userDataInput, setUserDataInput] = useState(userData);
  console.log(userDataInput,"userDataInput");
  const [edit, setEdit] = useState(status);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDataInput({ ...userDataInput, [name]: value });
  };

  function handleUserEdit() {
    fetch(`/user/${userDataInput?._id}`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: userDataInput?.email,
        password: userDataInput?.password,
        fname: userDataInput?.fname,
        lname: userDataInput?.lname,
        offEmail: userDataInput?.offEmail,
        addr: userDataInput?.addr,
        mobile: userDataInput?.mobile,
        userType: userDataInput?.userType,
        dob: userDataInput?.dob,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data?.msg);
      });
    // dispatch(updateUserDetails(userDataInput));
  }
  // console.log(userData);
  function handleUserBack(){
   
    if ( userDataInput.empl_designation==="Developer" || userDataInput.empl_designation==="Software Engineer" || userDataInput.empl_designation==="Testing" ) {
      navigate("/employee");
    } else if ( userDataInput.empl_designation ==="Manager" || userDataInput.empl_designation ==="HR Manager") {
      navigate("/admin");

    }
  }

  return (
    <Paper
      sx={{
        width: "30%",
        textAlign: "center",
        marginTop: 10,
        paddingBottom: "20px",
      }}
      elevation={10}
      className="column"
    >
      <Grid container sx={{ marginTop: "20px" }} spacing={2}>
        <Grid item xs={12}>
          <img width="100px" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="image" />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Employee Id"}
            name="empl_id"
            value={userDataInput?.empl_id}
            onChange={handleChange}

            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"First Name"}
            name="empl_firstname"
            value={userDataInput?.empl_firstname}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Last Name"}
            name="empl_lastname"
            value={userDataInput?.empl_lastname}
            onChange={handleChange}

            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Email"}
            name="empl_pemail"
            value={userDataInput?.empl_pemail}
            onChange={handleChange}

            disabled
          />
        </Grid>
        
        <Grid item xs={4}>
          <TextField
            label={"Surname"}
            name="empl_surname"
            value={userDataInput?.empl_surname}
            onChange={handleChange}

            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Mobile No"}
            name="mobile"
            value={userDataInput?.mobile}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"ManagerId "}
            name="empl_rmanager_empl_id"
            value={userDataInput?.empl_rmanager_empl_id}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"HR ID"}
            name="empl_hr_empl_id"
            value={userDataInput?.empl_hr_empl_id}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Job Gred ID"}
            name="addr"
            value={userDataInput?.empl_jbgr_id}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Join Date"}
            name="empl_joindate"
            value={userDataInput?.empl_joindate}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        
        <Grid item xs={4}>
          <TextField
            label={"Dob"}
            name="empl_dob"
            value={userDataInput?.empl_dob}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Offce Email"}
            name="empl_offemail"
            value={userDataInput?.empl_offemail}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Mobile"}
            name="empl_mobile"
            type="empl_mobile"
            value={userDataInput?.empl_mobile}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Gender"}
            name="empl_gender"
            type="empl_gender"
            value={userDataInput?.empl_gender}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Bloodgroup"}
            name="empl_bloodgroup"
            type="empl_bloodgroup"
            value={userDataInput?.empl_bloodgroup}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Father Name"}
            name="empl_fatherName"
            type="empl_fatherName"
            value={userDataInput?.empl_fatherName}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={"Address"}
            name="empl_address"
            value={userDataInput?.empl_address}
            onChange={handleChange}

            // disabled={!edit}
          />
        </Grid>
      </Grid>
      <Button sx={{marginRight:"10px", marginTop:"10px"}} onClick={handleUserEdit} variant="contained">
        Edit
      </Button>
      <Button sx={{marginLeft:"10px",marginTop:"10px"}} onClick={handleUserBack} variant="contained">
        Back
      </Button>
     
    </Paper>
  );
};

export default Profile;
