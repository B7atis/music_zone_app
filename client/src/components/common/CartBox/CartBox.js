import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { removeFromCart, updateValue, addNotes } from '../../../redux/cartRedux';

import styles from './CartBox.module.scss';

const Component = ({
  _id, className, title, image, price, value, removeFromCart, updateValue, addNotes,
}) => (
  <div className={clsx(className, styles.root)}>
    <Table className={styles.table} aria-label="cart table">
      <TableBody>
        <TableRow>
          <TableCell className={styles.tableCell}>
            <img src={image} alt="alternative" className={styles.image} />
          </TableCell>
          <TableCell className={styles.title}>
            {title}
          </TableCell>
          <TableCell className={styles.tableCell}>
            <textarea
              placeholder="Type here if u want something changed"
              onChange={(e) => addNotes({ _id, notes: e.target.value })}
            />
          </TableCell>
          <TableCell className={styles.tableCell}>
            <Button
              color="secondary"
              variant="outlined"
              className={styles.delete}
              onClick={() => removeFromCart(_id)}
            >
              <DeleteIcon />
            </Button>
          </TableCell>
          <TableCell className={styles.tableCell}>
            <input
              type="number"
              min="1"
              max="10"
              value={value}
              onChange={(e) => updateValue({ _id, value: parseInt(e.target.value) })}
            />

          </TableCell>
          <TableCell align="center" className={styles.tableCell}>
            $
            {price}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  value: PropTypes.number,
  _id: PropTypes.string,
  removeFromCart: PropTypes.func,
  updateValue: PropTypes.func,
  addNotes: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (_id) => dispatch(removeFromCart(_id)),
  updateValue: ({ _id, value }) => dispatch(updateValue({ _id, value })),
  addNotes: ({ _id, notes }) => dispatch(addNotes({ _id, notes })),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as CartBox,
  Component as CartBoxComponent,
};