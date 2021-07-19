import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

const useStyles = createStyles((theme) =>({
    panel_bg: {
        backgroundColor: '#1f232b'
    },
    list_bg: {
        borderRadius: 6,
        backgroundColor: '#292e38',
        '&:hover': {
            backgroundColor: '#292e38'
        }
    },
    primary_text: {
        fontSize: '1.25rem',
        color: 'white',
        marginBottom: theme.spacing(2)
    },
    secondary_text: {
        fontSize: '1rem',
        color: '#ced4da'
    },
    list_primary_text: {
        color: 'white',
        fontSize: '1.0625rem',
        fontWeight: '900'
    },
    list_secondary_text: {
        color: '#ced4da',
        fontSize: 12.8
    }
}));

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            text: [
                { 
                    primary_text: 'Community Driven', 
                    secondary_text: 'Community driven &amp; fair launch. The dev team burned all of their tokens and participated with everyone else.'
                },
                {
                    primary_text: 'Automatic LP',
                    secondary_text: 'Every trade contributes towards automatically generating liquidity that goes into multiple pools used by exchanges'
                },
                {
                    primary_text: 'RFI Static Rewards',
                    secondary_text: 'Holders earn passive rewards through static reflection as they watch their balance of SafeMoon grow indefinitely.'
                }
            ],
            list_text: [
                { primary: '0.000003033', secondary: '0.000003033' },
                { primary: '2,420,799', secondary: 'Holders' },
                { primary: '580,633,916,228,628.9', secondary: 'Supply' },
                { primary: '$1,786,029,896.29', secondary: 'Market Cap' }
            ],
            img_num: 0
        }
        this.ChangeImgNum = this.ChangeImgNum.bind(this);
    }
    ChangeImgNum = (key) => (e) => {
        this.setState({ img_num: key })
    }
    render() {
        const { classes } = this.props;
        const { text, img_num, list_text } = this.state;
        return(
            <React.Fragment>
                <Grid container className={`container m-auto py-8`}>
                    <Paper className={`${classes.panel_bg} w-full px-4 py-8`}>
                        <List
                            className={`flex flex-col sm:flex-row`}
                        >
                            {list_text.map((text, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        className={`text-center`}
                                        classes={{ primary: classes.list_primary_text, secondary: classes.list_secondary_text}}
                                        primary={text.primary}
                                        secondary={text.secondary} 
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Box className={`flex items-center`}>
                            <Grid item className={`w-full lg:w-1/2 px-4`}>
                                <List className={`flex flex-col justify-center h-full`}>
                                    {text.map((text, index) => (
                                        <ListItem
                                            key={index}
                                            button
                                            className={`mb-4 ${img_num === index ? classes.list_bg : '' }`}
                                            onClick={this.ChangeImgNum(index)}
                                        >
                                            <ListItemText 
                                                classes={{ primary: classes.primary_text, secondary: classes.secondary_text }}
                                                primary={text.primary_text}   
                                                secondary={text.secondary_text}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item className={`w-full lg:w-1/2 px-4`}>
                                <Box
                                    className={`max-w-full`}
                                    component="img"
                                    src={img_num === 0 ? './img/team.svg' : (img_num === 1 ? './img/vault-animate.svg' : './img/statistics-animate.svg' )}
                                />
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(About);