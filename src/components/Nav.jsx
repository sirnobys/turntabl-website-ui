import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import HailIcon from '@mui/icons-material/Hail';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { images } from '../constants';


const Nav = (props) => {
    const navigate = useNavigate();
    const path = window.location.pathname
    const [activeLink, setActiveLink] = useState(path)
    const matches = useMediaQuery('(min-width:800px)');
    const [scrolled, setScrolled] = useState()

    useEffect(_ => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const BasicMenu = () => {
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
                    <MenuItem>
                        <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/'), setActiveLink('/')]} startIcon={<HomeIcon />}> <Link className="text-grey" underline='none'>Home</Link></Button>
                    </MenuItem>
                    <MenuItem>
                        <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/about-us'), setActiveLink('/about-us')]} startIcon={<PeopleIcon />}> <Link className="text-grey" underline='none'>About Us</Link></Button>
                    </MenuItem>
                    <MenuItem>
                        <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/'), setActiveLink('/client')]} startIcon={<HailIcon />}> <Link className="text-grey" underline='none'>Clients</Link></Button>
                    </MenuItem>
                    <MenuItem>
                        <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/contact'), setActiveLink('/contact')]} startIcon={<ContactMailIcon />}> <Link className="text-grey" underline='none'>Contact</Link></Button>
                    </MenuItem>
                </Menu>
            </div>
        );
    }

    if (!matches) {
        return (
            <div className={scrolled ? 'header' : 'nav'}>
                <div className='logo'><img width={150} src={images.logo} /></div>
                <BasicMenu />
            </div>
        )
    }
    if (matches)
        return (
            <div>
                <div className={scrolled ? 'header' : 'nav'}>
                    <div className='logo'><img width={150} src={images.logo} /></div>
                    <div className='nav-link'>
                        <Button variant="text" className={activeLink === "/" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/'), setActiveLink('/')]} startIcon={<HomeIcon />}> <Link className={activeLink === "/" ? 'text-inspiration' : 'text-grey'} underline='none'>Home</Link></Button>
                        <Button variant="text" className={activeLink === "/about-us" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/about-us'), setActiveLink('/about-us')]} startIcon={<PeopleIcon />}> <Link className={activeLink === "/about-us" ? 'text-inspiration' : 'text-grey'} underline='none'>About Us</Link></Button>
                        <Button variant="text" className={activeLink === "/client" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/'), setActiveLink('/client')]} startIcon={<HailIcon />}> <Link className={activeLink === "/client" ? 'text-inspiration' : 'text-grey'} underline='none'>Clients</Link></Button>
                        <Button variant="text" className={activeLink === "/contact" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/contact'), setActiveLink('/contact')]} startIcon={<ContactMailIcon />}> <Link className={activeLink === "/contact" ? 'text-inspiration' : 'text-grey'} underline='none'>Contact</Link></Button>
                    </div>
                </div>
            </div>
        )
}
export default Nav;