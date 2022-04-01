import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';
import DrawerHeader from '@mui/material/Drawer';

const Dashboard = ({children}) => {
    return (
        <div>
            <Header>

            <Navbar />
            </Header>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div id="main" style={{background: "yellow", float: "left"}}>{children}</div>
            <br />
                <DrawerHeader />
            </Box>
            <Footer />
        
        </div>
    )
}

export default Dashboard;