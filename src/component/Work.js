// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { createStyles, withStyles, withTheme } from '@material-ui/core/styles';

// import { connect } from 'react-redux'





// const useStyles = theme => createStyles({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(./img/signinbg.png)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },  
//   signinwidth: {
//     maxWidth: 400,
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// });

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ChangeEmail = e => this.props.onChangeEmail(e.target.value);
//     this.ChangePassword = e => this.props.onChangePassword(e.target.value);
//     this.dddd = this.dddd.bind(this);
//     // this.submit = (email, password) => e => {
//     //   e.preventDefault();
//     //   this.props.onSubmit(email, password);
//     // }
//   }
//   dddd(e) {
//     e.preventDefault();
//     console.log(this.props)
//   }
//   render() {
//     const { classes } = this.props;  
//     return (
//       <Grid container component="main" className={classes.root}>
//         <CssBaseline />
//         <Grid item xs={false} sm={4} md={7} className={classes.image} />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} className={`px-8`}>
//           <Box className={`flex flex-col items-center my-16 mx-auto ${classes.signinwidth}`}>
//             <Avatar className={classes.avatar}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <form className={`mt-2 w-full`} noValidate>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 onChange={this.ChangeEmail}
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange={this.ChangePassword}
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={`focus:outline-none ${classes.submit}`}
//                 onClick={this.dddd}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="/signup" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Box mt={5}>
//               </Box>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//     );
//   }
// }

// export default withStyles(useStyles)(SignIn);