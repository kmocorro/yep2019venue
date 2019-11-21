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

import { CSVLink, CSVDownload } from 'react-csv';

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
    listahan: {
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

function Listahan(props) {
  const classes = useStyles();
  const employeeList = props.show || [];
 // console.log(props.show);

  return (
      <Fragment>
          <Head>
            <title>2019 YEP - Download</title>
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
            <Typography variant="h2" align="center">
                Attendees of
            </Typography>
            <Typography variant="h2" align="center" gutterBottom>
                Silhouttes: A Black & White Gala
            </Typography>
            <Grid container justify="center">
                <Grid item>
                <CSVLink data={employeeList} filename={"2019-YEP.csv"} style={{textDecoration: "none", color: "#333"}}>
                    <Button variant="outlined" color="primary">Download here</Button>
                </CSVLink>
                </Grid>
            </Grid>
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

Listahan.getInitialProps = async function() {
    const res = await fetch(`http://192.168.1.2:9001/listahan`);
    const show = await res.json();
    
    return {show};
  
}

export default Listahan;