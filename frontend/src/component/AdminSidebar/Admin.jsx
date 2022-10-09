import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { border, color } from '@mui/system';
import "./Admin.css"
import { Paper } from '@mui/material';
import Body from '../body/Body';
import { Link } from 'react-router-dom';
import LeftSideBarContainer from '../leftsidebar/LeftSideBarContainer';

export default function Admin() {
   

    return (

<div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>


<Paper sx={{ minWidth: 240, height: 580, marginLeft:1 ,textAlign:"center" }}elevation={4}>
           <LeftSideBarContainer/>
      </Paper>
      <Body/>
</div>
    );
}
