import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const useStyles = createStyles((theme) =>({
    panel_bg: {
        backgroundColor: 'hsl(218deg 11% 15%)'
    },
    footer_text: {
        color: '#cecccc'
    }
}));

class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Box className={`container m-auto text-center text-white py-4`}>
                    <Paper className={`${classes.panel_bg} py-3`}>
                        <Typography className={classes.footer_text}>
                            <FontAwesomeIcon 
                                icon={faCopyright}
                                className={`${classes.footer_text} mr-2`}
                            />
                            2011 - 2021 Philip Muller & Manjaro Developers
                        </Typography>
                        <Typography className={classes.footer_text}>
                            Privacy Policy &#183; Terms of Use &#183; Imprint
                        </Typography>
                    </Paper>
                </Box>
            </React.Fragment>
        )   
    }
}

export default withStyles(useStyles)(Footer);