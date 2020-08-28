import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
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
          <tr>
            <td>
              <img src="https://i.ibb.co/10hBqpX/vans.png" alt="Vans" />
            </td>

            <td>
              <strong>Shoe Vans Classic</strong>
              <span>$ 129,90</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#fff" />
                </button>
                <input type="number" readOnly value={3} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#fff" />
                </button>
              </div>
            </td>

            <td>
              <strong>$ 389,70</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#fff" />
              </button>
            </td>
          </tr>
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

export default Cart;
