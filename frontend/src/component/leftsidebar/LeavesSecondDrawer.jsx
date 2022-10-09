import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { Link } from 'react-router-dom';
// export default function LeavesSecondDrawer() {
//     return (
//         <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             <nav aria-label="main mailbox folders">
//                 <List>
//                     <ListItem disablePadding>
//                         <Link to="/employeeData" style={{ textDecoration: "none" }}>


//                             <ListItemButton>

//                                 <ListItemIcon>
//                                     <PeopleIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Employee" />
//                             </ListItemButton>
//                         </Link>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Link to="/offerletter" style={{ textDecoration: "none" }}>
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <DraftsIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Offer Letter" />
//                             </ListItemButton>
//                         </Link>

//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Link to="/Induction" style={{ textDecoration: "none" }}>

//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <WorkIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Induction" />
//                             </ListItemButton>
//                         </Link>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Link to="/holiday" style={{ textDecoration: "none" }}>

//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <CalendarMonthIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Holiday" />
//                             </ListItemButton>
//                         </Link>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Link to="/jobGrade" style={{ textDecoration: "none" }}>


//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <GradeIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Job Grade" />
//                             </ListItemButton>
//                         </Link>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Link to="/attendence" style={{ textDecoration: "none" }}>
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <EventAvailableIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Attendence" />
//                             </ListItemButton>
//                         </Link>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         {/* <Link to="/Leaves" style={{ textDecoration: "none" }}> */}

//                             <ListItemButton>
//                                 {/* <ListItemIcon>
//                                     <PersonOffIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="leaves" /> */}
//                                 <LeavesSecondDrawer/>
//                             </ListItemButton>
//                         {/* </Link> */}
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Link to="/permissions" style={{ textDecoration: "none" }}>
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <InboxIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Permissions" />
//                             </ListItemButton>
//                         </Link>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Link to="approvals" style={{ textDecoration: "none" }}>
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     <LibraryAddCheckIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Approvals" />
//                             </ListItemButton>
//                         </Link>
//                     </ListItem>
//                 </List>
//             </nav>

//         </Box>
//     );
// }


function LeavesSecondDrawer() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
   <nav aria-label="main mailbox folders">
       <List>
           <ListItem disablePadding>
               <Link to="/employeeData" style={{ textDecoration: "none" }}>
    
    
                   <ListItemButton>
    
                       <ListItemIcon>
                           <PeopleIcon />
                       </ListItemIcon>
                       <ListItemText primary="Opted Leaves" />
                   </ListItemButton>
               </Link>
           </ListItem>
           <ListItem disablePadding>
               <Link to="/requestLeave" style={{ textDecoration: "none" }}>
                   <ListItemButton>
                       <ListItemIcon>
                           <DraftsIcon />
                       </ListItemIcon>
                       <ListItemText primary="Request Leave" />
                   </ListItemButton>
               </Link>
    
           </ListItem>
        
       </List>
   </nav>
  
       </Box>
  )
}

export default LeavesSecondDrawer