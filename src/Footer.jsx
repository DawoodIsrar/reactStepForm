import React from 'react';
import { CssBaseline, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../src/img/stellar-career-college-logo-1@2x.png'; // Check the path

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#962520',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
    },
    box: {
        flex: 1,
        padding: theme.spacing(2),
        backgroundColor: '#962520', // Match the footer background color
        color: theme.palette.primary.contrastText,
        border: 'none', // Remove the border
        boxShadow: 'none', // Remove any box shadow
      },
}));

function Footer() {
    const classes = useStyles();

    return (
        <>
            {/* Check if the image path is correct */}
            <div className={classes.root}>
                <div className='f-logo'>
                    <img src={logo} alt='No image found' />
                    <div className='f-logo'>
                        <h2>Ready To Get Started?</h2>
                        <span><button>Contact us</button></span>
                    </div>
                </div>

                <CssBaseline />
                <Container className={classes.container}>
                    <Paper className={classes.box}>
                        <h4>
                            Subscribe To Our
                            Newsletter
                        </h4>
                    </Paper>
                    <Paper className={classes.box}>
                        <h2>
                            Training Program
                        </h2>
                        <h4>Bachelor's Degree Program</h4>
                        <h4>Associate Degree Programs (Hybrid)</h4>
                        <h4>Associate Degree Programs (100% Online)</h4>
                        <h4>
                            Diploma Programs
                        </h4>
                    </Paper>
                    <Paper className={classes.box}>
                        <h2>
                            Others
                        </h2>
                        <h4>Home</h4>
                        <h4>About Us</h4>
                        <h4>Career Services</h4>
                        <h4>
                            Contact Us
                        </h4>
                        <h4>
                            Blogs
                        </h4>
                    </Paper>
                    <Paper className={classes.box}>
                        <h2>
                            Links
                        </h2>
                        <h4>5521 Lincoln Hwy, Suite 301, Crown Point, IN 46307, United States</h4>
                        <h4>
                            (219) 900-5700
                        </h4>
                        <h4>Fax : (312) 374-6223</h4>
                        <h4>
                            stellarindiana@gmail.com
                        </h4>
                    </Paper>
                </Container>
                <div className='f-logo'>
                    <h3>Copyright 2023 © CXS  All Rights Reserved.</h3>
                    <div className='f-logo'>
                        <h2>Ready To Get Started?</h2>
                        <span><button>Contact us</button></span>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
