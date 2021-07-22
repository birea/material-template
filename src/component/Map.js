import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { createStyles } from "@material-ui/core";
import { Box, Paper } from "@material-ui/core";
import GoogleMapReact from "google-map-react";

const useStyles = theme => createStyles({
    paper: {
        width: 800,
        margin: '20px auto',
    },
    box: {
        width: '100%',
        height: 400,
    }
})
class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 12,
        }
    }
    ddd() {
        console.log("dddd");
        this.setState({
            center: { lat: 10, lng: 10 }
        })
        console.log(this.state.center)
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.paper}>
                    <button onClick={this.ddd.bind(this)}>dfdfderer</button>
                    <Box className={classes.box}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={this.state.center}
                            defaultZoom={this.state.zoom}
                        >
                        </GoogleMapReact>
                    </Box>
                </Paper>
            </React.Fragment>
        )
    }
}
export default withStyles(useStyles)(Map)