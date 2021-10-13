import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          className={styles.contact}>
          Contact Us
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          className={styles.info}>
          Fill up the form and our team will get back to you within 24 hours.
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                name="firstName"
                label="First name"
                placeholder="Enter first name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last name"
                placeholder="Enter last name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email adress"
                placeholder="Enter email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="Phone"
                name="Phone"
                label="Phone number"
                placeholder="Enter phone number"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="Message"
                name="Message"
                label="Message"
                placeholder="Type your message here"
                variant="outlined"
                multiline rows={4}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button className={styles.btn}
                type="submit"
                variant="contained"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};