import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { categories } from '../utils/constants'
import { logo } from '../utils/constants'


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

export default function Sidenav({ selectedCategory, setSelectedCategory }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: 'blue' }}>
            <CssBaseline />
            <Drawer PaperProps={{ sx: { backgroundColor: '#0014FF' } }} variant="permanent" open={open} sx={{ height: { sx: 'auto', md: '92vh' } }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        mt: 1, ml: .2, color: 'white',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {open ? (<div style={{ display: 'flex', alignItems: 'center' }}><img src={logo} alt="" height={45} /><Box sx={{ color: 'white', marginLeft: 1 }}>
                        {open ? 'BLUEBOX MEDIA' : ""}
                    </Box></div>) : ''}
                    <IconButton onClick={handleDrawerClose} sx={{
                        ...(!open && { display: 'none' }), color: 'white'
                    }}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />


                {
                    categories.map((category) => (
                        <button className='category-btn'
                            onClick={() => setSelectedCategory(category.name)}
                            style={{ background: category.name === selectedCategory && 'white', color: '#332FD0' }}
                            key={category.name}
                        >
                            <span className='category-icon' style={{ color: category.name === selectedCategory ? '#332FD0' : 'white' }}>{category.icon}</span>
                            <Box sx={{ display: open ? 'block' : 'none' }}>
                                <span style={{ color: category.name === selectedCategory ? '#1363DF' : 'white' }}>{category.name}</span>
                            </Box>
                        </button>
                    ))
                }
                <Divider />
                {open ? <Typography className='copyright' variant='body2' sx={{ ml: .5, mt: 1.5, color: 'white' }}>
                    Copyright BlueBox Media
                </Typography> : ''}
            </Drawer>

        </Box>
    );
}