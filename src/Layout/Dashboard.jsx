import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';
/* import DrawerHeader from '@mui/material/Drawer'; */
import Container from '@mui/material/Container';


const Dashboard = ({children}) => {
    return (
        <div>
            
        <Box sx={{ display: 'flex' }}>
            <Header>

            <Navbar />
            </Header>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Container maxWidth="lg" sx={{mt:4,mb:4}}>
            <div style={{marginTop: "50px"}}>{children}</div>
            <br />
                </Container>
                {/* <DrawerHeader /> */}
            </Box>
            {/* <Footer /> */}
        </Box>
        </div>
    )
}

export default Dashboard;