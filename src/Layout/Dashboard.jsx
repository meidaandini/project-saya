import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@material-ui/core";
/* import DrawerHeader from '@mui/material/Drawer'; */
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../Components/Auth/AuthContext";
import MenuAppBar from "./AppBar";

const Dashboard = ({ children }) => {
  const { userName, setuserName, openToken, setopenToken } = useAuthContext();
  return (
    <div>
      {/* <useAuthContext open={userName} setOpen={setuserName}/> */}
      <Box sx={{ display: "flex" }}>
        <Header>
          <Navbar />
        </Header>
        {/* <MenuAppBar>
          <Navbar />
        </MenuAppBar> */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <div style={{ marginTop: "50px" }}>
              <Outlet />
            </div>
            <br />
          </Container>
          {/* <DrawerHeader /> */}
        </Box>
        {/* <Footer /> */}
      </Box>
    </div>
  );
};

export default Dashboard;
