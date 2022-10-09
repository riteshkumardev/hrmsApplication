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

export default function OfferletterDilogbox({ open, handleClose, singleData, handleClick }) {
   
   

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
                            label="Refereance ID"
                            value={singleData?.eofr_ref_id}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Candidate ID"
                            value={singleData?.eofr_cand_id}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Offer Date"
                            value={singleData?.eofr_offerdat}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Job Offered"
                            value={singleData?.eofr_offeredjob}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Reporting Date"
                            value={singleData?.eofr_reportingdate}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        fullWidth
                            label="Status"
                            value={singleData?.eofr_status}
                            disabled
                        />
                    </Grid>
                   
                </Grid>
            </Dialog>
        </div>
    );
}

