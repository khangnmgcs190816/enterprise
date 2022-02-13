// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Link } from 'react-router-dom';

// const drawerWidth = 220;

// export default function PermanentDrawerLeft() {
//     return (
//         <Box sx={{ display: 'flex' }}>
//             <Drawer
//                 sx={{
//                     width: drawerWidth,
//                     flexShrink: 0,
//                     '& .MuiDrawer-paper': {
//                         width: drawerWidth,
//                         boxSizing: 'border-box',
//                     },
//                 }}
//                 variant="permanent"
//                 anchor="left"
//             >
//                 <Link to="/">
//                     <img
//                         src='images/Logo-Greenwich.png'
//                         alt='FPTGreenwich'
//                         style={{ maxWidth: '10rem', }}
//                     ></img>
//                 </Link>
//                 <Divider />
//                 <List>
//                     {['Home', 'Idea List', 'Employee List', 'Dashboard'].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <Divider />
//                 <List>
//                     {['Logout', 'Settings'].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//         </Box>
//     );
// }
