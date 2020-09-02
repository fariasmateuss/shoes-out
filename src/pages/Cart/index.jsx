import React from 'react';

import { connect } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr />
          <th>Product</th>
          <th>Amount</th>
          <th>Subtotal</th>
          <tr />
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>

              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>

              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#fff" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#fff" />
                  </button>
                </div>
              </td>

              <td>
                <strong>$ 389,70</strong>
              </td>

              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
                  }
                >
                  <MdDelete size={20} color="#fff" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Check Out</button>

        <Total>
          <span>Total</span>
          <strong>$ 389,70</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
