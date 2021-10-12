import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { OrderBox } from '../../common/OrderBox/OrderBox';
import { getCart, getTotal, sendOrder } from '../../../redux/cartRedux';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


import styles from './OrderSummary.module.scss';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        firstName: '',
        lastName: '',
        address1: '',
        adress2: '',
        city: '',
        region: '',
        code: '',
        country: '',
      },
    };
  }

  handleChange = (event, name) => {
    const { order } = this.state;

    this.setState({ order: { ...order, [name]: event.target.value } });
  };

  handleSubmit = async () => {
    const { order } = this.state;
    const { sendOrder, cart, total } = this.props;
    await sendOrder({ order, cart, total });
  };

  render() {
    const {
      className, cart, total,
    } = this.props;
    const { handleSubmit, handleChange } = this;
    const { order } = this.state;

    return (
      <div className={clsx(className, styles.root)}>

        <Card>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              className={styles.shipping}
            >
              Shipping address
            </Typography>
            <Grid
              className={styles.container}
              container
              spacing={3}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  variant="outlined"
                  fullWidth
                  required
                  value={order.firstName}
                  onChange={(e) => handleChange(e, 'firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  variant="outlined"
                  fullWidth
                  required
                  value={order.lastName}
                  onChange={(e) => handleChange(e, 'lastName')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  variant="outlined"
                  fullWidth
                  required
                  value={order.address1}
                  onChange={(e) => handleChange(e, 'address1')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  variant="outlined"
                  fullWidth
                  value={order.address2}
                  onChange={(e) => handleChange(e, 'address2')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  required
                  value={order.city}
                  onChange={(e) => handleChange(e, 'city')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  variant="outlined"
                  fullWidth
                  value={order.region}
                  onChange={(e) => handleChange(e, 'region')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  variant="outlined"
                  fullWidth
                  required
                  value={order.code}
                  onChange={(e) => handleChange(e, 'code')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="country"
                  name="country"
                  label="Country"
                  variant="outlined"
                  fullWidth
                  required
                  value={order.country}
                  onChange={(e) => handleChange(e, 'country')}
                />
              </Grid>
              <div className={styles.orderCart}>
                {(cart.map((prod) => (<OrderBox key={prod.id} {...prod} />)))}
              </div>
              <Table>
                <TableBody>
                  <TableRow className={styles.orderTable}>
                    <TableCell className={styles.orderContent}>
                      <p>delivery fee: $5</p>
                    </TableCell>
                    <TableCell className={clsx(styles.orderTotal, styles.orderContent)}>
                      <p>
                        total cost: $
                        {total}
                      </p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className={styles.buttonWrapper}>
                <Button variant="contained" color="secondary" href="/">
                  Go back
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleSubmit(order, cart, total)}
                >
                  payment
                </Button>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  cart: PropTypes.array,
  sendOrder: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
  total: getTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrder: ({ order, cart, total }) => dispatch(sendOrder({ order, cart, total })),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as OrderSummary,
  Component as OrderSummaryComponent,
};