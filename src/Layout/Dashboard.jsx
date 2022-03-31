import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Dashboard = ({children}) => {
    return (
        <div>
            <Header />
            <Navbar />
            <div id="main" style={{background: "yellow", float: "left"}}>{children}</div>
            <br />
            <Footer />
        
        </div>
    )
}

export default Dashboard;