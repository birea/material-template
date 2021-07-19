import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const useStyles = createStyles((theme) =>({
    panel_bg: {
        backgroundColor: '#23272f'
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
        color: 'white',
        marginBottom: theme.spacing(2)
    },
    card: {
        backgroundColor: '#292e38'
    },
    card_rank: {
        backgroundColor: '#008a81',
        fontSize: 14,
        borderRadius: '0 0 8px 0',
        padding: '.35rem 1rem',
        color: 'white'
    },
    card_name: {
        fontSize: '1.0625rem',
        lineHeight: '1.5'
    },
    card_muted: {
        color: '#8898aa',
        fontSize: 12.8,
        marginBottom: theme.spacing(2)
    },
    icon: {
        color: '#008a81',
        fontSize: '1.5em',
        padding: '3px 0',
        '&:hover': {
            color: '#1090a7'
        }
    },
    card_content: {
        transform: "translateY(-100px)",
        opacity: 0,
        transition: '3s'
    },
    card_content_transition: {
        transform: "translateY(0)",
        opacity: 1
    },
}));

class Alt extends React.Component {
    constructor() {
        super();
        this.state = {
            card_text: [
                { 
                    rank: 'CEO',
                    image: './img/capt.jpg',
                    name: 'John Karony',
                    muted: 'Capt Hodl',
                },
                { 
                    rank: 'CBO',
                    image: './img/thomas.jpg',
                    name: 'Thomas Smith',
                    muted: 'Papa',
                },
                { 
                    rank: 'CTO',
                    image: './img/hank.jpg',
                    name: 'Hank Wyatt',
                    muted: 'It\'s a cat, ok?',
                },
                { 
                    rank: 'COO',
                    image: './img/jack.jpg',
                    name: 'Jack Haines',
                    muted: 'Jack',
                },
                { 
                    rank: 'WEB DEV',
                    image: './img/fox.jpg',
                    name: 'Jacob Smith',
                    muted: 'OG KingFox',
                },
                { 
                    rank: 'EXEC. ASST.',
                    image: './img/charles.jpg',
                    name: 'Charles Karony',
                    muted: 'Charles',
                },
            ],
            scroll: false,
            order: false,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
     }
     handleScroll = () => {
        if (window.scrollY > 3185 && !this.state.scroll ) {
            this.setState({ scroll: true });
        } 
    };
    render() {
        const { classes } = this.props;
        const { card_text, scroll } = this.state;
        return (
            <Box>
                <Box className={`container m-auto py-8`}>
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
                        <Grid
                            container
                            className={`w-full`}
                        >
                            {card_text.map((text, index) => (
                                <Grid
                                    key={index}
                                    item
                                    className={`opacity-0 px-4 w-full md:w-1/3 ${classes.card_content} ${scroll? classes.card_content_transition : '' }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <Card
                                        className={`relative ${classes.card} mb-7`}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image={text.image}
                                            title="Contemplative Reptile"                                            
                                        />
                                        <Typography 
                                            className={`absolute z-10 top-0 left-0 ${classes.card_rank}`}
                                        >
                                            {text.rank}                                            
                                        </Typography>
                                        <CardContent
                                            className={`p-6`}                                            
                                        >
                                            <Typography
                                                className={`${classes.card_name} text-white`}                                                >
                                                {text.name}
                                            </Typography>                                                
                                            <Typography
                                                className={`${classes.card_muted}`}
                                            >
                                                {text.muted}                                                
                                            </Typography>
                                            <Typography
                                                component="div"
                                                className={`text-center`}                                                
                                            >
                                                <Link href="#">
                                                    <FontAwesomeIcon 
                                                        icon={faDiscord}
                                                        className={classes.icon}                                                        />
                                                </Link>
                                                <Link href="#">
                                                    <FontAwesomeIcon 
                                                        icon={faTwitter}
                                                        className={classes.icon}
                                                    />
                                                </Link>
                                                <Link href="#">
                                                    <FontAwesomeIcon 
                                                        icon={faLinkedin}
                                                        className={classes.icon}                                                        
                                                    />
                                                </Link>                                                
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                    </Paper>
                </Box>
            </Box>
        )   
    }
}

export default withStyles(useStyles)(Alt);