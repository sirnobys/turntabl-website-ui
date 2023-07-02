import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

import { images } from '../constants';

export function BasicMenu() {
    const navigate = useNavigate();
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
                <MenuIcon className='text-inspiration' />
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
                <MenuItem>Home</MenuItem>
                <MenuItem onClick={handleClose}>About Us</MenuItem>
                <MenuItem onClick={handleClose}>Clients</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>
        </div>
    );
}

const Nav = (props) => {
    const matches = useMediaQuery('(min-width:800px)');
    if (!matches) {
        return (
            <div className='nav'>
                <div className='logo'><img width={150} src={images.logo} /></div>
                <BasicMenu />
            </div>
        )
    }
    if (matches)
        return (
            <div>
                <div className='nav'>
                    <div className='logo'><img width={150} src={images.logo} /></div>
                    <div className='nav-link'>
                        <Button variant="text"  startIcon={<HomeIcon />}> <Link underline='none'>Home</Link></Button>
                        <Button variant="text" startIcon={<HomeIcon />}> <Link to={'/about-us'}>About Us</Link></Button>
                        <Button variant="text" startIcon={<HomeIcon />}> <Link to={'/clients'}>Clients</Link></Button>
                        <Button variant="text" startIcon={<HomeIcon />}> <Link to={'/contact'}>Contact</Link></Button>
                    </div>
                </div>
            </div>
        )
}
export default Nav;