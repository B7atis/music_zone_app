import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Slider.module.scss';
import clsx from 'clsx';

export class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  componentDidMount() {
    const { slides } = this.props;
    const changeCurrent = () => {
      if (this.state.current !== slides.length - 1) {
        this.setState(() => ({
          current: this.state.current + 1,
        }));
      } else {
        this.setState(() => ({
          current: 0,
        }));
      }
    };

    setInterval(changeCurrent, 8000);
  }

  render() {
    const { slides } = this.props;
    return (
      <div className={styles.root}>
        {
          slides.map((item, index) => {
            return (
              <div
                key={`slide-${index}`}
                className={index === this.state.current ? clsx(styles.slide, styles.active) : styles.slide}
                style={{ backgroundImage: `url(${item.image})` }}
              >
              </div>
            );
          })
        }
      </div >
    );
  }
}

Slider.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.array,
};

