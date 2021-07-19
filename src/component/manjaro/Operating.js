import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const useStyles = createStyles((theme) =>({
    panel: {
        position: 'relative',
        backgroundImage: `url(${"./img/bg10.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',    
    },
    before: {
        '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    },
    page: {
        height: '60vh',
        ["@media (min-width: 1024px)"]: {
             height: '96vh' 
        }
    },
    page_center: {
        position: 'relative',
        maxWidth: 672,
    },
    title: {
        margin: theme.spacing(4, 0),
        fontSize: '1.5em',
        fontWeight: '700'
    },
    text: {
        marginBottom: 15,
        padding: 14,
        backgroundColor: 'rgba(13,95,79,.8)'
    },
    fa_icon: {
        fontSize: '1.3em',
    },
    page_button: {
        fontSize: '0.8571em',
        padding: '11px 22px',
        marginRight: 5,
    },
    button_download: {
        border: '1px solid #bf360c',
        '&:hover': {
            backgroundColor: 'rgba(191,54,12,.8)'
        }
    },
    button_more: {
        border: '1px solid #0d5f4f',
        '&:hover': {
            backgroundColor: 'rgba(13,95,79,.8)'
        }
    },
    button_get: {
        border: '1px solid #54bb1a',
        '&:hover': {
            backgroundColor: 'rgba(84,187,26,.5)'
        }
    },
    button_img: {
        marginLeft: 10,
    },
    page_slide: {
        animation: `$slide 1500ms ${theme.transitions.easing.easeInOut}`
    },
    page_fade: {
        animation: `$fade 1000ms ${theme.transitions.easing.easeInOut}`
    },
    typedCursor: {
        animation: '$typedjsBlink 0.7s infinite',

    },
    "@keyframes typedjsBlink": {
        "50%": {
            opacity: 0
        },
    },
    "@keyframes slide": {
        "0%": {
            transform: "translateY(calc(100% + 280px))"
        },
        "100%": {
          transform: "translateY(0%)"
        }
    },
    "@keyframes fade": {
        "0%": {
            opacity: '1',
        },
        "100%": {
            opacity: '0',
        }
    },
}));

class Operation extends React.Component {
    constructor() {
        super();
        this.state = {
            slide_toggle: true,
            opacity: 1
        }
        this.slider = React.createRef()
        this.feature_anchorRef = React.createRef(null);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
     handleScroll = () => {
        if (window.scrollY < 50 ) {
            this.setState({ 
                slide_toggle: true,
                opacity: 1,
            });
        } else {
            this.setState({ 
                slide_toggle: false,
                opacity: 0,
            });
        }
    };
    render() {
        const { classes } = this.props
        const { slide_toggle, opacity } = this.state
        return(
            <Grid className={classes.panel}>
                <Grid className={classes.before}>
                    <Box className={`${classes.page} container px-4 m-auto flex justify-center items-center overflow-hidden`}>
                        <Box
                            className={`${ slide_toggle ? classes.page_slide : classes.page_fade }`}
                            style={{ opacity: opacity }}
                        >
                            <Box
                                className={`${classes.page_center} text-center`}
                            >
                                <Box
                                    component='img'
                                    src="./img/logo.svg"
                                    className={`w-24 h-24 m-auto`}
                                />
                                <Typography
                                    component="h1"
                                    className={`${classes.title} text-white`}
                                >
                                    Free Operation system for everyone
                                </Typography>
                                <Typography
                                    className={`${classes.text} text-white text-left text-justify`}
                                >
                                    Manjaro is a professionally made operating system 
                                    that is a suitable replacement for Windows or MacOS. 
                                    Multiple Desktop Environments are available through our 
                                    Official and Community editions.
                                </Typography>
                                <Typography
                                    component="div"
                                    className={`flex justify-center items-center`}
                                >
                                    <Button
                                        className={`${classes.page_button} ${classes.button_download} focus:outline-none`}
                                    >
                                        <Typography
                                            id="typed-elem"
                                            component="span"
                                            className={`text-white`}
                                        >
                                            Download
                                        </Typography>
                                        <Typography
                                            id="typed-cursor"
                                            component="span"
                                            className={`text-white ${classes.typedCursor}`}
                                        >
                                            |
                                        </Typography>
                                        <FontAwesomeIcon
                                            icon={faAngleDoubleDown}
                                            className={`${classes.fa_icon} text-white ml-3`}
                                        />
                                    </Button>
                                    <Button
                                        className={`${classes.page_button} ${classes.button_more} focus:outline-none`}
                                    >
                                        <Typography
                                            component="span"
                                            className={`text-white`}
                                        >
                                            Learn more
                                        </Typography>
                                        <FontAwesomeIcon
                                            icon={faArrowDown}
                                            className={`${classes.fa_icon} text-white ml-3`}
                                        />
                                    </Button>
                                    <Button
                                        className={`${classes.page_button} ${classes.button_get} focus:outline-none`}
                                    >
                                        <Typography
                                            id="typed-elem"
                                            component="span"
                                            className={`text-white`}
                                        >
                                            Get your Manjaro Shell
                                        </Typography>
                                        <Typography
                                            component="img"
                                            src='./img/shells.svg'
                                            className={`w-5 ${classes.button_img}`}
                                        />
                                    </Button>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Operation);