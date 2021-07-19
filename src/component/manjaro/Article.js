import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";


const useStyles = createStyles((theme) =>({
    title: {
        fontSize: '1.5em',
        marginBottom: theme.spacing(2)
    },
    text_bg: {
        backgroundColor: '#80cbc46b'
    },
    mt_10: {
        marginTop: theme.spacing(5)
    },
    mb_10: {
        marginBottom: theme.spacing(5)
    },
    fontawesome_icon: {
        fontSize: 21,
    },
    dollar_icon: {
        color: '#ff6f00'
    },
    download_icon: {
        color: '#d81b60'
    },
    users_icon: {
        color: '#2196f3'
    },
    compact_disc_icon: {
        color: '#d84315'
    },
    list_item: {
        width: 54,
        height: 54,
        justifyContent: 'center',
        transition: '1s',
        padding: 0
    },
    list: {
        position: 'absolute',
        padding: 0,
        transform: 'translateY(-50%)',
        marginRight: 0,
        ["@media (min-width: 768px)"]: {
            marginRight: 170,
       }
    },
    slide_before: {
        transform: 'translateX(630px)'
    },
    slide_after: {
        transform: 'translateX(0)'
    },
    icon: {
        width: '54px !important',
        height: '54px',
        padding: '16px',
        fontSize: '1.1em',
        backgroundColor: '#f0f0f0',
        '&:hover': {
            color: 'white'
        }
    },
    gitlab: {
        color: '#e24329',
        '&:hover': {
            backgroundColor: '#e24329'
        }
    },
    twitter: {
        color: '#1da1f2',
        '&:hover': {
            backgroundColor: '#1da1f2'
        } 
    },   
    youtube: {
        color: '#dd2c00',
        '&:hover': {
            backgroundColor: '#dd2c00'
        }
    },
    facebook: {
        color: '#44609c',
        '&:hover': {
            backgroundColor: '#44609c',
        },
    },
}));

class Article extends React.Component {
    constructor() {
        super();
        this.state={
            icon: [
                { icon_name: faGitlab, href: 'https://gitlab.manjaro.org' }, 
                { icon_name: faTwitter, href: 'https://twitter.com/ManjaroLinux' }, 
                { icon_name: faYoutube, href: 'https://www.youtube.com/channel/UCdGFLV7h9RGeTUX7wa5rqGw' }, 
                { icon_name: faFacebookF, href: 'https://www.facebook.com/ManjaroLinux' }
            ],
            icon_load: false,
        }
        this.handleLoad = this.handleLoad.bind(this)
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }
    handleLoad = () => {
        setTimeout(() =>(
            this.setState({ icon_load: true })
        ), 1500)
    }
    render() {
        const { classes } = this.props
        const { icon_load } = this.state
        return(
            <React.Fragment>
                <Box className={`container sm:py-16 m-auto relative`}>
                    <List className={`flex ${classes.list} top-0 right-0 z-10 mr-40`}>
                        {this.state.icon.map((icon, index) => (
                            <ListItem
                                key = {index}
                                className={`${classes.list_item} 
                                    ${icon_load ? classes.slide_after : classes.slide_before } 
                                    rounded-full mx-2 cursor-pointer
                                `} 
                                style={{ transitionDelay: `${index * 300}ms` }}
                            >
                                <ListItemIcon className={`justify-center`}>
                                    <IconButton
                                        href={icon.href}
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            className={`
                                                rounded-full ${classes.icon}
                                                ${index === 0 ? classes.gitlab : index === 1 ? classes.twitter : index === 2 ? classes.youtube : classes.facebook }
                                            `}
                                            icon={icon.icon_name}
                                        />
                                    </IconButton>
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                    <Grid 
                        container 
                        component={Paper}
                        className={`py-4`}
                    >
                        <Grid
                            item
                            className={`px-4 w-full md:w-1/2 lg:border-r divide-solid border-green-600 flex flex-col`}
                        >
                            <Typography
                                component="div"
                                color="textPrimary"
                                className={`${classes.title} ${classes.mt_10} w-5 flex`}
                            >
                                <Box 
                                    component="img"
                                    src="./img/logo.svg"
                                    className={`mr-3`}
                                >
                                </Box>
                                Manjaro
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.text_bg} ${classes.mb_10} p-2 text-justify`}
                            >
                                Is an accessible, friendly, open-source operating system. 
                                Providing all the benefits of cutting-edge software combined 
                                with a focus on getting started quickly, automated tools to 
                                require less manual intervention, and help readily available 
                                when needed. Manjaro is suitable for both newcomers and 
                                experienced computer users.
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.text_bg} ${classes.mb_10} p-2 text-justify`}
                            >
                                Unlike proprietary operating systems you have full control 
                                over your hardware without restrictions. This makes Manjaro 
                                a powerful Operating System ideal in home, work, and 
                                development environments.
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.text_bg} ${classes.mb_10} p-2 text-justify`}
                            >
                                It is easily possible to run many popular Windows 
                                applications, using compatibility software 
                                such as <Link href="https://www.winehq.org" className={`hover:text-green-500`}>
                                Wine</Link>, <Link href="https://www.playonlinux.com" className={`hover:text-green-500`}>
                                PlayonLinux</Link> or <Link href="https://www.protondb.com" className={`hover:text-green-500`}>
                                Proton</Link> via <Link href="https://store.steampowered.com/about" className={`hover:text-green-500`}>
                                Steam</Link>. The examples given here are far from comprehensive!
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.text_bg} ${classes.mb_10} p-2 text-justify`}
                            >
                                Representing a perfect middle-ground for those who want 
                                good performance, full control, and cutting-edge software 
                                but also a degree of software stability.
                            </Typography>
                        </Grid>
                        <Grid 
                            item
                            className={`px-4 w-full md:w-1/2 flex flex-col`}
                        >
                            <Typography
                                component="div"
                                color="textPrimary"
                                className={`${classes.title} flex items-center`}
                            >
                                <FontAwesomeIcon 
                                    icon={faDollarSign} 
                                    className={`${classes.fontawesome_icon} ${classes.dollar_icon} mr-3`}
                                />
                                Free is better
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.mb_10} text-justify`}
                            >
                                Manjaro will always be completely free. We create it, 
                                so we can have a operating system that is easy to use 
                                and stable. You the user, are the main focus, we do not take 
                                control away from you and respect your privacy.
                            </Typography>
                            <Typography
                                component="div"
                                color="textPrimary"
                                className={`${classes.title} flex items-center`}
                            >
                                <FontAwesomeIcon 
                                    icon={faDownload} 
                                    className={`${classes.fontawesome_icon} ${classes.download_icon} mr-3`}
                                />
                                Install Anything
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.mb_10} text-justify`}
                            >
                                There are thousands of software applications available 
                                in the software center, including fully compatible 
                                equivalents of popular Windows software such as MS 
                                Office. Any additional software is also completely free. 
                                Searching for applications to install on the internet 
                                is not necessary.
                            </Typography>
                            <Typography
                                component="div"
                                color="textPrimary"
                                className={`${classes.title} flex items-center`}
                            >
                                <FontAwesomeIcon 
                                    icon={faUsers} 
                                    className={`${classes.fontawesome_icon} ${classes.users_icon} mr-3`}
                                />
                                Great Community
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.mb_10} text-justify`}
                            >
                                We have a polite, friendly and cheerful <Link href="https://forum.manjaro.org" className={`hover:text-green-500`}>
                                Forum</Link>, where everyone is welcoming and supportive. 
                                The forum is the right place to share knowledge and talk Linux 
                                with the community we all&nbsp;
                                <FontAwesomeIcon 
                                    icon={faHeart} 
                                    className={`text-red-600`}
                                />
                                &nbsp;it.
                            </Typography>
                            <Typography
                                component="div"
                                color="textPrimary"
                                className={`${classes.title} flex items-center`}
                            >
                                <FontAwesomeIcon 
                                    icon={faCompactDisc} 
                                    className={`${classes.fontawesome_icon} ${classes.compact_disc_icon} mr-3`}
                                />
                                Availability
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.mb_10} text-justify`}
                            >
                                Manjaro is available for 64-Bit architectures. <Link href="https://www.xfce.org" className={`hover:text-green-500`}>
                                XFCE</Link>, <Link href="https://kde.org" className={`hover:text-green-500`}>
                                KDE</Link> and <Link href="https://www.gnome.org/gnome-3" className={`hover:text-green-500`}>Gnome</Link> <Link href="#" className={`hover:text-green-500`}>
                                editions</Link> are officially supported. Other flavors are maintained by the community.
                            </Typography>
                            <Typography
                                color="textPrimary"
                                className={`${classes.mb_10} text-justify`}
                            >
                                ARM editions are specifically available for 
                                certain devices. Pre-built images can be downloaded.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(Article);