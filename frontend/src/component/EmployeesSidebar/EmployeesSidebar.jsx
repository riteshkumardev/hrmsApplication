import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { Link } from 'react-router-dom';
import EmployeeDashboard from '../employeeDashboard/EmployeeDashboard';
import LeavesSecondDrawer from '../leftsidebar/LeavesSecondDrawer';
export default function EmployeesSidebar() {
    return (
        <div  style={{ display: "flex", width: "100%" }}>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>



                        <ListItem disablePadding>
                            <Link to="/employeeHoliday" style={{ textDecoration: "none" }}>

                                <ListItemButton>
                                    <ListItemIcon>
                                        <CalendarMonthIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Holiday" />
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                            <Link to="/attendence" style={{ textDecoration: "none" }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <EventAvailableIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Attendence" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link to="/employee/employeeLeaves/optedLeave" style={{ textDecoration: "none" }}>

                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonOffIcon />
                                </ListItemIcon>
                                <ListItemText primary="Opted Leaves" />
                               
                            </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link to="/requestleave" style={{ textDecoration: "none" }}>

                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonOffIcon />
                                </ListItemIcon>
                                <ListItemText primary="Request Leaves" />
                               
                            </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                            <Link to="/epmloyee/empApproved" style={{ textDecoration: "none" }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LibraryAddCheckIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Approvals" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </nav>

            </Box>
            {/* <EmployeeDashboard /> */}
        </div>
    );
}

