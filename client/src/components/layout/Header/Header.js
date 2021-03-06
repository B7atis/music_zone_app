import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Cart } from '../../views/Cart/Cart';
import { GiMusicSpell } from 'react-icons/gi';

import styles from './Header.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Button className={styles.title} href="/">
          <GiMusicSpell className={styles.icon} />
          <h1><span>Music</span>Zone</h1>
        </Button>
        <div className={styles.menu}>
          <Button href="/" color="inherit">Home</Button>
          <Button href="/contact" color="inherit">Contact</Button>
          <Cart />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
