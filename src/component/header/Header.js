import React from 'react';
// import { AppBar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Accordion from '@material-ui/core/Accordion';
import Drawer from '@material-ui/core/Drawer';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    navlist: {
        padding: theme.spacing(1, 1.5),
    },
    mobilenavelist: {
        width: 250,
    },
    mobilelistitem: {
        padding: theme.spacing(1, 1.5)
    },
    accordion: {
        marginTop: 0,
    }
}));

export default function DesktopHeader(props) {
    const classes = useStyles();
    const [openhome, setOpenHome] = React.useState(false)
    const [openmenu1, setOpenMenu1] = React.useState(false)
    const [openmenu2, setOpenMenu2] = React.useState(false)
    const [openmenu3, setOpenMenu3] = React.useState(false)
    const [openmenu4, setOpenMenu4] = React.useState(false)
    const [mobilelist, setMobileList] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false)
    const home_anchor_ref = React.useRef(null)
    const menu1_anchor_ref = React.useRef(null)
    const menu2_anchor_ref = React.useRef(null)
    const menu3_anchor_ref = React.useRef(null)
    const menu4_anchor_ref = React.useRef(null)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const toggleDrawer = (mobilelist) => (e) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        setMobileList(mobilelist)
    }
    const logout = () => {
        localStorage.setItem('jwt', '')
    }
    const haddleToggle = (e) => {
        if (e.target.parentElement.id === 'menu-home') {
            console.log(props.token)
            handleClose();
            setOpenHome((openhome) => !openhome);
        }
        if (e.target.parentElement.id === 'menu-menu1') {
            handleClose();
            setOpenMenu1((openmenu1) => !openmenu1);
        }
        if (e.target.parentElement.id === 'menu-menu2') {
            handleClose();
            setOpenMenu2((openmenu2) => !openmenu2);
        }
        if (e.target.parentElement.id === 'menu-menu3') {
            handleClose();
            setOpenMenu3((openmenu3) => !openmenu3);
        }
        if (e.target.parentElement.id === 'menu-menu4') {
            handleClose();
            setOpenMenu4((openmenu4) => !openmenu4);
        }
    }
    const handleClose = () => {
        setOpenHome(false)
        setOpenMenu1(false)
        setOpenMenu2(false)
        setOpenMenu3(false)
        setOpenMenu4(false)
    }
    const handleListKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            handleClose()
        }
    }
    return (
        <React.Fragment>
            {/* <AppBar position="static"> */}
            <Toolbar className={`justify-between bg-blue-100`}>
                <Box className="flex-grow">
                    <Box
                        component="img"
                        src="./logo.png"
                        className="w-8 h-8 cursor-pointer"
                    />
                </Box>
                <Box className={`hidden sm:block mr-6`}>
                    <Button
                        id="menu-home"
                        ref={home_anchor_ref}
                        aria-controls="menu-list-home"
                        href="#"
                        color="secondary"
                        underline="none"
                        className={`text-lg hover:text-red-500  ${classes.navlist}`}
                        onClick={haddleToggle}
                    >
                        Home
                    </Button>
                    <Popper
                        open={openhome}
                        anchorEl={home_anchor_ref.current}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={openhome}
                                    id="menu-list-home"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link href="/home" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                    <Button
                        id="menu-menu1"
                        ref={menu1_anchor_ref}
                        aria-controls="menu-list-menu1"
                        href="#"
                        color="secondary"
                        underline="none"
                        className={`text-lg hover:text-red-500  ${classes.navlist}`}
                        onClick={haddleToggle}
                    >
                        Menu1
                    </Button>
                    <Popper open={openmenu1} anchorEl={menu1_anchor_ref.current}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={openmenu1}
                                    id="menu-list-menu1"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                    <Button
                        id="menu-menu2"
                        ref={menu2_anchor_ref}
                        aria-controls="menu-list-menu2"
                        href="#"
                        color="secondary"
                        underline="none"
                        className={`text-lg hover:text-red-500  ${classes.navlist}`}
                        onClick={haddleToggle}
                    >
                        Menu2
                    </Button>
                    <Popper open={openmenu2} anchorEl={menu2_anchor_ref.current}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={openmenu2}
                                    id="menu-list-menu2"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                    <Button
                        id="menu-menu3"
                        ref={menu3_anchor_ref}
                        aria-controls="menu-list-menu3"
                        href="#"
                        color="secondary"
                        underline="none"
                        className={`text-lg hover:text-red-500  ${classes.navlist}`}
                        onClick={haddleToggle}
                    >
                        Menu3
                    </Button>
                    <Popper open={openmenu3} anchorEl={menu3_anchor_ref.current}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={openmenu3}
                                    id="menu-list-menu3"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="#" underline="none">
                                            Home
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                    <Button
                        id="menu-menu4"
                        ref={menu4_anchor_ref}
                        aria-controls="menu-list-menu4"
                        href="#"
                        color="secondary"
                        underline="none"
                        className={`text-lg hover:text-red-500  ${classes.navlist}`}
                        onClick={haddleToggle}
                    >
                        Menu4
                    </Button>
                    <Popper open={openmenu4} anchorEl={menu4_anchor_ref.current}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={openmenu4}
                                    id="menu-list-menu4"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link href="/pricing" underline="none">
                                            Pricing
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="/album" underline="none">
                                            Album
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="/stickyfooter" underline="none">
                                            StickyFooter
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="/checkout" underline="none">
                                            Checkout
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="/googlemap" underline="none">
                                            Google Map
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href="/creditcard" underline="none">
                                            Credit Card
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                </Box>
                <Box className={`sm:hidden mr-6`} onClick={toggleDrawer(true)}>
                    <IconButton className={`focus:outline-none`}>
                        <MenuIcon color="secondary" />
                    </IconButton>
                </Box>
                <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    startIcon={<PersonIcon />}
                    className={`focus:outline-none`}
                    href="/signin"
                >
                    Login
                </Button>
                <Button onClick={logout}>Logout</Button>
                <Drawer anchor="left" open={mobilelist} onClose={toggleDrawer(false)}>
                    <Box
                        className={classes.mobilenavelist}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <Accordion
                            className={classes.accordion}
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography color="secondary" className={`uppercase`}>
                                    Home
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={`flex-col`}>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="/home" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.accordion}
                            expanded={expanded === 'panel2'}
                            onChange={handleChange('panel2')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography color="secondary" className={`uppercase`}>
                                    Menu1
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={`flex-col`}>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.accordion}
                            expanded={expanded === 'panel3'}
                            onChange={handleChange('panel3')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography color="secondary" className={`uppercase`}>
                                    Menu2
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={`flex-col`}>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.accordion}
                            expanded={expanded === 'panel4'}
                            onChange={handleChange('panel4')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography color="secondary" className={`uppercase`}>
                                    Menu3
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={`flex-col`}>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none">
                                        Home
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel5'}
                            onChange={handleChange('panel5')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography color="secondary" className={`uppercase`}>
                                    Menu4
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={`flex-col`}>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="/pricing" underline="none">
                                        Pricing
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="/album" underline="none">
                                        Album
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="/stickyfooter" underline="none">
                                        StickyFooter
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="/checkout" underline="none">
                                        Checkout
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="/googlemap" underline="none">
                                        Google Map
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="/creditcard" underline="none">
                                        Credit Card
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Drawer>
            </Toolbar>
            {/* </AppBar> */}
        </React.Fragment>
    );
}
