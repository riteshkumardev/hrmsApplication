import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});







export default function EmployeeDialougeBox({ open, handleClose, singleData, handleClick }) {
   
   

    return (
        <div>
    
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative',width:"100%" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {singleData?.empl_firstname} Details
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
             
                <Grid sx={{ width:"90%",margin:"auto",marginTop:"20px" }} container spacing={2}>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Employee ID"
                            value={singleData?.empl_id}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Last Name"
                            value={singleData?.empl_lastname}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="First Name"
                            value={singleData?.empl_firstname}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Surname"
                            value={singleData?.empl_surname}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Gender"
                            value={singleData?.empl_gender}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Father Name"
                            value={singleData?.empl_fatherName}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Address"
                            value={singleData?.empl_address}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Alternate Email"
                            value={singleData?.empl_altemail}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Office Email"
                            value={singleData?.empl_offemail}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Personal Email"
                            value={singleData?.empl_pemail}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Mobile"
                            value={singleData?.empl_mobile}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Blood Group"
                            value={singleData?.empl_bloodgroup}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Designation"
                            value={singleData?.empl_designation}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        type="date"
                        fullWidth
                            label="Date Of Birth"
                            value={singleData?.empl_dob}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        type="datetime-local"
                        fullWidth
                            label="Join Date"
                            value={singleData?.empl_joindate}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        type="datetime-local"
                        fullWidth
                            label="Last Updated Date"
                            value={singleData?.empl_lastUpdatedDate}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="HR ID"
                            value={singleData?.empl_hr_empl_id}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Job Grade ID"
                            value={singleData?.empl_jbgr_id}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Last Updated User"
                            value={singleData?.empl_lastUpdatedUser}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="R Manager ID"
                            value={singleData?.empl_rmanager_empl_id}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Status"
                            value={singleData?.empl_status}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Password"
                            value={singleData?.password}
                            disabled
                        />
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
}
