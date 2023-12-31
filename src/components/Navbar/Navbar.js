import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { ArrowDropDown, Notifications } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material';

const profileImageAddress = 'https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius + 4,
    backgroundColor: theme.palette.primary.grey,
    '&:hover': {
        backgroundColor: theme.palette.primary.grey,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    '@media (max-width:992px)': {
        width: '40%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
        },
    },
}));

const greenDotStyle = {
    backgroundColor: '#55bc55',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    position: 'absolute',
    top: '.5rem',
    right: '.5rem',
};

const notificationIconStyle = {
    margin: '0 1rem',
    '@media (max-width:992px)': {
        display: 'none',
    },
}

const Navbar = (props) => {
    const theme = useTheme();
    const buttonStyle = {
        background: theme.palette.primary.main,
        color: 'white',
        '&:hover': {
            background: theme.palette.primary.main,
            color: 'white',
        }
    }

    const handleRandamization = () => {
        props.randomize();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${props.drawerWidth}px)`,
                    ml: `${props.drawerWidth}px`,
                    background: 'white',
                    '@media (max-width:992px)': {
                        width: '100%',
                    },
                }}
            >
                <Toolbar sx={{
                    '@media (max-width:992px)': {
                        justifyContent: 'center',
                    },
                }}>
                    <Box sx={{
                        flexGrow: 1,
                        '@media (max-width:992px)': {
                            display: 'none',
                        },
                    }} />
                    <Box sx={{
                        display: 'flex', '@media (max-width:992px)': {
                            gap: '1rem',
                            flexDirection: 'row-reverse'
                        },
                    }}>
                        <Button
                            onClick={() => handleRandamization()}
                            data-testid="randomize-btn"
                            sx={{
                                '@media (max-width:992px)': {
                                    padding: '0 .5rem',
                                },
                                ...buttonStyle
                            }}
                        >Randomize</Button>
                        <Search role='searchbox'>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <IconButton sx={notificationIconStyle}>
                            <Badge
                                badgeContent={
                                    <div style={greenDotStyle} />
                                }
                                overlap="circular"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <Notifications sx={{ color: 'black' }} />
                            </Badge>
                        </IconButton>
                        <IconButton sx={{ p: 0, borderRadius: '10px' }} role='profilebutton'>
                            <Avatar alt="Sam" src={profileImageAddress} sx={{ width: '30px', height: '30px' }} />
                            <ArrowDropDown sx={{ marginLeft: '.5rem' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;