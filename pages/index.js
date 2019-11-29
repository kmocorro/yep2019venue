import React, {Fragment, useState} from 'react'
import fetch from 'isomorphic-unfetch'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DeviceHub from '@material-ui/icons/DeviceHub';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';


import NextLink from '../src/Link'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import CheckCircle from '@material-ui/icons/CheckCircle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';

import { green, red } from '@material-ui/core/colors';

import LinearProgress from '@material-ui/core/LinearProgress';
import Head from 'next/head';
import moment from 'moment';

/// essentials-----------------
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {' © '}
          SunPower Fab4 {' '}
        {new Date().getFullYear()}
        {'. Built with ❤️ by '}
          <Tooltip title="Kevin Mocorro" placement="top">
          <Link color="inherit" href="https://kevinmocorro.com">
              kdm
          </Link>
          </Tooltip>
      </Typography>
    );
}
const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
        color: '#333'
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(20)
    },
    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 6,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    approval: {
        width: '100%',
        maxWidth: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    red: {
        color: red[500],
    },
    green: {
        color: green[500],
    }
}));
/// end of essentials

function Employee(props) {
  const classes = useStyles();
  let employee_details = props.show[0];
  let search = props.show.search;
  let noFound = props.show.err;

  // loading bar when "enter event" button has been clicked
  const [ isLoading, setIsLoading ] = useState(false);
  const [ responseMessage, setResponseMessage ] = useState('');

  const manualEmployeeNumber = useSearch('');

  function useSearch(init){
    const [ value, setValue ] = useState(init);

    function handleOnChange(e){
      setValue(e.target.value);
    }

    return {
      value,
      onChange: handleOnChange,
    }
  }
 
  const handleClick = () => {
    
    setIsLoading(true);

    (async () => {
        const res_submit = await fetch(`http://192.168.1.2:9001/api/enter`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              employeeNumber: employee_details.employeeNumber
            })
        });

        //console.log(res_submit);

        const content = await res_submit.json();
        
        console.log(content);

        if(content.success){

            console.log(content.success);
            setIsLoading(false);
            setResponseMessage(content.success);
            
        } else if(content.error){

            console.log(content.err);
            setIsLoading(false);
            setResponseMessage(content.err);
        }

    })();
  }

  return (
      <Fragment>
      <Head>
        <title>2019 YEP</title>
      </Head>
      <CssBaseline />
      <AppBar position="relative" style={{backgroundColor: '#6200E', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 1px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'}}>
          <Toolbar>
          <Grid container>
              <Grid item>
                  <a href="/" style={{textDecoration: "none", color:"#fff"}}> 
                    <Typography component="h2" variant="h6"  color="inherit">
                      2019 YEP
                    </Typography>
                  </a>
              </Grid>
          </Grid>
          <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={2}
          >
              <Grid item>
                  <Typography color="inherit" variant="overline">
                  </Typography>
              </Grid>
              <Grid item>
              </Grid>
          </Grid>
          </Toolbar>
      </AppBar>
      <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {
              employee_details ?
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                     ✔️
                  </Typography>
                  <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                     Account Verified
                  </Typography>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    {employee_details.firstname}{` `}{employee_details.lastname}
                  </Typography>
                </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Card>
                      <CardContent>
                        {
                          employee_details.service_awardee !== "No" ?
                          <Fragment>
                            <Typography  align="center" variant="h4" gutterBottom>
                              {employee_details.service_awardee} 🎉💖
                            </Typography> 
                            <Typography  align="center" variant="body2" noWrap gutterBottom>
                              Congratulations! You are a Service Awardee!
                            </Typography>
                          </Fragment>
                          : <></>
                        }
                        <Typography align="center" variant="h4" gutterBottom>
                          {employee_details.employeeNumber}
                        </Typography>
                        <Typography align="center" variant="body2" noWrap gutterBottom>
                          Employee number
                        </Typography>
                          {
                            employee_details.shift == 'X' || employee_details.shift == 'Z' ?
                            <Typography align="center" variant="h4" gutterBottom>
                              {`${employee_details.shift} - December 4`}
                            </Typography>
                            :
                            <Typography align="center" variant="h4" gutterBottom>
                            {`${employee_details.shift} - December 5`}
                            </Typography>
                          }
                        <Typography align="center" variant="body2" noWrap gutterBottom>
                          Shift - Schedule
                        </Typography>
                        {
                          employee_details.outgoingRoute !== '\r' ?
                          <Fragment>
                            <Typography align="center" variant="h4" gutterBottom>
                              {employee_details.outgoingRoute}
                            </Typography>
                            <Typography align="center" variant="body2" noWrap gutterBottom>
                              Outgoing Route
                            </Typography>
                          </Fragment>
                          : <></>
                        }
                      </CardContent>
                    </Card>
                  </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Please make sure to check the ID and the details above before clicking Enter Event.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  {
                    isLoading ?
                      <LinearProgress/>
                    :
                    responseMessage !== '' ?
                      <Typography align="center" variant="h4">
                        {responseMessage}
                      </Typography>
                      :
                      employee_details.isEmployeeRegistered ?
                      <Typography align="center" variant="h4">
                        Already Registered.
                      </Typography>
                      :
                      moment(new Date()).startOf('day').isSame('2019-12-04') ?
                        employee_details.shift == 'X' || employee_details.shift == 'Z' ?
                        <Button onClick={handleClick} type="submit" size="large" fullWidth color="primary" variant="contained">
                          Enter Event
                        </Button>
                        :
                        <Typography align="center" variant="h4" gutterBottom>
                          You are scheduled tomorrow.
                        </Typography>
                      :
                      moment(new Date()).startOf('day').isSame('2019-12-05') ?
                        employee_details.shift == 'Y' || employee_details.shift == 'E' || employee_details.shift == 'F' ?
                        <Button onClick={handleClick} type="submit" size="large" fullWidth color="primary" variant="contained">
                          Enter Event
                        </Button>
                        :
                        <Typography align="center" variant="h4" gutterBottom>
                          You are scheduled yesterday.
                        </Typography>
                      : 
                      <Typography align="center" variant="h4" gutterBottom>
                        No scheduled party today.
                      </Typography>
                  }
                </Grid>
              </Grid>
              :
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant="h2" align="center" gutterBottom>
                    Search
                  </Typography>
                  <Typography variant="h5" align="center" gutterBottom>
                    {noFound}
                  </Typography>
                  <TextField autoFocus variant="outlined" fullWidth onChange={manualEmployeeNumber.onChange} value={manualEmployeeNumber.value} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    As registration committe, you must validate the result and verify it using their ID.
                  </Typography>
                  <Link href={`/?e=${manualEmployeeNumber.value}`}>
                    <Button variant="contained" size="large" fullWidth color="primary">
                      Search Employee
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            }
          </Container>
          </div>
          {/* End hero unit */}
          { /**
          <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={2}>

          </Grid>
          </Container>
          */ }
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
              {/** meta/yep */}
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
             {/**  2019 Year End Party Online Registration */}
          </Typography>
          <Copyright />
          <Typography variant="caption" align="center" color="textSecondary" component="p">
          {/** meta is made possible through the work of other open source software. */}
          </Typography>
      </footer>
      {/* End footer */}
      </Fragment>
  );
}

Employee.getInitialProps = async function(context) {
  const { e, s } = context.query;
  if(e){

    const res = await fetch(`http://localhost:9001/?e=${e}&s=${s}`);
    const show = await res.json();
    
    //console.log(show);
    return {show};
  } else {
    
    const res = await fetch(`http://localhost:9001/`);
    const show = await res.json();
    
    //console.log(show);
    return {show};
  }
}

export default Employee;