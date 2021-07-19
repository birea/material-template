import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const useStyles = createStyles((theme) =>({
    panel_bg: {
        backgroundColor: '#1f232b'
    },
}));

class ListMenu extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Box className={`container m-auto`}>
                    <Paper className={`${classes.panel_bg} py-8 px-4 flex flex-col lg:flex-row justify-center items-center `}>
                        <Box>
                            <Box 
                                component="img"
                                src='./img/Newsweek-logo.png'
                                className={`mx-4 h-5 mb-4 lg:mb-0`}
                            />
                        </Box>
                        <Box>
                            <Box 
                                component="img"
                                src='./img/wsj.png'
                                className={`mx-4 h-5 mb-4 lg:mb-0`}
                            />
                        </Box>
                        <Box>
                            <Box 
                                component="img"
                                src='./img/Bloomberg-logo.png'
                                className={`mx-4 h-5 mb-4 lg:mb-0`}
                            />
                        </Box>
                        <Box>
                            <Box 
                                component="img"
                                src='./img/benzinga.png'
                                className={`mx-4 h-5 mb-4 lg:mb-0`}
                            />
                        </Box>
                        <Box>
                            <Box 
                                component="img"
                                src='./img/express.png'
                                className={`mx-4 h-5`}
                            />
                        </Box>
                    </Paper>
                </Box>
            </React.Fragment>
        )   
    }
}

export default withStyles(useStyles)(ListMenu);