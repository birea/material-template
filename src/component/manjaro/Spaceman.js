import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const useStyles = createStyles((theme) =>({
    panel_bg: {
        backgroundColor: '#1f232b'
    },
    rocket_icon: {
        fontSize: '5em',
        color: '#fb6340'
    },
    road_map: {
        color: '#008a81',
        fontSize: 36,
    },
    question: {
        color: '8898aa',
        marginBottom: theme.spacing(2)
    },
    items_start: {
        alignItems: 'flex-start',
    },
    step: {
        fontSize: 12,
        color: 'white',
    },
    timeline: {
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 10,
            left: 90,
            backgroundColor: '#ff6b6b',
            border: '3px solid #ff6b6b',
            borderRadius: '100%',
            width: 15,
            height: 15,
            transition: 'background .3s ease-in-out,border .3s ease-in-out'
        },
        '&::after': {
            content: '""',
            width: 3,
            backgroundColor: '#ccd5db',
            position: 'absolute',
            top: 30,
            left: 96,
            bottom: 8,
        }
    },
    bg_transparent: {
        '&::before': {
            backgroundColor: 'transparent'
        }
    },
    list_item_text: {
        margin: 0,
        padding: theme.spacing(1, 0, 5, 4),
        transform: "translateY(-100px)",
        opacity: 0,
        transition: '3s'
    },
    primary_text: {
        fontSize: '1.0625em',
        color: 'white',
        marginBottom: theme.spacing(1)
    },
    secondary_text: {
        fontSize: 12.8,
        color: 'white',
        lineHeight: 1.7
    },
    spaceman: {
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${"./img/spaceman.png"})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 50%',
            animation: `$spaceman 15000ms ${theme.transitions.easing.easeInOut} infinite`
        },
        ["@media (max-width: 1024px)"]: { 
            '&::before': {
                opacity: '0.3'
            }
        },
    },
    height_none: {
        '&::after': {
            height: 0
        }
    },
    list_content_transition: {
        transform: "translateY(0)",
        opacity: 1
    },
    "@keyframes spaceman": {
        "0%": {
            transform: "translateY(0)"
        },
        "50%": {
            transform: "translateY(35px)"
        },
        "100%": {
          transform: "translateY(0)"
        }
    },
}));

class Spaceman extends React.Component {
    constructor() {
        super();
        this.state = {
            list_text: [
                {
                    q: 'Q1 2021',
                    title: 'Protocol Initialized',
                    text: 'We have successfully onboarded and confirmed a DogeCoin trading pair with Bibipom. We have also successfully begun integration process with WhiteBit and began legal paperwork with Bitmart. Our team size has doubled and our marketing campaign has begun.'
                },
                {
                    q: 'Q2 2021',
                    title: 'The Initial Push',
                    text: 'The Whitebit tokenomics integration will be completed along with the completion of the SafeMoon App, Wallet, and Game(s). The Bitmart integration with tokenomics will also be completed in this quarter. We will begin architecting the NFT Exchange as well as video-game integrations. We will be integrating SafeMoon with African Markets in addition to setting up a Charity drive and charity vote. We will be exploring other exchanges (i.e. Binance) and begin architecting the SafeMoon Exchange. We will be expanding the team by 35% and establish a UK/Ireland office. We will be architecting a crypto educational app as well as onboarding new partners.'
                },
                {
                    q: 'Q2 2021',
                    title: 'Holding the Line',
                    text: 'We will finish our crypto educational app and begin our own charity project. We will begin a community listing donation raise for several exchanges (i.e. Coinbase, Binance, Kraken). We will finish our NFT exchange and release our first video game with SafeMoon integrated. We will be expanding the team by 25% and do a community meetup (pending covid restrictions). We will also be integrating with other large exchanges (I.e. Binance, Mandala).'
                },
                {
                    q: 'Q2 2021',
                    title: 'To the Moon!',
                    text: 'We will finish the SafeMoon Exchange and our charity project. We will finish integrations with our first African market and begin the next integrations with additional African markets. We will create an African based SafeMoon Office and begin hiring in those markets to create jobs. We will be taking donations for our next charity project and begin a vote on the next project as well. We will be establishing a SafeMoon Scholarship in this quarter as well.'
                },
            ],
            hover: false,
            list_num: 5,
            scroll: false,
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.haddlehover = this.haddlehover.bind(this);
        this.haddleout = this.haddleout.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
     }
     handleScroll = () => {
        if (window.scrollY > 2150 && window.scrollY < 3650 && !this.state.scroll ) {
            this.setState({ scroll: true });
        } 
    };
    haddlehover = (index) => (e) => {
        this.setState({
            hover: true,
            list_num: index
        })
    }
    haddleout = (index) => (e) => {
        this.setState({
            hover: false,
            list_num: 5
        })
    }
    render() {
        const { classes } = this.props;
        const { list_text, list_num, scroll } = this.state;
        return (
            <Box>
                <Box className={`py-8 container m-auto ${classes.spaceman}`}>
                    <Paper className={`${classes.panel_bg} py-8 px-4`}>
                        <Grid 
                            container 
                            className={`text-center flex-col mb-6`}
                        >
                            <FontAwesomeIcon
                                className={`${classes.rocket_icon} mb-4 mx-auto`}
                                icon={faRocket}
                            />
                            <Typography
                                className={classes.road_map}
                            >
                                The RoadMap
                            </Typography>
                            <Typography 
                                className={classes.question}
                            >
                                What we'll be up to in 2021
                            </Typography>
                        </Grid>
                        <Box
                            className={`w-full lg:w-7/12 ml-auto`}
                        >
                            <List>
                                {list_text.map((text, index) => (
                                    <ListItem 
                                        key={index}
                                        className={`${classes.items_start}`}
                                        onMouseOver={this.haddlehover(index)}
                                        onMouseOut={this.haddleout(index)}
                                    >
                                        <Typography
                                            className={`pr-7 whitespace-nowrap ${classes.step}`}
                                        >{text.q}</Typography>
                                        <Box 
                                            className={`${classes.timeline} 
                                                ${list_num === index ? classes.bg_transparent : '' } 
                                                ${index === 3 ? classes.height_none : ''}`}
                                        ></Box>
                                        <ListItemText
                                            primary={text.title} 
                                            classes={{ primary: classes.primary_text, secondary: classes.secondary_text}}
                                            secondary={text.text}
                                            className={`${classes.list_item_text} ${scroll? classes.list_content_transition : '' }`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        )   
    }
}

export default withStyles(useStyles)(Spaceman);