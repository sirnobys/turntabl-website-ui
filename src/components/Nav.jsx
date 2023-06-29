import React from 'react';
import logo from "../images/logo.png"
import useMediaQuery from '@mui/material/useMediaQuery';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon className='text-inspiration'/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About Us</MenuItem>
                <MenuItem onClick={handleClose}>Clients</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>
        </div>
    );
}

export const Nav = (props) => {
    const matches = useMediaQuery('(min-width:800px)');
    if (!matches) {
        return (
            <div className='nav'>
                <div className='logo'><img width={150} src={logo} /></div>
                <BasicMenu />
            </div>
        )
    }
    if (matches)
        return (
            <div>
                <div className='nav'>
                    <div className='logo'><img width={150} src={logo} /></div>
                    <div className='nav-link'>
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Clients</span>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        )
}