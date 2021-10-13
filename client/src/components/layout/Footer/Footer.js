import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h4>company</h4>
          <ul>
            <li><a href="/">about us</a></li>
            <li><a href="/">our services</a></li>
            <li><a href="/">privacy policy</a></li>
            <li><a href="/">affiliate program</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>get help</h4>
          <ul>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">shipping</a></li>
            <li><a href="/">returns</a></li>
            <li><a href="/">order status</a></li>
            <li><a href="/">payment options</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>online shop</h4>
          <ul>
            <li><a href="/">saxophone</a></li>
            <li><a href="/">guitar</a></li>
            <li><a href="/">violin</a></li>
            <li><a href="/">trumpet</a></li>
            <li><a href="/">piano</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>follow us</h4>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className={styles.icon}>Instagram</InstagramIcon>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className={styles.icon}>Facebook</FacebookIcon>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon className={styles.icon}>YouTube</YouTubeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};