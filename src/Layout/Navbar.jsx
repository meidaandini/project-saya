import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import Source from '@mui/icons-material/Source';
import Tab from '@mui/icons-material/Tab';
import Api from '@mui/icons-material/Api';
import { Link } from 'react-router-dom';
import Article from '@mui/icons-material/Article';

export default function Navbar(children) {

    return (
    <div>
                <Divider />
                <List>
                <Link to='/'>
                    <ListItemButton 
                        key="home"
                    >
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </Link>
                
                <Link to="/gedung">
                    <ListItemButton
                        key="gedung"
                    >
                        <ListItemIcon>
                            <Source />
                        </ListItemIcon>
                        <ListItemText primary="Gedung" />
                    </ListItemButton>
                </Link>
                <Link to="/lantai">
                    <ListItemButton
                        key="lantai"
                    >
                        <ListItemIcon>
                            <Tab />
                        </ListItemIcon>
                        <ListItemText primary="Lantai" />
                    </ListItemButton>
                </Link>
                <Link to="/context">
                    <ListItemButton
                        key="Apps"
                    >
                        <ListItemIcon>
                            <Api />
                        </ListItemIcon>
                        <ListItemText primary="Context" />
                    </ListItemButton>
                </Link>
                <Link to="/GedungContext">
                    <ListItemButton
                        key="GedungContext"
                    >
                        <ListItemIcon>
                            <Article />
                        </ListItemIcon>
                        <ListItemText primary="Gedung_Context" />
                    </ListItemButton>
                </Link>
                </List>
    </div>
            );
}