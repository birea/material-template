import React from 'react';
import { AppBar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
    hidden: {
        display: 'none'
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        transition: '0.7s',
    },
    scroll_appbar: {
        backgroundColor: '#44883c',
        paddingTop: '8px',
    },
    toolBar: {
        minHeight: '42px'
    },
    font_family: {
        fontFamily: 'comfortaa,cursive',
    },
    navbar_brand: {
        fontSize: '1.6em',
        fontWeight: '700'
    },
    page_nav: {
        fontWeight: '700',
        fontSize: '0.8571em',
    },
    toolTip: {
        fontSize: 16,
        fontFamily: 'comfortaa,cursive',
        background: 'white',
        padding: '8px 12px',
        color: '#111'
    },
    toolTip_arrow: {
        color: 'white',
    },
    navlist: {
        color: 'white',
        marginLeft: 5,
        '&:hover': {
            backgroundColor: 'rgba(13,95,79,.8)',
        }
    },
    mobile_navlist: {
        marginLeft: 0,
        marginBottom: 5,
        padding: 12,
        justifyContent: 'left',
    },
    scroll_navlist: {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }
    },
    menu_list: {
        padding: '8px 24px',
        '&:hover': {
            backgroundColor: 'rgba(13,95,79,.8)',
            '& $menu_list_text': {
                color: 'white',
            },
            '& $menu_list_icon': {
                color: 'white',
            }
        }
    },
    menu_list_text: {
        color: 'rgb(86, 87, 88)',
        fontSize: '0.8571em',
    },
    menu_list_icon: {
        color: '#44883c',
        marginRight: 5,
        fontSize: '0.8571em',
    },
    mobile_menu_list: {
        minHeight: 34,
        padding: '8px 24px 8px 40px',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }
    },
    mobile_menu_item: {
        fontSize: '0.8571em',
        color: 'white',
        
    },
    menu_list_title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700',
        padding: '8px 24px 13px',
        color: '#565758',
        borderBottom: '1px solid #44883c',
    },
    mobile_menu_title: {
        textAlign: 'left',
        fontSize: '0.8em',
        color: 'white',
        textTransform: 'uppercase',
        padding: '8px 24px',
    },
    menu_tooltip: {
        zIndex: '20',
        top: '17px!important',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '-5px',
            right: 10,
            color: '#FFFFFF',
            borderBottom: '.4em solid',
            borderRight: '.4em solid transparent',
            borderLeft: '.4em solid transparent'
        }
    },
    arrow_drop_down: {
        transition: '0.3s',
        transform: 'rotate(0)'
    },
    select_arrow_drop_down: {
        transform: 'rotate(180deg)'
    },
    mobile_panel: {
        width: 300,
        backgroundColor: '#44883c',
    },
    more_list: {
        height: 142, 
        overflowY: 'scroll'
    },
    headerTransform: {
        transform: "translateX(-300px)",
    },
    navbarToggler: {
        width: 37, 
        height: 27,
        padding: '4px 12px',
        '&:hover': {
            '& $Bar2': {
                width: 22,
            }
        }
    },
    toggled: {
        '& $Bar1': {
            top: 8,
            transform: 'rotate(135deg)',
            animation: '$topbar-x 500ms 0s',
        },
        '& $Bar2': {
            opacity: 0,
        },
        '& $Bar3': {
            bottom: 8,
            transform: 'rotate(-135deg)',
            animation: '$bottombar-x 500ms 0s',
        },
        '$navbarToggleBar': {
            width: 24,
        }
    },
    navbarToggleBar: {
        position: 'relative',
        width: '22px',
        height: 1,
        backgroundColor: 'white',
        display: 'block',
    },
    Bar1: {
        top: 0,
        animation: '$topbar-back 500ms 0s',
    },
    Bar2: {
        width: 17,
        transition: 'width .2s linear',
        marginTop: 7,
    },
    Bar3: {
        bottom: 0,
        marginTop: 7,
        animation: '$bottombar-back 500ms 0s',
    },
    "@keyframes topbar-back": {
        "0%": {
            top: 8,
            transform: 'rotate(135deg)'
        },
        "45%": {
            transform: 'rotate(-10deg)'
        },
        "75%": {
            transform: 'rotate(5deg)'
        },
        "100%": {
            top: 0,
            transform: 'rotate(0)'
        }
    },
    "@keyframes topbar-x": {
        "0%": {
            top: 0,
            transform: 'rotate(0deg)'
        },
        "45%": {
            top: 8,
            transform: 'rotate(145deg)'
        },
        "75%": {
            transform: 'rotate(130deg)'
        },
        "100%": {
            transform: 'rotate(135deg)'
        }
    },
    "@keyframes bottombar-back": {
        "0%": {
            bottom: 8,
            transform: 'rotate(-135deg)'
        },
        "45%": {
            transform: 'rotate(10deg)'
        },
        "75%": {
            transform: 'rotate(-5deg)'
        },
        "100%": {
            bottom: 0,
            transform: 'rotate(0)'
        }
    },
    "@keyframes bottombar-x": {
        "0%": {
            bottom: 0,
            transform: 'rotate(0deg)'
        },
        "45%": {
            bottom: 8,
            transform: 'rotate(-145deg)'
        },
        "75%": {
            transform: 'rotate(-130deg)'
        },
        "100%": {
            transform: 'rotate(-135deg)'
        }
    },
});

export default function Header(props) {
    const classes = useStyles();
    const [openhome, setOpenHome] = React.useState(false)
    const [openmenu1, setOpenMenu1] = React.useState(false)
    const [openmenu2, setOpenMenu2] = React.useState(false)
    const [mobileopenhome, setMobileopenHome] = React.useState(false)
    const [mobileopenmenu1, setMobileopenMenu1] = React.useState(false)
    const [mobileopenmenu2, setMobileopenMenu2] = React.useState(false)
    const [scroll, setScroll] = React.useState(false)
    const [mobilelist, setMobileList] = React.useState(false)
    const home_anchor_ref = React.useRef(null)
    const menu1_anchor_ref = React.useRef(null)
    const menu2_anchor_ref = React.useRef(null)
    const toggleDrawer = (mobilelist) => (e) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        setMobileList(mobilelist)
    }
    const haddleToggle = (e) => {
        if (e.target.parentElement.id === 'menu-home' ) {
            handleClose();
            setOpenHome((openhome) => !openhome);
        }
        if (e.target.parentElement.id === 'mobile-menu-home') {
            setMobileopenHome((mobileopenhome) => !mobileopenhome);
            setMobileopenMenu1(false)
            setMobileopenMenu2(false)
        }
        if (e.target.parentElement.id === 'menu-menu1' ) {
            handleClose();
            setOpenMenu1((openmenu1) => !openmenu1);
        }
        if (e.target.parentElement.id === 'mobile-menu-menu1') {
            setMobileopenMenu1((mobileopenmenu1) => !mobileopenmenu1);
            setMobileopenHome(false)
            setMobileopenMenu2(false)
        }
        if (e.target.parentElement.id === 'menu-menu2' ) {
            handleClose();
            setOpenMenu2((openmenu2) => !openmenu2);
        }
        if (e.target.parentElement.id === 'mobile-menu-menu2') {
            setMobileopenMenu2((mobileopenmenu2) => !mobileopenmenu2);
            setMobileopenHome(false)
            setMobileopenMenu1(false)
        }
    }
    const handleClose = () => {
        setOpenHome(false)
        setOpenMenu1(false)
        setOpenMenu2(false)
        setMobileopenHome(false)
        setMobileopenMenu1(false)
        setMobileopenMenu2(false)
    }
    const handleListKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            handleClose()
        }
    }
    window.addEventListener('scroll', (event) => {
        if (window.scrollY > 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })
    return (
        <React.Fragment>
            <AppBar
                className={`
                    ${classes.appBar} pt-5 px-4 pb-2
                    ${scroll ? classes.scroll_appbar : ''}
                    ${mobilelist ? classes.headerTransform : ''}
                `}
            >
                <Toolbar className={`${classes.toolBar} container m-auto justify-between`}>
                    <Box>
                        <Tooltip
                            classes={{ tooltip: classes.toolTip, arrow: classes.toolTip_arrow }}
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 500 }}
                            title="manjaro.org"
                            arrow
                        >
                            <Typography
                                component="a"
                                className={`${classes.font_family} ${classes.navbar_brand} pr-1 cursor-pointer`}
                            >
                                manjaro
                            </Typography>
                        </Tooltip>
                        <Typography
                            component="span"
                            className={`${classes.font_family} ${classes.page_nav} uppercase cursor-default`}
                        >
                            - enjoy the simplicity
                        </Typography>
                    </Box>
                    <Box className={`hidden lg:block mr-6`}>
                        <Button
                            className={`${classes.navlist} ${scroll ? '' : classes.hidden}`}
                        >
                            Download
                        </Button>
                        <Button
                            id="menu-home"
                            ref={home_anchor_ref}
                            aria-controls="menu-list-home"
                            className={`${classes.navlist} ${scroll ? classes.scroll_navlist : ''}`}
                            onClick={haddleToggle}
                        >
                            Features
                            <ArrowDropDownIcon
                                className={`${classes.arrow_drop_down} ${openhome ? classes.select_arrow_drop_down : ''}`}
                            />
                        </Button>
                        <Popper
                            placement="bottom-end"
                            open={openhome}
                            anchorEl={home_anchor_ref.current}
                            className={classes.menu_tooltip}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={openhome}
                                        id="menu-list-home"
                                        onKeyDown={handleListKeyDown}
                                        onClick={handleClose}
                                    >
                                        <MenuItem
                                            className={`${classes.menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.menu_list_text}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                    className={`${classes.menu_list_icon}`}
                                                />
                                                Under your control
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.menu_list_text}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCog}
                                                    className={`${classes.menu_list_icon}`}
                                                />
                                                Configured with one click
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.menu_list_text}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUsers}
                                                    className={`${classes.menu_list_icon}`}
                                                />
                                                Useful for everyone
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.menu_list_text}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPaperPlane}
                                                    className={`${classes.menu_list_icon}`}
                                                />
                                                Useful for everyone
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Popper>
                        <Button
                            className={`${classes.navlist} ${scroll ? classes.scroll_navlist : ''}`}
                        >
                            Donate
                        </Button>
                        <Button
                            id="menu-menu1"
                            ref={menu1_anchor_ref}
                            aria-controls="menu-list-menu1"
                            className={`${classes.navlist} ${scroll ? classes.scroll_navlist : ''}`}
                            onClick={haddleToggle}
                        >
                            Shop
                            <ArrowDropDownIcon 
                                className={`${classes.arrow_drop_down} ${openmenu1 ? classes.select_arrow_drop_down : ''}`}
                            />
                        </Button>
                        <Popper
                            placement="bottom-end"
                            open={openmenu1}
                            anchorEl={menu1_anchor_ref.current}
                            className={classes.menu_tooltip}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={openmenu1}
                                        id="menu-list-menu1"
                                        onKeyDown={handleListKeyDown}
                                        onClick={handleClose}
                                    >
                                        <MenuItem
                                            className={`${classes.menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.menu_list_text}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faServer}
                                                    className={`${classes.menu_list_icon}`}
                                                />
                                                Manjaro CloudComputing
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.menu_list_text}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLaptop}
                                                    className={`${classes.menu_list_icon}`}
                                                />
                                                Manjaro Hardware
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.menu_list_text}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTshirt}
                                                    className={`${classes.menu_list_icon}`}
                                                />
                                                Merch & Accessories(EU)
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.menu_list_text}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTshirt}
                                                    className={`${classes.menu_list_icon}`}
                                                />
                                                Merch & Accessories(ES)
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Popper>
                        <Button
                            className={`${classes.navlist} ${scroll ? classes.scroll_navlist : ''}`}
                        >
                            News
                        </Button>
                        <Button
                            id="menu-menu2"
                            ref={menu2_anchor_ref}
                            aria-controls="menu-list-menu2"
                            className={`${classes.navlist} ${scroll ? classes.scroll_navlist : ''}`}
                            onClick={haddleToggle}
                        >
                            More
                            <ArrowDropDownIcon 
                                className={`${classes.arrow_drop_down} ${openmenu2 ? classes.select_arrow_drop_down : ''}`}
                            />
                        </Button>
                        <Popper
                            open={openmenu2}
                            anchorEl={menu2_anchor_ref.current}
                            placement="bottom-end"
                            className={classes.menu_tooltip}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <Box
                                        component={MenuList}
                                        autoFocusItem={openmenu2}
                                        id="menu-list-menu2"
                                        onKeyDown={handleListKeyDown}
                                        onClick={handleClose}
                                        className="flex"
                                    >
                                        <Box className="mx-3">
                                            <Typography className={`${classes.menu_list_title}`}>
                                                Lists
                                            </Typography>
                                            <MenuList>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Security
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        General
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={classes.menu_list_text}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Packages
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Testing
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Development
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Mirrors
                                                    </Link>
                                                </MenuItem>
                                            </MenuList>
                                        </Box>
                                        <Box className="mx-3">
                                            <Typography className={`${classes.menu_list_title}`}>
                                                Support
                                            </Typography>
                                            <MenuList>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faShoePrints}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        First Steps
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faAmbulance}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Common Problems
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faBookOpen}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        User Guide
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faHandsHelping}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Forum
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faUserGraduate}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Wiki
                                                    </Link>
                                                </MenuItem>
                                            </MenuList>
                                        </Box>
                                        <Box className="mx-3">
                                            <Typography className={`${classes.menu_list_title}`}>
                                                Packages
                                            </Typography>
                                            <MenuList>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faGlobe}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Mirrors
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCompass}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Discover Software
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faBox}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Branch Compare
                                                    </Link>
                                                </MenuItem>
                                            </MenuList>
                                        </Box>
                                        <Box className="mx-3">
                                            <Typography className={`${classes.menu_list_title}`}>
                                                About
                                            </Typography>
                                            <MenuList>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faUsers}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Partners
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faUsers}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Team
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem
                                                    className={`${classes.menu_list}`}
                                                >
                                                    <Link
                                                        href="#"
                                                        underline="none"
                                                        className={`${classes.menu_list_text}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faLinux}
                                                            className={`${classes.menu_list_icon}`}
                                                        />
                                                        Linux
                                                    </Link>
                                                </MenuItem>
                                            </MenuList>
                                        </Box>
                                    </Box>
                                </ClickAwayListener>
                            </Paper>
                        </Popper>
                    </Box>
                    <Box className={`lg:hidden mr-6`} onClick={toggleDrawer(true)}>
                        <Box
                            className={`${classes.navbarToggler} ${mobilelist ? classes.toggled : ''} cursor-pointer`}
                        >
                            <Typography
                                component="span"
                                className={`${classes.navbarToggleBar} ${classes.Bar1} block`}
                            ></Typography>
                            <Typography
                                component="span"
                                className={`${classes.navbarToggleBar} ${classes.Bar2} block`}
                            ></Typography>
                            <Typography
                                component="span"
                                className={`${classes.navbarToggleBar} ${classes.Bar3} block`}
                            ></Typography>
                        </Box>
                    </Box>
                    <Drawer 
                        anchor="right" 
                        open={mobilelist} 
                        onClose={toggleDrawer(false)}
                    >
                        <Box
                            className={`${classes.mobile_panel} h-full flex flex-col pt-14 px-4`}
                        >
                            <Button
                                className={`${classes.navlist} ${classes.scroll_navlist} ${classes.mobile_navlist}`}
                            >
                                Download
                            </Button>
                            <Button
                                id="mobile-menu-home"
                                className={`${classes.navlist} ${classes.scroll_navlist} ${classes.mobile_navlist}`}
                                onClick={haddleToggle}
                            >
                                Features
                                <ArrowDropDownIcon
                                    className={`${classes.arrow_drop_down} ${mobileopenhome ? classes.select_arrow_drop_down : ''}`}
                                />
                            </Button>
                            <MenuList
                                onClick={handleClose}
                                className={`${mobileopenhome ? '' : 'hidden' }`}
                            >
                                <MenuItem
                                    className={`${classes.mobile_menu_list}`}
                                >
                                    <Link
                                        href="#"
                                        underline="none"
                                        className={`${classes.mobile_menu_item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faThumbsUp}
                                            className={`${classes.mobile_menu_item} mr-2`}
                                        />
                                        Under your control
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    className={`${classes.mobile_menu_list}`}
                                >
                                    <Link
                                        href="#"
                                        underline="none"
                                        className={`${classes.mobile_menu_item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faCog}
                                            className={`${classes.mobile_menu_item} mr-2`}
                                        />
                                        Configured with one click
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    className={`${classes.mobile_menu_list}`}
                                >
                                    <Link
                                        href="#"
                                        underline="none"
                                        className={`${classes.mobile_menu_item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faUsers}
                                            className={`${classes.mobile_menu_item} mr-2`}
                                        />
                                        Useful for everyone
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    className={`${classes.mobile_menu_list}`}
                                >
                                    <Link
                                        href="#"
                                        underline="none"
                                        className={`${classes.mobile_menu_item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            className={`${classes.mobile_menu_item} mr-2`}
                                        />
                                        Useful for everyone
                                    </Link>
                                </MenuItem>
                            </MenuList>
                            <Button
                                className={`${classes.navlist} ${classes.scroll_navlist} ${classes.mobile_navlist}`}
                            >
                                Donate
                            </Button>
                            <Button
                                id="mobile-menu-menu1"
                                className={`${classes.navlist} ${classes.scroll_navlist} ${classes.mobile_navlist}`}
                                onClick={haddleToggle}
                            >
                                Shop
                                <ArrowDropDownIcon 
                                    className={`${classes.arrow_drop_down} ${mobileopenmenu1 ? classes.select_arrow_drop_down : ''}`}
                                />
                            </Button>
                            <MenuList
                                onClick={handleClose}
                                className={`${mobileopenmenu1 ? '' : 'hidden' }`}
                            >
                                <MenuItem
                                    className={`${classes.mobile_menu_list}`}
                                >
                                    <Link
                                        href="#"
                                        underline="none"
                                        className={`${classes.mobile_menu_item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faServer}
                                            className={`${classes.mobile_menu_item} mr-2`}
                                        />
                                            Manjaro CloudComputing
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    className={`${classes.mobile_menu_list}`}
                                >
                                    <Link
                                        href="#"
                                        underline="none"
                                        className={`${classes.mobile_menu_item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faLaptop}
                                            className={`${classes.mobile_menu_item} mr-2`}
                                        />
                                            Manjaro Hardware
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    className={`${classes.mobile_menu_list}`}
                                >
                                    <Link
                                        href="#"
                                        underline="none"
                                        className={`${classes.mobile_menu_item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTshirt}
                                            className={`${classes.mobile_menu_item} mr-2`}
                                        />
                                        Merch & Accessories(EU)
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    className={`${classes.mobile_menu_list}`}
                                >
                                    <Link
                                        href="#"
                                        underline="none"
                                        className={`${classes.mobile_menu_item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTshirt}
                                            className={`${classes.mobile_menu_item} mr-2`}
                                        />
                                        Merch & Accessories(ES)
                                    </Link>
                                </MenuItem>
                            </MenuList>
                            <Button
                                className={`${classes.navlist} ${classes.scroll_navlist} ${classes.mobile_navlist}`}
                            >
                                News
                            </Button>
                            <Button
                                id="mobile-menu-menu2"
                                className={`${classes.navlist} ${classes.scroll_navlist} ${classes.mobile_navlist}`}
                                onClick={haddleToggle}
                            >
                                More
                                <ArrowDropDownIcon 
                                    className={`${classes.arrow_drop_down} ${mobileopenmenu2 ? classes.select_arrow_drop_down : ''}`}
                                />
                            </Button>
                            <Box
                                component={MenuList}
                                onClick={handleClose}
                                className={`${classes.more_list} ${mobileopenmenu2 ? '' : 'hidden' }`}
                            >
                                <Box className="mx-3">
                                    <Typography className={`${classes.mobile_menu_title}`}>
                                        Lists
                                    </Typography>
                                    <MenuList>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Security
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                General
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Packages
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Testing
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Development
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Mirrors
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </Box>
                                <Box className="mx-3">
                                    <Typography className={`${classes.mobile_menu_title}`}>
                                        Support
                                    </Typography>
                                    <MenuList>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faShoePrints}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                First Steps
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faAmbulance}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Common Problems
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faBookOpen}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                User Guide
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faHandsHelping}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Forum
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUserGraduate}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Wiki
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </Box>
                                <Box className="mx-3">
                                    <Typography className={`${classes.mobile_menu_title}`}>
                                        Packages
                                    </Typography>
                                    <MenuList>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGlobe}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Mirrors
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCompass}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Discover Software
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faBox}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Branch Compare
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </Box>
                                <Box className="mx-3">
                                    <Typography className={`${classes.mobile_menu_title}`}>
                                        About
                                    </Typography>
                                    <MenuList>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUsers}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Partners
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUsers}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Team
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={`${classes.mobile_menu_list}`}
                                        >
                                            <Link
                                                href="#"
                                                underline="none"
                                                className={`${classes.mobile_menu_item}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLinux}
                                                    className={`${classes.mobile_menu_item} mr-2`}
                                                />
                                                Linux
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </Box>
                            </Box>
                        </Box>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}