import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
// import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';
import FeedIcon from '@mui/icons-material/Feed';
import ArticleIcon from '@mui/icons-material/Article';
import CallIcon from '@mui/icons-material/Call';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import { images } from '../constants';
import { ArrowDropDown } from '@mui/icons-material';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';


const Nav = (props) => {


    const navigate = useNavigate();
    const path = window.location.pathname
    const [activeLink, setActiveLink] = useState(path)
    const matches = useMediaQuery('(min-width:821px)');
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

    const AboutDropdown = () => {
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
                    variant="text" className={activeLink === "/services" || activeLink === "/about-us" || activeLink === "/careers" ? 'text-inspiration' : 'text-grey'} startIcon={<PeopleIcon />} endIcon={<ArrowDropDown />}  >
                    <Link className={activeLink === "/services" || activeLink === "/about-us" || activeLink === "/careers" ? 'text-inspiration' : 'text-grey'} underline='none'>About Us</Link>
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
                        <Button variant="text" className={activeLink === "/about-us" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/about-us'), setActiveLink('/about-us')]} startIcon={<PeopleIcon />}> <Link className={activeLink === "/about-us" ? 'text-inspiration' : 'text-grey'} underline='none'>Who We Are</Link></Button>
                    </MenuItem>
                    <MenuItem>
                        <Button variant="text" className={activeLink === "/services" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/services'), setActiveLink('/services')]} startIcon={<MiscellaneousServicesIcon />}> <Link className={activeLink === "/services" ? 'text-inspiration' : 'text-grey'} underline='none'>Services</Link></Button>
                    </MenuItem>
                    <MenuItem>
                        <Button variant="text" className={activeLink === "/careers" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/careers'), setActiveLink('/careers')]} startIcon={<WorkIcon />}> <Link className={activeLink === "/careers" ? 'text-inspiration' : 'text-grey'} underline='none'>Careers</Link></Button>
                    </MenuItem>
                </Menu>
            </div>
        );
    }

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

                    <AboutDropdown />
                    <MenuItem>
                        <Button variant="text" className={activeLink === "/contact" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/contact'), setActiveLink('/contact')]} startIcon={<CallIcon />}> <Link className={activeLink === "/contact" ? 'text-inspiration' : 'text-grey'} underline='none'>Contact</Link></Button>
                    </MenuItem>
                    <MenuItem>
                        <Button variant="text" className={activeLink === "/events" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/events'), setActiveLink('/events')]} startIcon={<EventIcon />}> <Link className={activeLink === "/events" ? 'text-inspiration' : 'text-grey'} underline='none'>Events</Link></Button>
                    </MenuItem>
                    <MenuItem>
                        <Button variant="text" className={activeLink === "/blog" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/blog'), setActiveLink('/blog')]} startIcon={<ArticleIcon />}> <Link className={activeLink === "/blog" ? 'text-inspiration' : 'text-grey'} underline='none'>Blog</Link></Button>
                    </MenuItem>
                </Menu>
            </div>
        );
    }

    if (!matches) {
        return (
            <div className={scrolled ? 'header' : 'nav'}>
                <div className='logo' onClick={() => navigate('/')}><img width={150} src={images.logo} alt='logo'/></div>
                <BasicMenu />
            </div>
        )
    }
    if (matches)
        return (
            <div>
                <div className={scrolled ? 'header' : 'nav'}>
                    <div className='logo' onClick={() => navigate('/')}><img width={150} src={images.logo} alt=''/></div>
                    <div className='nav-link'>
                        <AboutDropdown />
                        <Button variant="text" className={activeLink === "/contact" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/contact'), setActiveLink('/contact')]} startIcon={<CallIcon />}> <Link className={activeLink === "/contact" ? 'text-inspiration' : 'text-grey'} underline='none'>Contact</Link></Button>
                        <Button variant="text" className={activeLink === "/events" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/events'), setActiveLink('/events')]} startIcon={<EventIcon />}> <Link className={activeLink === "/events" ? 'text-inspiration' : 'text-grey'} underline='none'>Events</Link></Button>
                        <Button variant="text" className={activeLink === "/blog" ? 'text-inspiration' : 'text-grey'} onClick={() => [navigate('/blog'), setActiveLink('/blog')]} startIcon={<ArticleIcon />}> <Link className={activeLink === "/blog" ? 'text-inspiration' : 'text-grey'} underline='none'>Blog</Link></Button>
                    </div>
                </div>
            </div>
        )
}
export default Nav;