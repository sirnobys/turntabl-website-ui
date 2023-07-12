import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';
import FeedIcon from '@mui/icons-material/Feed';
import ArticleIcon from '@mui/icons-material/Article';
import CallIcon from '@mui/icons-material/Call';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoutIcon from '@mui/icons-material/Logout';

import { Events, Blogs, Careers, Newsletters, Contact, Roles } from '../components';
import { images, links } from '../constants';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Link } from '@mui/material';
import LoadingProgress from '../components/LoadingProgress';
import { Avatar } from '@mui/joy';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const AdminPage = () => {
    const { loginWithRedirect, isLoading, isAuthenticated, user, loginWithPopup, logout } = useAuth0();
    const [load, setLoad] = useState(true)
    const confirmLogout = () => {
        const goOff = window.confirm('logout?')
        if (goOff) {
            logout()
        }
    }

    const handleLogout = () => {
        window.alert('Access denied!')
        logout()
    }
    const handleAuth = (data) => {
        if (isAuthenticated) {
            console.log(data?.some(e => e.email == user.email));
            data?.some(e => e.email == user.email) ? console.log('success') : handleLogout()
        }
    }

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            loginWithRedirect()
        }
        if (isAuthenticated) {

            fetch(`${links.BASE_URL}/api/v1/authenticate`)
                .then(response => response.json())
                .then(data => {
                    // setNotificationMessage({ text: 'loaded successfully' })
                    console.log(data.result);
                    handleAuth(data.result)
                    setLoad(false)
                    // setLoad(false)
                    // setSelectedCareer(data.result[0])
                }).catch((e) => {
                    // setLoad(false)
                })

        }
    }, [isLoading])

    
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [section, setSection] = useState('events');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const sectIcons = {
        events: <EventIcon />,
        blogs: <ArticleIcon />,
        careers: <WorkIcon />,
        newsletters: <FeedIcon />,
        contact: <CallIcon />,
        roles: <SupervisorAccountIcon />
    }

    if (!isAuthenticated || load) {
        return <LoadingProgress />
    }

    return (
        <Box sx={{ width: "100%" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton
                        color="#bdff00"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{
                        width: "100%",
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <img width={150} src={images.logo} alt="turntabl logo" />
                        <Box sx={{
                        display: 'flex',
                    }}>
                            <Avatar alt="profile picture" src={user.picture} />
                            <Button variant="text" className={'text-grey'} onClick={() => confirmLogout()} startIcon={<LogoutIcon />}> <Link className={'text-grey'} underline='none'>Logout</Link></Button>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['events', 'blogs', 'careers', 'newsletters', 'contact', 'roles'].map((sect) => (
                        <ListItem
                            key={sect}
                            disablePadding
                            sx={{
                                display: 'block',
                                backgroundColor: section === sect ? '#b0b0ff' : '',
                                color: section === sect ? '#fff' : ''
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                onClick={() => setSection(sect)}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: section === sect ? '#fff' : ''
                                    }}
                                >
                                    {sectIcons[sect]}
                                </ListItemIcon>
                                <ListItemText primary={sect} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, pt: { xs: 2, sm: 3 }, pl: { xs: 9, sm: 11 }, pr: { xs: 2, sm: 3 } }}>
                <DrawerHeader />
                {
                    section === 'events' ?
                        <Events />
                        : section === 'blogs' ?
                            <Blogs />
                            : section === 'careers' ?
                                <Careers />
                                : section === 'newsletters' ?
                                    <Newsletters />
                                    : section === 'contact' ?
                                        <Contact />
                                        :
                                        <Roles />
                }
            </Box>
        </Box>
    )
}
export default AdminPage;