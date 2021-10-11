import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productRedux';
import { addToCart } from '../../../redux/cartRedux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import styles from './ProductPage.module.scss';


const Component = ({ className, product, addToCart }) => {
  const [value, setValue] = React.useState(1);
  const onChange = ({ target }) => {
    setValue(parseInt(target.value));
  };
  const {
    content, image, title, price,
  } = product;

  return (
    <div className={clsx(className, styles.root)}>

      <Paper className={styles.component} elevation={9}>
        <Grid container spacing={3} alignContent="center" justify="center">
          <Grid item xs={12} sm={5}>
            <div className={styles.photoWrapper}>
              <img src={product.image} alt="alternative" />
            </div>
            <CardActions className={styles.actions}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon className={styles.favorite} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon className={styles.share} />
              </IconButton>
              <Button
                className={styles.button}
                color="primary"
                variant="contained"
                onClick={() => addToCart({
                  title, price, image, value,
                })}
              >
                Add to cart</Button>
            </CardActions>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Card className={styles.card}>
              <CardContent className={styles.content}>
                <div className={styles.title}>
                  {title}
                </div>
                <div className={styles.text}>
                  {content}
                </div>

                <input type="number" min="1" max="10" value={value} onChange={onChange} />
                <div className={styles.price}>
                  $
                  {price}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  addToCart: PropTypes.func,
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    content: PropTypes.string,
  }),
};

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: ({
    title, price, image, value,
  }) => dispatch(addToCart({
    title, price, image, value,
  })),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};